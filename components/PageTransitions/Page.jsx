import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

/* eslint-disable import/no-extraneous-dependencies */
import Modernizr from 'modernizr';
/* eslint-enable import/no-extraneous-dependencies */

import io from 'socket.io-client';
import animations from './animations';

const styles = {
  page: {
    backfaceVisibility: 'hidden',
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    transform: 'translate3d(0,0,0)',
    transformStyle: 'preserve-3d',
    visibility: 'hidden',
    width: '100%'
  },
  currentPage: {
    visibility: 'visible',
    zIndex: 1
  }
};

const animEndEventNames = {
  WebkitAnimation: 'webkitAnimationEnd',
  OAnimation: 'oAnimationEnd',
  msAnimation: 'MSAnimationEnd',
  animation: 'animationend'
};

class Page extends React.PureComponent {
  constructor(props) {
    super(props);

    this.socket = io('http://localhost:4000');
    this.page = React.createRef();

    // Timouts for this page
    this.setTimeouts = [];
  }

  /**
   * Allows to add a function into the array of settimeout functions
   * that will be executed for instance of page.
   *
   * @param {Function} callback The function that will be executed
   * @param {int}   milliseconds The number of milliseconds to wait before executing the code.
   */
  addSetTimeout = (callback, milliseconds) => {
    this.setTimeouts.push(setTimeout(callback, milliseconds));
  }

  /**
   * Clear all settimeout functions for the instance page
   */
  clearSetTimeouts = () => {
    for (let i = this.setTimeouts.length - 1; i >= 0; i -= 1) {
      clearTimeout(this.setTimeouts[i]);
      this.setTimeouts.pop();
    }
  }

  /**
   * componentDidMount method
   *
   * Executes the loadedPageTriggers functions when the component is mounted.
   */
  componentDidMount() {
    this.socket.emit('input', {
      // Insert var for MongodDB
      eventName: `\\${this.component}\\event\\${this.target}_${this.action}`,
      component: 'mod_scorm',
      action: 'viewed',
      target: 'page_transition',
      objectTable: 'scorm',
      objectId: 1,
      crud: 'r',
      userId: 234235,
      userName: 'Pedro_Marin',
      courseId: 12,
      other: {
        page_number: 0
      }
    });

    this.page.current.addEventListener(animEndEventNames[Modernizr.prefixed('animation')], (event) => {
      if (event.target !== this.page.current) return;

      if (this.props.isCurrentPage && this.props.loadedPageTriggers) {
        this.props.loadedPageTriggers.forEach((trigger) => {
          trigger(this, this.page.current);
        });
      }
      this.props.onAnimationEnd(this.props.isCurrentPage, this.props.isPrevPage);
    });
  }

  /**
   * componentWillUnmount method
   *
   * Executes the leavedPageTriggers functions when the component is unmounted
   * and clear the registred setTimeouts.
   */
  componentWillUnmount() {
    if (this.props.leavedPageTriggers) {
      this.props.leavedPageTriggers.forEach((trigger) => {
        trigger(this, this.page.current);
        // console.log(this.page.current);
      });
    }
    this.clearSetTimeouts();
  }

  /**
   * Render method.
   */
  render() {
    let style = this.props.style || {};
    style = { ...styles.page, ...style };
    let className = classNames(this.props.className);

    if (this.props.isCurrentPage || this.props.isPrevPage) {
      style = { ...style, ...styles.currentPage };

      if (this.props.isCurrentPage) {
        className = classNames(className, animations.classes[this.props.animcursor].inClass);
      }

      if (this.props.isPrevPage) {
        className = classNames(className, animations.classes[this.props.animcursor].outClass);
      }
    }

    return (
      <div id={this.props.id} ref={this.page} className={className} style={style}>
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  loadedPageTriggers: PropTypes.array,
  leavedPageTriggers: PropTypes.array
};

export default Page;
