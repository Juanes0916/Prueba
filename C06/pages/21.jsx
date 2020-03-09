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
          <h5>Reflexión</h5>

          <div className='unc-row unc-padding-1'>
            Haz finalizado con los contenidos de este módulo, para terminar queremos
            que reflexiones sobre las siguientes preguntas:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_8' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_8One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_8' href='#Collapse_8One'
                      aria-expanded='true' aria-controls='Collapse_8One'>
                      ¿En qué momentos puedes implicar tu público?
                    </a>
                  </h5>
                </div>
                <div id='Collapse_8One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_8One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_8Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_8'
                      href='#Collapse_8Two' aria-expanded='false' aria-controls='Collapse_8Two'>
                      ¿Cuáles de los mecanismos presentados puedes utilizar para implicar
                      a tu público y propiciar su captación y fidelización? Escribe las razones.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_8Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_8Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_5' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_8Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_8'
                      href='#Collapse_8Three' aria-expanded='false' aria-controls='Collapse_8Three'>
                      ¿El precio que has fijado para tu oferta está alineado al objetivo que
                      tienes? Escribe las razones.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_8Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_8Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_6' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-enable */}
            </div>
            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_8'
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
