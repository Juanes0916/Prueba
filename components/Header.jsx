import React from 'react'; // eslint-disable-line no-unused-vars

const Header = (props) => (
  <div className='unc-header'>
    <img className='unc-logo' src='../assets/img/02.png' alt='ELPAUER'/>

    <div className='unc-right' /> {/* PTNav here */}

    <h5 className="unc-course-title">
      {props.title}
    </h5>
  </div>
);

export default Header;
