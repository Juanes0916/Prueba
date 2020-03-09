import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>La sistematización</h5>

          <div className='unc-row unc-padding-1'>
            Ahondemos ahora en la sistematización y escuchemos la explicación de Juan Felipe:
          </div>

          <Video videoId={315142806} />

          <div className='unc-row unc-padding-1'>
            Entonces, apostarle a un proceso de sistematización nos permite:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_4' className='carousel slide' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_4' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_4' data-slide-to='1'></li>
                <li data-target='#Carousel_4' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M01_IMG06.jpg'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Encontrar el conocimiento que se ha adquirido en el hacer, es decir,
                      el saber-hacer (<i>know-how</i>).
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Crear memoria en una organización, lo cual permite identificar las formas de trabajo.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Identificar mejores recursos para incorporarlos a los nuevos proyectos y
                      servicios y convertirse en referentes para otros procesos similares.
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_4' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_4' data-slide='next'>
                <span className='ti-angle-right'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Por medio de la sistematización se identifica el conocimiento que se convierte, así,
            en un bien o producto posible de ser capitalizado o protegido mediante algunos de los
            mecanismos de propiedad industrial, los cuales serán nombrados más adelante.
            <br /><br />

            También posibilita generar preguntas autoevaluadoras y cuestionamientos desde el diálogo
            reflexivo en equipo, que lleven a comprender los procesos internos, cómo se están
            desarrollando los servicios o productos y encontrar elementos innovadores.
            <br /><br />

            En este caso, son pertinentes preguntas como:

            <div className='text-center'>
              <img src='./assets/img/M01_IMG51.jpg' />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            En este sentido, queda claro que la sistematización tiene algunos postulados:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_4' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_4' href='#Collapse_4One'
                      aria-expanded='true' aria-controls='Collapse_4One'>
                      Centrada en el aprendizaje
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_4One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Está centrada en el aprendizaje y tiene el propósito de retroalimentar al
                      equipo responsable de un proyecto o iniciativa, con el fin de comprender las
                      prácticas organizacionales y proveer insumos para la planificación
                      estratégica y la mejora continua.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Two' aria-expanded='false' aria-controls='Collapse_4Two'>
                      Transforma la práctica
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_4Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Mejora y transforma la práctica a partir de un proceso reflexivo que lleva a
                      implementar nuevas posibilidades expresivas y diversas alternativas, pues
                      contribuye a la reflexión y transformación de la propia práctica, en la
                      medida en que hay un conocimiento útil para la toma de decisiones en torno
                      del mejoramiento o aprovechamiento de los recursos que la potencien.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Three' aria-expanded='false' aria-controls='Collapse_4Three'>
                      Transfiere conocimiento
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_4Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Transfiere conocimiento (intercambio y adaptación) y comparte aprendizajes
                      con experiencias similares, para ir más allá de un intercambio anecdótico,
                      como dice Oscar Jara, educador y sociólogo peruano‐costarricense, director
                      general del Centro de Estudios y Publicaciones Alforja, en Costa Rica, y
                      coordinador del Programa Latinoamericano de Apoyo a la Sistematización de
                      Experiencias del Consejo de Educación de Adultos de América Latina (CEAAL).
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Four' aria-expanded='false' aria-controls='Collapse_4Four'>
                      Facilita visibilidad
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_4Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Facilita la visibilidad y la comunicación del conocimiento para incidir en
                      políticas y planes a partir de aprendizajes concretos que provienen de
                      experiencias reales; es decir, posibilita formular propuestas
                      de mayor alcance, basadas en lo que sucede en el terreno.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
