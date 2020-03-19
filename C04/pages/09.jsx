import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Ejemplos</h5>

          <div className='unc-row unc-padding-1'>
            Conoce aquí algunos ejemplos de propuestas en el sector creativo y cultural que
            hacen uso de la sistematización.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre el mapa interactivo para ver más información</small>
          </div>

          <div className='unc-row row'>
            {/* eslint-disable */}
            {/* TODO: D3 */}
            <div className='col-sm-6'>
              <h4>Centro de arte contemporáneo</h4>
            </div>
            <div className='col-sm-6'>
              <h4>Audiovisual recrea práctica cultural pedagógica</h4>
            </div>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row unc-row-list unc-row-bgfull row' data-url='./assets/img/M01_IMG40.jpg'>
                <div className='unc-list-border'>
                  <div className='row'>
                    <div className='col-sm-4' data-toggle='modal' data-target='#modal4'>
                      <span>1</span>
                      <h5>¿Quién?</h5>
                    </div>
                    <div className='col-sm-4' data-toggle='modal' data-target='#modal5'>
                      <span>2</span>
                      <h5>¿Qué hace?</h5>
                    </div>
                    <div className='col-sm-4' data-toggle='modal' data-target='#modal6'>
                      <span>3</span>
                      <h5>¿Cómo lo hace?</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row unc-row-list unc-row-bgfull row' data-url='./assets/img/M01_IMG29.jpg'>
                <div className='unc-list-border'>
                  <div className='row'>
                    <div className='col-sm-4' data-toggle='modal' data-target='#modal7'>
                      <span>1</span>
                      <h5>¿Quién?</h5>
                    </div>
                    <div className='col-sm-4' data-toggle='modal' data-target='#modal8'>
                      <span>2</span>
                      <h5>¿Qué hace?</h5>
                    </div>
                    <div className='col-sm-4' data-toggle='modal' data-target='#modal9'>
                      <span>3</span>
                      <h5>¿Cómo lo hace?</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
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
