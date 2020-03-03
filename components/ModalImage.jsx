import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Popup, UDScrollbars
} from 'unc-react-creator';

const handleClick = (props) => {
  Popup.open({
    content: (
      <div className='unc-wrapper'>
        <UDScrollbars className='unc-content-middle'>
          <img src={props.src} />
        </UDScrollbars>
      </div>
    ),
    height: '100%',
    width: '100%',
    className: 'unc-popup-image unc-popup'
  });
};

const ModalImage = (props) => (
  <div className='unc-modal-image'>
    <div className='unc-tip icon-image'>
      Haz clic en la imagen para ver las tablas con más detalle.
    </div>

    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      onClick={() => handleClick(props)}
    />
  </div>
);

export default ModalImage;
