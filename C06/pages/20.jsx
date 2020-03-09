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
          <div className='unc-row unc-row-section-title'>
            <h4>Autoevaluación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            ¿Recuerdas las preguntas iniciales que te pedimos contestar desde tu
            experiencia? Es momento de contrastar tus conocimientos, ahora contesta
            a las siguientes preguntas teniendo en cuenta los contenidos vistos en
            este módulo.
            <br /><br />

            ¡Contrasta cada una de tus respuestas anteriores y evidencia tu
            aprendizaje!
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_7' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_7One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_7' href='#Collapse_7One'
                      aria-expanded='true' aria-controls='Collapse_7One'>
                      En tu opinión, ¿Qué crees que es implicar a tu público?.
                      Escribe tus ideas
                    </a>
                  </h5>
                </div>
                <div id='Collapse_7One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_7One'>
                  <div className='panel-body'>
                    <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_7Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_7'
                      href='#Collapse_7Two' aria-expanded='false' aria-controls='Collapse_7Two'>
                      ¿Qué sabes de como se relacionan la implicación de públicos
                      con su captación y fidelización?. Escribe tus ideas
                    </a>
                  </h5>
                </div>
                <div id='Collapse_7Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_7Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_2_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_7Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_7'
                      href='#Collapse_7Three' aria-expanded='false' aria-controls='Collapse_7Three'>
                      ¿En qué medida crees que el precio incide en la impliación de
                      tus públicos?. Escribe tus ideas
                    </a>
                  </h5>
                </div>
                <div id='Collapse_7Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_7Three'>
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
              <button className='unc-button button-form' type='button' data-content-id='Collapse_7'
                data-module='unc-modulo04'>
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
