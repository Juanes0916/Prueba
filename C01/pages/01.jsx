import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
/* eslint-disable */
const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>

          </div>

          <div className='unc-row unc-row-section-title'>
            <h4>Actividad de exploración</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Es muy importante para este proceso que estés consciente de los conocimientos
            con los que inicias; posiblemente has estado relacionados con el arte,
            la cultura, el emprendimiento, la creatividad y la innovación, pero no hemos
            aterrizado los conocimientos que el contexto nos ha brindado sobre estos temas,
            por esto, antes de comenzar con los contenidos de este módulo, queremos que
            escribas en los campos de texto dando respuesta, desde tu experiencia, a las
            siguientes preguntas:
          </div>

          <div className='unc-row'>
            <div id='Collapse_1' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_1One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_1' href='#Collapse_1One' aria-expanded='true' aria-controls='Collapse_1One'>
                      ¿Sabes qué es impacto social? Escribe tu definición.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_1One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_1One'>
                  <div className='panel-body'>
                    <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_1Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_1' href='#Collapse_1Two' aria-expanded='false' aria-controls='Collapse_1Two'>
                      ¿Sabes cómo puede influir el impacto social de un emprendimiento en su sostenibilidad? Escribe en tu opinión.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_1Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_1Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_2_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_1Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_1' href='#Collapse_1Three' aria-expanded='false' aria-controls='Collapse_1Three'>
                      ¿Conoces negocios del sector creativo y cultural que han capitalizado el impacto social para su sostenibilidad económica? Escribe cuáles y de qué forma.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_1Three' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_1Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_3_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1' data-module='unc-modulo00'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>
              <small style={{
                display: 'block',
                color:'#773939',
                maxWidth: 600,
                margin: '0 auto' }}>Ten presente que las respuestas no son almacenadas por el sistema. Por lo tanto deberás llenar las áreas de texto y a continuación hacer clic en <i>Descargar tus respuestas</i>.</small>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);
/* eslint-enable */
export default CustomPage;
