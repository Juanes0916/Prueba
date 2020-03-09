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
          <div className='unc-row-summary'>
            <div className='unc-left'>
              <div className='unc-summary-title'>
                <h3>Implicar tu público, <small>una forma de propiciar su captación y
                  fidelización</small>
                </h3>
              </div>
            </div>
            <div className='unc-right'>
              <h3>Generalidades</h3>

              <div className='unc-summary-text'>
                No solo es importante conocer el público al que va dirigida tu oferta, para lograr
                un relacionamiento que te permita enriquecer tu negocio hay que ir mucho más allá,
                es necesario crear una relación colaborativa con tu público, implicarlo, lograr
                captarlo y fidelizarlo con tu oferta. Aquí conocerás sobre este asunto.
              </div>

              <div className='unc-summary-objectives'>
                <h3>Al terminar este módulo podrás reflexionar sobre:</h3>

                <ul>
                  <li><span>¿Por qué es importante implicar al público?</span></li>
                  <li>
                    <span>¿Qué aspectos y momentos son importantes para implicar al público?</span>
                  </li>
                  <li><span>¿Cuál es la importancia del precio?</span></li>
                  <li>
                    <span>¿Qué métodos de fijación de precio y formas de pago son adecuadas?</span>
                  </li>
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
