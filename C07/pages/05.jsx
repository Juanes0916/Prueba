import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Otras macrotendencias que queremos compartirte</h4>
          </div>

          <h5>La era digital: conectividad y tecnologías disruptivas</h5>

          <div className='unc-row unc-padding-1'>
            Para 2015, en Colombia había ya más celulares que personas y, para 2020, habrá en el
            mundo “más de veinte mil millones de dispositivos conectados a Internet” dicen Iván
            Duque Márquez (actual presidente de Colombia) y Felipe Buitrago Restrepo, en su libro
            La Economía Naranja, publicado en 2013.
            <br /><br />

            La conclusión de los expertos es que el uso de internet y de dispositivos inteligentes
            es masivo y muchas decisiones económicas están siendo tomadas por lo que cabe o no en
            un teléfono inteligente.
            <br /><br />

            Esta misma lógica es crucial en emprendimientos contemporáneos que buscan fusionar las
            vías tecnológicas con las no tecnológicas. Y las industrias creativas de los
            subsectores más nuevos (software, nuevos medios, videojuego, diseño) están conectándose
            con otros subsectores para desarrollar propuestas en las que esta visión dual se asume.
            <br /><br />

            Así, un saber ancestral, una comida tradicional o una prenda de vestir, bienes o
            intangibles que no pueden ser reemplazados por un teléfono inteligente, hoy encuentran
            un espacio de conexión a través de estos dispositivos, en un podcast sobre
            conocimientos ancestrales o en una aplicación en la que se aprende a cocinar comida
            tradicional mexicana, pero, además, reservar para ir a cocinar y cenar con habitantes
            de un pueblo tradicional en México.
          </div>

          <DegrantImage url='./assets/img/M06_IMG30.jpg' inverse>
            El uso de los dispositivos conectados a internet está siendo entonces crucial para
            conectar ofertas y demandas de diferentes bienes o servicios en tiempos casi
            instantáneos. Esto nos da la sensación de que hay “de todo para todos”, con un
            contacto inmediato, recuerdan Duque y Buitrago.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            De esta conectividad, se derivan muchas otras tendencias y oportunidades, que te
            describimos a continuación:
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
                      El internet móvil
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_2One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Está marcando una tendencia importante para el desarrollo de productos y
                      servicios culturales, porque combina la manera de conectar iniciativas con
                      públicos y consumidores. Un ejemplo es el de la Realidad Aumentada, con la
                      que con solo tener conexión a internet en un dispositivo se puede interactuar
                      con diversos productos culturales.
                      <br /><br />

                      <div className='unc-row unc-row-border unc-padding-2'>
                        Para mayor ilustración de este tema, te sugerimos explorar los siguientes
                        recursos:
                        <br /><br />

                        <div className='text-center'>
                          <a href='https://www.youtube.com/watch?v=NrzsZSnJGCM' target='_blank'>
                            New York City – Augmented reality art show
                          </a>
                          <br />
                          <a href='https://www.vice.com/en_au/article/53w9zx/smartphones-become-a-swarming-orchestra-in-this-sound-art-experience'
                            target='_blank'>
                            Smartphones become a swarming orchestra in this sound art experience
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Two' aria-expanded='false' aria-controls='Collapse_2Two'>
                      La impresión 3D
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_2Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Facilita el prototipo de elementos complejos y la fácil unión entre
                      tecnología digital y manufactura de creaciones tangibles. Algunos ejemplos
                      involucran el área de diseño de juguetes, joyería y mobiliario. Inclusive, a
                      la arquitectura y a la escultura a gran escala o al área gastronómica.
                      <br /><br />

                      <div className='unc-row unc-row-border unc-padding-2'>
                        Puedes ver proyectos de aplicación de impresión 3D en los siguientes
                        enlaces:
                        <br /><br />

                        <div className='text-center'>
                          <a href='http://www.tinkertoys.de' target='_blank'>Tinker Toys</a><br />
                          <a href='http://www.sena.edu.co/es-co/formacion/Paginas/tecnoparques.aspx'
                            target='_blank'>Tecnoparques – SENA
                          </a><br />
                          <a href='https://www.youtube.com/watch?v=UWOVvSfSjCM' target='_blank'>
                            Food ink – The world’s first 3D-Printing restaurant
                          </a><br />
                          <a href='https://www.youtube.com/watch?v=GUdnrtnjT5Q' target='_blank'>
                            3D-Printed house took 24 hours to build
                          </a><br />
                          <a href='https://www.youtube.com/watch?v=uV8BqhXXFsA' target='_blank'>
                            3D-Printed ceramic
                          </a><br />
                          <a href='https://www.youtube.com/watch?v=t7_HNEncd3o' target='_blank'>
                            Lionel T Dean's 3D-printed gold collection
                          </a><br />
                          <a href='https://www.youtube.com/watch?v=emUlHFWcHck' target='_blank'>
                            3Doodler 2.0 – The World's First 3D Printing Pen
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Three' aria-expanded='false' aria-controls='Collapse_2Three'>
                      Los materiales inteligentes
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_2Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Tienen propiedades o comportamientos particulares por su propia naturaleza
                      o por alteraciones a nivel nano. Pueden encontrarse aquellos que brillan
                      en la oscuridad, que cambian de estado con la temperatura o que conducen
                      electricidad. Diversas exploraciones se vienen haciendo en distintos
                      subsectores como el diseño, la arquitectura y las artes, pero la
                      investigación y desarrollo viene de parte de grupos multidisciplinares que
                      muestran resultados poco a poco. Muchas universidades con centros dedicados a
                      este tipo de exploraciones brindan asesoría para el desarrollo de proyectos
                      de emprendedores con idea de aplicación.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Four' aria-expanded='false' aria-controls='Collapse_2Four'>
                      Realidad virtual
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_2Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Se caracteriza por simular un espacio o situación de manera sensorial, tan
                      fiel a la realidad que las personas sienten que, de verdad, están viviendo
                      esa experiencia. Algunas iniciativas se emplean para generar experiencias
                      únicas relacionadas al campo de las artes, los videojuegos y otros
                      emprendimientos multidisciplinares. La posibilidad de ver una exhibición que
                      está en otro lugar o de meterse un paisaje de Van Gogh son posibles con
                      esta tecnología.
                      <br /><br />

                      <div className='unc-row unc-row-border unc-padding-2'>
                        Un ejemplo muy interesante es el del colectivo interdisciplinario
                        español-alemán <a href='http://www.themachinetobeanother.org' target='_blank'>
                          Be Another Lab</a>, dedicado a explorar la relación entre identidad y
                     empatía, al hacer uso de esta tecnología en su proyecto The Machine to
                     be Another, en el que se propone que los participantes puedan experimentar
                     situaciones desde la perspectiva de otras personas, trabajando hacia la
                     empatía en temas de xenofobia, definición de género y discapacidad,
                     entre otros.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Five'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Five' aria-expanded='false' aria-controls='Collapse_2Five'>
                      Otras tecnologías
                    </a>
                  </h5>
                </div>
                <div id='Collapse_2Five' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_2Five'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Otras tecnologías que han sido declaradas como disruptivas y con altos
                      potenciales dentro del sector creativo y cultural son: el Internet de las
                      cosas, las tecnologías de la nube y el almacenamiento de energía (Buitrago
                      & Duque 2013).
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
