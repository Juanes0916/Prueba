import React from 'react';

import classNames from 'classnames';

import Store from './Store';
import Constants from './Constants';

import './Popup.css';

// Init settings for a popup
const initPopup = {
  id: null,
  title: null,
  content: null,
  btnAccept: false,
  btnCancel: false,
  classes: null,
  className: null,
  noPadding: false,
  onClickAccept: () => true,
  onClickCancel: () => true,
  onOpenPopup: () => {},
  onClosePopup: () => {}
};

// Store pattern for popups
const store = new Store();

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: null
    };
  }

  /**
   * Initializes a popup from content param and call to Store.
   *
   * @param  {Object/String} content Setting for popup
   */
  static open(settings) {
    let popup = null;

    if (typeof settings === 'string') {
      popup = { ...initPopup, ...{ content: settings } };
    } else {
      popup = { ...initPopup, ...settings };
    }

    popup.id = store.getId();

    store.openPopup(popup);
  }

  /**
   * Closes the actived popup
   */
  static close() {
    store.closePopup();
  }

  /**
   * Sets up the popup param as popup to render.
   *
   * @param  {Object} popup Popup setting to render.
   */
  onOpen = () => {
    const currentPopup = store.currentPopup();
    this.setState({
      popup: currentPopup
    });
  }

  /**
   * Sets up the popup prop of the state to null
   */
  onClose = () => {
    this.setState({
      popup: null
    });
  }

  /**
   * Lifecycle method
   */
  componentDidMount() {
    store.on(Constants.OPEN, this.onOpen);
    store.on(Constants.CLOSE, this.onClose);
  }

  /**
   * Lifecycle method
   */
  componentWillUpdate() {
    if (this.state.popup) {
      this.state.popup.onClosePopup();
    }
  }

  /**
   * Lifecycle method
   */
  componentDidUpdate() {
    if (this.state.popup) {
      this.state.popup.onOpenPopup();
    }
  }

  /**
   * Render function
   */
  render() {
    let popupWrapper = null;
    const display = this.state.popup ? 'flex' : 'none';
    const className = (this.state.popup && this.state.popup.className) || this.props.className;

    if (this.state.popup) {
      const { content } = this.state.popup;

      popupWrapper = (
        <div className={`${className}-wrapper`}
             key={this.state.popup.id}
             onClick={ (e) => e.stopPropagation() }
             style={
                {
                  minWidth: this.state.popup.minWidth,
                  maxWidth: this.state.popup.maxWidth,
                  width: this.state.popup.width,
                  height: this.state.popup.height
                }
              }>

          {this.state.popup.title
            && <div className={`${className}-header`}>
                {this.state.popup.title}
              </div>
          }

          <div className={classNames(`${className}-content`, { 'no-padding': this.state.popup.noPadding })}>
            {content}
          </div>

          {(this.state.popup.btnAccept || this.state.popup.btnCancel)
            && <div className={`${className}-footer`}>
                {this.state.popup.btnAccept
                  && <button className={`${className}-btn-accept`}
                             onClick={(el) => this.state.popup.onClickAccept(el, this)}>
                        {this.props.txtAccept}
                      </button>
                }

                {this.state.popup.btnCancel
                  && <button className={`${className}-btn-cancel`}
                             onClick={this.state.popup.onClickCancel}>
                        {this.props.txtCancel}
                      </button>
                }
              </div>
          }

        </div>
      );
    }

    return (
      <div className={`${className}-container`} style={{ display }} onClick={Popup.close}>
        <button onClick={ (e) => { e.stopPropagation(); Popup.close(); }} className={`${className}-btn-close`} />
        { popupWrapper }
      </div>
    );
  }
}

Popup.defaultProps = {
  className: 'unc-popup',
  txtAccept: 'Aceptar',
  txtCancel: 'Cancelar'
};

export default Popup;
