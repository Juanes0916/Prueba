import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO Carousel */}
            <div id='Carousel_1' className='carousel slide' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_1' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_1' data-slide-to='1'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M05_IMG35.jpg'>
                    <div>
                      <h1>La lógica transmedia, cómo llegar en distintos formatos a diferentes
                        públicos
                      </h1>
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M05_IMG18.jpg'>
                    <div>
                      <h3>El ejercicio de creación se dimensiona en un universo en el que son
                      posibles diferentes formatos, plataformas y lenguajes
                      </h3>
                      Este módulo pretende mostrar las posibilidades que representa la
                      transmedialidad como una lógica de diseño que te permitirá propiciar
                      diferentes puntos de contacto y experiencias para tu público. Te aproximarás
                      al concepto, su importancia en el sector creativo y cultural, aspectos a
                      tener en cuenta para incorporar la narrativa transmedia en tu proyecto,
                      conocerás casos que la utilizan y finalmente te aproximarás a las narrativas
                      transmedia.
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_1' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_1' data-slide='next'>
                <span className='ti-angle-right'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/* eslint-enable */}
          </div>

          <br /><br />

          <div className='unc-row unc-row-section-title'>
            <h4>Actividad de exploración</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Es muy importante para este proceso que estés consciente de los conocimientos con los
            que inicias; posiblemente has estado relacionado con el arte, la cultura, el
            emprendimiento , la creatividad y la innovación, pero no has aterrizado los
            conocimientos que el contexto te ha brindado sobre estos temas, por esto, antes de
            comenzar con los contenidos de este módulo, queremos que escribas en los campos de
            texto dando respuesta, desde tu experiencia, a las siguientes preguntas:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_1' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_1One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_1' href='#Collapse_1One'
                      aria-expanded='true' aria-controls='Collapse_1One'>
                      ¿Sabes qué es la transmedialidad? Escribe tu definición.
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
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_1'
                      href='#Collapse_1Two' aria-expanded='false' aria-controls='Collapse_1Two'>
                      ¿Sabes qué posibilidades representa la narrativa transmedia en un negocio del
                      sector creativo y cultural? Escribe cuáles posibilidades.
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
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_1'
                      href='#Collapse_1Three' aria-expanded='false' aria-controls='Collapse_1Three'>
                      ¿Sabes cómo incorporar la narrativa transmedia en tu negocio? Define tus
                      estrategias.
                    </a>
                  </h5>
                </div>
                <div id='Collapse_1Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_1Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <textarea id='TA_3_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-enable */}
            </div>
            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1'
                data-module='unc-modulo05'>
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
