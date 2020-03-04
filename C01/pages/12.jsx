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
          <div className='unc-row unc-row-section-title'>
            <h4>Autoevaluación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            ¿Recuerdas las preguntas iniciales que te pedimos contestar desde tu experiencia? Es
            momento de contrastar tus conocimientos, ahora contesta a las siguientes preguntas
            teniendo en cuenta los contenidos vistos en este módulo.
            <br /><br />

            ¡Contrasta cada una de tus respuestas anteriores y evidencia tu aprendizaje!
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            { /* TODO: Collapse */}
            <div id='Collapse_4' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_4' href='#Collapse_4One'
                      aria-expanded='true' aria-controls='Collapse_4One'>
                      ¿Sabes qué es impacto social? Escribe tu definición.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_4One'>
                  <div className='panel-body'>
                    <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Two' aria-expanded='false' aria-controls='Collapse_4Two'>
                      ¿Sabes en qué consiste capitalizar el capital? Escribe en qué consiste.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_4Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_2_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Three' aria-expanded='false' aria-controls='Collapse_4Three'>
                      ¿Conoces negocios del sector creativo y cultural que han capitalizado el impacto social para su
                      sostenibilidad económica? Escribe cuáles y de qué forma.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_4Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_3_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-enable */}
            </div>
            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_4'
                data-module='unc-modulo00'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>
              <div
                style={{
                  display: 'block',
                  color: '#773939',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                <small >
                  Ten presente que las respuestas no son almacenadas por el sistema. Por lo tanto
                  deberás llenar las áreas de texto y a continuación hacer clic en
                  <i>Descargar tus respuestas</i>.</small>
              </div>
            </div>
          </div>

        </div>
      </UDScrollbars>
    </div>
  </Page >
);

export default CustomPage;
