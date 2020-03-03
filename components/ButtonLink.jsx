import React from 'react'; // eslint-disable-line

const ButtonLink = (props) => (
  <a
    target='_blank'
    href={props.href}
  >
    <button className='btn-aqua with-icon icon-link'>
      {props.title}
      {props.children}
    </button>
  </a>
);

export default ButtonLink;
