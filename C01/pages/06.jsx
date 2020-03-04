import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Cómo capitalizar el impacto social generado desde mi emprendimiento?</h4>
          </div>

          <h5>Primero define el impacto social de tu emprendimiento</h5>

          <div className='unc-row unc-padding-1'>
            Para iniciar, tendremos que decirte que es indispensable saber definir y medir ese
            impacto social y, para ello, lo primero que plantea Juan Felipe, de Proantioquia, es
            tener claro los objetivos de tu proyecto creativo y cultural. Advierte que un objetivo
            claro debe llevar implícitas las respuestas a estos tres interrogantes: <strong>qué
            hago, cómo lo hago y para qué lo hago</strong>.
          </div>

          <Video videoId={315294706} />

          <div className='unc-row unc-padding-1'>
            Y la explicación que hace Juan Felipe a los tres interrogantes es simple, pero se
            enfoca en el <strong>qué</strong>, porque responde a las apuestas conceptuales de los
            equipos creativos y, en última medida, refleja lo que, como grupo, se plantea a manera
            de metas de corto alcance. Es decir, para medir si el qué está siendo incorporado,
            suele verificarse si los diseños de las diferentes estrategias de trabajo están
            enfocados al desarrollo de las metas.
            <br /><br />

            Queremos contarte un poco más sobre las preguntas que deben responder
            tus <strong>objetivos</strong>, haz clic en los botones del siguiente recurso:
          </div>


          <div className='unc-row'>
            {/* eslint-disable */}
            { /* TODO: Collapse */}
            <div id='Collapse_2' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_2' href='#Collapse_2One'
                      aria-expanded='true' aria-controls='Collapse_2One'>
                      ¿Qué se hará?
                    </a>
                  </h5>
                </div>
                <div
                  id='Collapse_2One' className='panel-collapse collapse in'
                  role='tabpanel' aria-labelledby='Heading_2One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <h5>Revela la apuesta que se quiere lograr con las acciones emprendidas.
                        Suelen ser enunciados de las metas de corto plazo, pero no puede
                        confundirse con las maneras como lo lograré.</h5>

                      Una empresa de conocimiento llega a esta propuesta desde dos comprensiones
                      básicas: la primera es que con los recursos y saberes de los que dispone
                      puede instalar prácticas que desarrollen o mejoren ciertas competencias en
                      los participantes. La segunda tiene que ver con la creencia, por parte del
                      equipo y su capital intelectual, de que el trabajo en equipo es una
                      característica deseable en un proyecto que este equipo emprenda.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Two' aria-expanded='false' aria-controls='Collapse_2Two'>
                      ¿Cómo se hará?
                    </a>
                  </h5>
                </div>
                <div
                  id='Collapse_2Two' className='panel-collapse collapse'
                  role='tabpanel' aria-labelledby='Heading_2Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <h5>¿Caminos posibles para el hacer?</h5>

                      Este suele ser el punto más sencillo en la formulación, pues describe de
                      manera concreta la forma como se desarrollarán las actividades propuestas.
                      Si estuviéramos hablando de una empresa manufacturera, algunas posibles
                      formas de hacer las cosas son los procesos químicos, los desarrollos
                      mecánicos o los procesos constructivos. Sin embargo, en en el sector creativo
                      y cultura se utilizan metodologías que, en la mayor parte de los casos,
                      implican el contacto e interacción con diversas, personas y/o comunidades.
                      Talleres, laboratorios de creación, actividades expositivas, experimentaciones,
                      son algunos de los formatos y maneras de trabajo comúnmente usadas.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Three' aria-expanded='false' aria-controls='Collapse_2Three'>
                      ¿Para qué se hará?
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_2Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <h5>Horizonte de sentido</h5>

                      El tercer componente de nuestros objetivos tiene que ver con el para qué.
                      Este elemento da cuenta de mi propósito superior o, en otras palabras, la
                      gran motivación que impulsa a desarrollar todas las acciones.
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
