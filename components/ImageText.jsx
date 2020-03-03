import React from 'react'; // eslint-disable-line
import classNames from 'classnames';

const ImageText = (props) => {
  const style = {
    width: props.textWidth || '100%',
    color: props.color || '#58595B'
  };

  return (
    <div className={classNames('unc-image-text', props.className)}>
      <div className='unc-image-wrapper'>
        <img src={props.src} style={{ width: props.imageWidth }}/>
        <div className={classNames('unc-image-content', props.alignText)}>
          <div className='unc-text' style={style}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
