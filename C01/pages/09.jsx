import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Cómo han capitalizado el impacto social empresas del sector creativo y cultural?</h5>

          <div className='unc-row unc-padding-1'>
            Para finalizar, te mostraremos ejemplos locales e internacionales de empresas creativas
            y culturales que han logrado permanecer en el mercado y en las que el impacto social no
            solo es un aspecto fundamental para ellas sino desde el cual son reconocidas en el
            mercado:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>
              Haz clic en los componentes del mapa interactivo para conocer más sobre impacto
              social
            </small>
          </div>

          <div
            className='unc-row unc-row-bgfull unc-row-list unc-padding-1'
            style={{ backgroundImage: 'url(./assets/img/M00_IMG14.jpg)' }}
          >
            <div className='unc-list-border'>
              <div className='row'>
                <div className='col-sm-3'>
                  <span>1</span>
                  <h5>Ecoalf</h5>
                </div>
                <div className='col-sm-3'>
                  <span>2</span>
                  <h5>Corporación Cultural Nuestra Gente</h5>
                </div>
                <div className='col-sm-3'>
                  <span>3</span>
                  <h5>4YOU2</h5>
                </div>
                <div className='col-sm-3'>
                  <span>4</span>
                  <h5>Pasolini</h5>
                </div>
              </div>
            </div>
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
