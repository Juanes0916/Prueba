import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row-summary'>
            <div className='unc-left'>
              <div className='unc-summary-title'>
                <h3>La lógica transmedia, <small>cómo llegar en distintos formatos a diferentes
                públicos</small>
                </h3>
              </div>
            </div>
            <div className='unc-right'>
              <h3>Generalidades</h3>

              <div className='unc-summary-text'>
                En el mundo creativo y cultural la narrativa transmedia abre un universo
                de posibilidades en las que se puede llevar al público no solo un producto sino
                todas aquellas creaciones que surgen durante su creación y entrega al público.
                Que, además, pueden ser entregados en diferentes formatos, lo cual posibilita que
                al final se llegue a más públicos. Aquí, te lo explicamos.
              </div>

              <div className='unc-summary-objectives'>
                <h3>Al terminar este módulo podrás reflexionar sobre:</h3>
                <ul>
                  <li><span>¿Qué es la transmedialidad?</span></li>
                  <li><span>¿Por qué la lógica transmedia representa una oportunidad para el sector
                    creativo y cultural?</span>
                  </li>
                  <li><span>¿Qué aspectos son importantes para incorporar la transmedialidad en lo
                    creativo y cultural?</span>
                  </li>
                  <li><span>¿Qué es la narrativa transmedia?</span></li>
                </ul>
              </div>

              <div className='unc-guests-wrapper'>
                <div className='unc-guests text-center'>
                  Realizado por
                  <br />
                  <div className='row'>
                    <div className='col-xs-5 unc-flex-center'>
                      <img src='../assets/img/vivelo.png' width='70%' />
                    </div>
                    <div className='col-xs-7 unc-flex-center'>
                      <img src='../assets/img/viajelogia.png' width='100%' />
                    </div>
                  </div>
                  <br />Para<br />
                  <img src='../assets/img/01.png' width='80%' />
                  <br /><br />
                  <div>
                    La Plataforma para emprendimientos creativos y culturales de Antioquia
                  </div>
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
