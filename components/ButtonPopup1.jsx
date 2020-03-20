import React from 'react'; // eslint-disable-line no-unused-vars
import { Popup } from 'unc-react-creator';

const clickPopup = (props) => {
  Popup.open(props.popup);
};

const ButtonPopup = (props) => (
  <div className={props.className}>
    <button className={props.buttonClassName} onClick={() => clickPopup(props)}>
      <div className='unc-content-middle'>
        <span>
          <div className='unc-title'>
            <i className={props.icon} />{props.title}
          </div>
        </span>
      </div>
    </button>
    <h5> {props.downTitle} </h5>
  </div >

);

export default ButtonPopup;
