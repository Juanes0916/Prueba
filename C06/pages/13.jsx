import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Importancia del precio</h5>

          <div className='unc-row unc-padding-1'>
            La fijación de los precios tiene su importancia y existen algunas razones para ello,
            que te las describimos a continuación:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre cada ícono para ver más información</small>
          </div>

          <div className='row unc-row-icon-title'>
            {/* TODO: Popup */}
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-121 unc-fill unc-clickeable' data-toggle='modal' data-target='#modal10'></span>
              <h5>El precio es una importante herramienta de comunicación</h5>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-102 unc-fill unc-clickeable' data-toggle='modal' data-target='#modal11'></span>
              <h5>El precio es el único instrumento de marketing que proporciona ingresos.</h5>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-101 unc-fill unc-clickeable' data-toggle='modal' data-target='#modal12'></span>
              <h5>El precio es el instrumento de marketing más flexible y una poderosa herramienta
                competitiva.
              </h5>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
