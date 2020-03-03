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
          <div className='unc-row-summary'>
            <div className='unc-left'>
              <div className='unc-summary-title'>
                <h3>
                  Reconocer el impacto social para <small>la sostenibilidad de
                  emprendimientos creativos y culturales</small>
                </h3>
              </div>
            </div>
            <div className='unc-right'>
              <h3>Generalidades</h3>

              <div className='unc-summary-text'>
                Tener claro, desde los objetivos de tu emprendimiento creativo y cultural,
                qué impacto social generas en la comunidad, ya sea para resolver problemas
                comunes o mitigar otros, es clave a la hora de pensar en la sostenibilidad
                de tu negocio. Aquí, te explicamos por qué.
              </div>

              <div className='unc-summary-objectives'>
                <h3>Al terminar este módulo podrás reflexionar sobre:</h3>
                <ul>
                  <li><span>¿Qué es el impacto social?</span></li>
                  <li><span>¿Cómo capitalizar el impacto social de tu emprendimiento?</span></li>
                  <li>
                    <span>
                      ¿Cómo han capitalizado el impacto social algunas empresas del sector
                      creativo y cultural?
                    </span>
                  </li>
                </ul>
              </div>

              <div className='unc-guests-wrapper'>
                <div className='unc-guests text-center'>
                  Realizado por
                  <br />
                  <div className='row'>
                    <div className='col-5 unc-flex-center'>
                      <img src='../assets/img/vivelo.png' width='70%' />
                    </div>
                    <div className='col-7 unc-flex-center'>
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
