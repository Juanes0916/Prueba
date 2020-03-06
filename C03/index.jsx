import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import {
  PTCourseHOC,
  MenuSlideIn as PTMenu
} from 'unc-react-creator';

import './assets/css/styles.css';
import dataMenu from './assets/js/dataMenu';
import * as AllPages from './pages';

/* eslint-disable */
const Pages = [];

for (const p in AllPages) {
  const Page = AllPages[p];
  Pages.push(<Page key={p} />);
}
/* eslint-enable */

/**
 * Options component for the menu header
 */
const options = (props) => (
  <ul className="unc-options">
    <li>
      <label>Reiniciar progreso</label>
      <button className="unc-control btn-red btn-sm" onClick={props.resetVisitedPages}>
        Reiniciar
      </button>
    </li>
  </ul>
);

/**
 * Nav buttons components
 */
const PTNav = (props) => (
  <nav className='unc-nav-arrows'>
    {!props.isFirstPage
      && <i className='fas fa-arrow-left' onClick={() => props.backPage()} />
    }
    {!props.isLastPage
      && <i className='fas fa-arrow-right' onClick={() => props.nextPage()} />
    }
  </nav>
);

const PTCourse = PTCourseHOC(PTMenu, PTNav, {
  defaultNextPageAnimation: 67,
  defaultBackPageAnimation: 67,
  PTMenu: {
    title: 'El conocimiento del cliente, punto de partida para el desarrollo',
    placement: 'right',
    slides: Pages.length,
    dataMenu,
    options
  }
});

render(
  <PTCourse>
    {Pages}
  </PTCourse>,
  document.getElementById('app')
);
