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
          <div className='unc-row-summary'>
            <div className='unc-left'>
              <div className='unc-summary-title'>
                <h3>Innovación en negocios <small>del sector creativo y cultural</small></h3>
              </div>
            </div>

            <div className='unc-right'>
              <h3>Generalidades</h3>

              <div className='unc-summary-text'>
                La innovación en el sector creativo y cultural tiene un doble propósito: generar
                un impacto social y producir riqueza, es decir, suple una necesidad y ofrece
                canales de sostenibilidad económica, financiera y de competitividad. Aquí, este
                módulo, mostrará este camino.
              </div>

              <div className='unc-summary-objectives'>
                <h3>Al terminar este módulo podrás reflexionar sobre:</h3>
                <ul>
                  <li><span>¿Qué es innovación?</span></li>
                  <li><span>¿En qué aspectos se puede innovar?</span></li>
                  <li><span>¿Cómo innovar?</span></li>
                  <li><span>¿Cuáles aspectos puedes considerar para innovar?</span></li>
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
