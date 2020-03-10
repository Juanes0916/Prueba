import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row-summary'>
            <div className='unc-left'>
              <div className='unc-summary-title'>
                <h3>Tendencias y el desarrollo de negocios <small>en el sector
                  creativo y cultural</small>
                </h3>
              </div>
            </div>
            <div className='unc-right'>
              <h3>Generalidades</h3>

              <div className='unc-summary-text'>
                Conocer cómo se espera que se comporte el mercado y sus actores en el futuro,
                te da la posibilidad de preparar tu negocio en el sector creativo y cultural
                y la forma en la que quieres que interactúe con ese futuro. Aquí te compartiremos
                algunas tendencias relacionadas con el comportamiento del mercado.
              </div>

              <div className='unc-summary-objectives'>
                <h3>Al terminar este módulo podrás reflexionar sobre:</h3>

                <ul>
                  <li>¿Qué es una tendencia?</li>
                  <li>¿Cuáles macrotendencias pueden ser aplicadas en mi negocio?</li>
                  <li>¿Cuáles tendencias asociadas al relacionamiento de las marcas con los
                    usuarios puedo implementar?
                  </li>
                  <li>¿Cómo aplicar tendencias en el sector creativo y cultural?</li>
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
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
