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
            {/* TODO: Collapse */}
            <div id='Collapse_2' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_2' href='#Collapse_2One'
                      aria-expanded='true' aria-controls='Collapse_2One'>
                      ¿Sabes qué es innovación? Cuéntanos como la definirías.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_2One'>
                  <div className='panel-body'>
                    <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Two' aria-expanded='false' aria-controls='Collapse_2Two'>
                      ¿Sabes en qué aspectos se pueden innovar en un negocio?. Cuéntanos cuáles crees que son.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_2Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_2_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Three' aria-expanded='false' aria-controls='Collapse_2Three'>
                      ¿Conoces casos de negocio del sector creativo y cultural en los que la innovación haya posibilitado su
                      sostenibilidad?. Cuéntanos cuáles conoces.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_2Three'>
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
              <button className='unc-button button-form' type='button' data-content-id='Collapse_2'
                data-module='unc-modulo03'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>
              <div style={{
                display: 'block',
                color: '#773939',
                maxwidth: '600px',
                margin: '0 auto'
              }}>
                <small>
                  Ten presente que las respuestas no
                  son almacenadas por el sistema. Por lo tanto deberás llenar las áreas <br />
                  de texto y a continuación hacer clic en <i>Descargar tus respuestas</i>.
                </small>
              </div>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page >
);

export default CustomPage;
