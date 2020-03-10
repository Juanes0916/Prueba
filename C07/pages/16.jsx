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
          <div className='unc-row unc-row-section-title'>
            <h4>Autoevaluación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            ¿Recuerdas las preguntas iniciales que te pedimos contestar desde tu experiencia?
            Es momento de contrastar tus conocimientos, ahora contesta a las siguientes preguntas
            teniendo en cuenta los contenidos vistos en este módulo.
            <br /><br />

            ¡Contrasta cada una de tus respuestas anteriores y evidencia tu aprendizaje!
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_5' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_5One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_5' href='#Collapse_5One'
                      aria-expanded='true' aria-controls='Collapse_5One'>
                      ¿Sabes qué es una tendencia? Escribe tu definición.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_5One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_5One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_5Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_5'
                      href='#Collapse_5Two' aria-expanded='false' aria-controls='Collapse_5Two'>
                      ¿Sabes cómo las tendencias pueden enriquecer tu negocio? Escribe de qué
                      forma pueden hacerlo.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_5Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_5Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_2_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_5Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_5'
                      href='#Collapse_5Three' aria-expanded='false' aria-controls='Collapse_5Three'>
                      ¿Sabes cómo estar al tanto de las tendencias que pueden contribuir a
                      tu negocio? Escribe la forma en que lo haces.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_5Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_5Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_3_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_5Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_5'
                      href='#Collapse_5Four' aria-expanded='false' aria-controls='Collapse_5Four'>
                      ¿Conoces alguna tendencia importante que le sume a tu negocio? Escribe
                      de qué se trata.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_5Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_5Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_4_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-enable */}
            </div>
            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_5'
                data-module='unc-modulo06'>
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
                  Ten presente que las respuestas no son almacenadas por el sistema. Por lo tanto
                  deberás llenar las áreas<br /> de texto y a continuación hacer clic en
                  <i>Descargar tus respuestas</i>.
                </small>
              </div>
            </div>
          </div>


        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
