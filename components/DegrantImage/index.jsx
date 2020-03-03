import React from 'react'; // eslint-disable-line
import classNames from 'classnames';

const DegrantImage = (props) => (
  <div className={classNames('unc-degrant-text', props.alignImage)}>
    <img src={props.src} />
    <div className="unc-dt-content">
      {props.children}
    </div>
  </div>
);

export default DegrantImage;
