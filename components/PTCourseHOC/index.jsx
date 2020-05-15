import React from 'react';

import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import classNames from 'classnames';

import io from 'socket.io-client';
import { PageTransitions } from '../PageTransitions';
import Popup from '../Popup';

import './PTCourseHOC.css';

/**
 * CourseHOC
 *
 * @param  {Menu} PTMenu
 * @param  {Nav} PTNav
 * @param  {Object} settings
 */
const PTCourseHOC = (PTMenu, PTNav, settings = {}) => (
  class Course extends React.PureComponent {
    constructor(props) {
      super(props);

      this.socket = io('http://localhost:4000');

      // Using hash TODO: general pages are less than 100
      const basePage = Number(document.location.hash.split('/')[1]) || 0;
      let page = basePage;
      if (page === 0) document.location.hash = '#page/0';

      if (page > 100) page = Math.floor(page / 100);

      // LocalStorage for visitedPages
      const visitedPages = (localStorage.visitedPages
        && JSON.parse(localStorage.visitedPages)) || [];
      const currentPage = this.props.currentPage || page;

      if (visitedPages.indexOf(currentPage) === -1) {
        visitedPages.push(currentPage);
      }

      if (page !== basePage) visitedPages.push(basePage);

      localStorage.visitedPages = JSON.stringify(visitedPages);

      this.state = {
        currentPage,
        visitedPages,
        menuIsVisible: settings && settings.PTMenu && settings.PTMenu.showMenu
      };
    }


    /**
     * Calls the next page from PageTransitions component and updates the course state.
     */
    nextPage = (options = {}) => {
      const opts = PageTransitions.normalization(options);
      let nextPage;

      if (opts.page > 100) {
        document.location.hash = `#page/${opts.page}`;
        this.addVisitedPage(opts.page);
        opts.page = Math.floor(opts.page / 100);
        nextPage = this.pt.nextPage(opts);
        this.addVisitedPage(nextPage);
      } else {
        nextPage = this.pt.nextPage(opts);
        this.addVisitedPage(nextPage);
        document.location.hash = `#page/${nextPage}`;
      }

      this.setState({
        currentPage: nextPage
      });
    }

    /**
     * Call the previous page from PageTransitions component and updates the course state.
     */
    backPage = (animation) => {
      const backPage = this.pt.backPage(animation);

      document.location.hash = `#page/${backPage}`;

      this.addVisitedPage(backPage);
      this.setState({
        currentPage: backPage
      });
    }

    /**
     * Adds a new page into visitedPages array
     * For the slides are idx_parent * 100 + idx_page )
     *
     * @param  {int} page idx of the page
     */
    addVisitedPage = (page) => {
      if (this.state.visitedPages.indexOf(page) !== -1) return;

      const visitedPages = [...this.state.visitedPages, page];

      this.setState({
        visitedPages
      });

      localStorage.visitedPages = JSON.stringify(visitedPages);
    }

    /**
     * Resets the visitedPages array.
     */
    resetVisitedPages = () => {
      Popup.open({
        title: 'Reiniciar progreso',
        content: (
          <div>
            <strong>¿Estás seguro que deseas reiniciar el progreso?</strong>, todos los datos de
            progreso de éste curso serán eliminados, y volverás a comenzar el curso.
          </div>
        ),
        btnAccept: true,
        btnCancel: true,
        onClickAccept: () => {
          this.setState({
            visitedPages: []
          });

          localStorage.removeItem('visitedPages');

          this.nextPage(0);
          Popup.close();
        },
        onClickCancel: () => {
          Popup.close();
        }
      });
    }

    /**
     * Lifecycle method.
     *
     * Updating state from new props.
     */
    componentDidUpdate(props) {
      if (props.currentPage !== this.props.currentPage) {
        this.nextPage(this.props.currentPage);
      }
    }

    /**
     * Change the state of the menuIsVisible var.
     *
     * @param  {boolean} menuIsVisible
     */
    menuIsVisible = (menuIsVisible) => {
      this.setState({
        menuIsVisible
      });
    }

    /**
     * Render method.
     *
     * Creates and configures all components (PTMenu, Popup, Pages and others) of the course.
     */
    render() {
      return (
        <div id='course'>
          <Popup />

          {PTNav
            && <PTNav nextPage={this.nextPage}
              backPage={this.backPage}
              isFirstPage={this.state.currentPage === 0}
              isLastPage={this.state.currentPage === this.props.children.length - 1} />}

          {PTMenu && <PTMenu visitedPages={this.state.visitedPages}
            currentPage={this.state.currentPage}
            nextPage={this.nextPage}
            resetVisitedPages={this.resetVisitedPages}
            menuIsVisible={this.menuIsVisible}
            {...settings.PTMenu} />}

          <PageTransitions ref={(pt) => { this.pt = pt; }}
            defaultNextPageAnimation={settings.defaultNextPageAnimation || 8}
            defaultBackPageAnimation={settings.defaultBackPageAnimation || 9}
            currentPage={this.state.currentPage}>

            {this.props.children.map((page) => (
              React.cloneElement(page, {
                visitedPages: this.state.visitedPages,
                addVisitedPage: this.addVisitedPage,
                nextPage: this.nextPage,
                className: classNames(page.props.className, { 'menu-is-visible': this.state.menuIsVisible }),
                socket: this.socket
              })
            ))}

          </PageTransitions>
        </div>
      );
    }
  }
);

export default PTCourseHOC;
