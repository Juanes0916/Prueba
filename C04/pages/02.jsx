import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Referentes de aplicación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            En este módulo conocerás la experiencia de algunos expertos en aspectos clave durante
            la gestión de intangibles.
            <ul>
              <li><strong>Juan Aramburo</strong> te hablará sobre su identificación, evaluación y
                sistematización.
              </li>
              <li><strong>Grupo Crea</strong> te hablará de su protección y aspectos a tener en
                cuenta.
              </li>
            </ul>
          </div>


        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
