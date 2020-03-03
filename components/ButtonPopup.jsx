import React from 'react'; // eslint-disable-line no-unused-vars
import { Popup } from 'unc-react-creator';

const clickPopup = (props) => {
  Popup.open(props.popup);
};

const ButtonPopup = (props) => (
  <div className='text-center m-5'>
    <button className='unc-button-popup' onClick={() => clickPopup(props)}>
      <div className='unc-content-middle'>
        <img src='../assets/img/02.png' />
        <span>
          <div className='unc-title'>{props.title}</div>
          <div className='unc-subtitle'>{props.subtitle}</div>
        </span>
      </div>
      <div className='color-gray'>Haz click para ver</div>
    </button>
  </div>
);

export default ButtonPopup;
