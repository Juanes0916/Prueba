import React from 'react'; // eslint-disable-line
import classNames from 'classnames';

const DegrantImage = (props) => (
    <div className={classNames('unc-row', 'unc-row-degrant', { 'unc-degrant-inverse': props.inverse })}>
        <div className='unc-degrant-image' style={{ backgroundImage: `url(${props.url})` }} />
        <div className='unc-degrant-text'>
            {props.children}
        </div>
    </div>
);

export default DegrantImage;
