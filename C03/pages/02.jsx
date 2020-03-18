import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Referentes de aplicación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            En este módulo encontrarás algunos casos asociados al sector, a través de los cuales
            verás el uso de diferentes metodologías para mejorar la relación de su oferta con el
            mercado. También encontrarás algunos expertos que, desde su experiencia, destacan
            algunos elementos clave a la hora de pensar en lograr el éxito de nuestros productos
            en el mercado.
          </div>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
