import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Otros casos</h5>

          <div className='unc-row unc-padding-1'>
            Queremos mencionar otros casos que han implementado estrategias para implicar sus
            públicos, y en ellas tienen elementos de captación, formación y fidelización.
            Estos son:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_3' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_3' href='#Collapse_3One'
                      aria-expanded='true' aria-controls='Collapse_3One'>
                      UiTPAS
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_3One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Programa en Bélgica que reúne diversas manifestaciones artísticas, impulsado
                      por el Ministerio de Cultura de Flandes, en el año 2012. Fideliza para
                      promocionar y mejorar las actividades, por medio de un sistema de puntos
                      acumulables por los ciudadanos que participen en sus eventos.
                      <br /><br />

                      Esto se registra a través de una tarjeta de socio o una aplicación móvil con
                      la que el usuario hace check in en los espacios adheridos al proyecto,
                      obteniendo puntos que después puede canjear por descuentos, entradas
                      gratuitas o accesos especiales. Esta iniciativa se basa en la tarjeta
                      kansenpas o pase de oportunidades, impulsada hasta el año 2011 pero solo
                      dirigida a las familias con baja renta, que después se entendió a toda la
                      población. Este sistema, además, sirve para recoger datos sobre quién acude a
                      qué establecimiento, espectáculo o exhibición, y ayuda a generar la futura
                      programación. Tanto es así que, explica Arthur Le Gall, uno de los promotores
                      de la idea, los resultados obtenidos en el festival de circo, uno de los
                      muchos eventos de ese programa, llevaron a su cambio de ubicación,
                      decisión que resultó en un aumento de público del 50%.

                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Two' aria-expanded='false' aria-controls='Collapse_3Two'>
                      The Houston Symphony, National Symphony y Pacific Symphony
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Orquestas de Estados Unidos que han llevado a cabo programas piloto de
                      “conciertos tuiteados” o eventos similares. Una estrategia para implicar
                      sus públicos, que tiene elementos de captación, formación y fidelización.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Three' aria-expanded='false' aria-controls='Collapse_3Three'>
                      New World Symphony
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_3Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Orquesta estadounidense que ha experimentado en la actualidad con innovadores
                      formatos de concierto, como los conciertos de viaje (journey concerts),
                      conciertos del descubrimiento (discovery concerts), los mini conciertos y los
                      conciertos pulse, estilo club nocturno, debido a que les permiten diferentes
                      niveles de ayuda en la interpretación de lo que se escucha, con estímulos
                      visuales y charlas desde el escenario.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Four' aria-expanded='false' aria-controls='Collapse_3Four'>
                      Proyecto Art Project
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Proyecto de Google que posibilita a los visitantes de su página web “crear”
                      exposiciones o galerías a partir de las colecciones digitalizadas de museos
                      de todo el mundo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>
          <br />

          <DegrantImage url='./assets/img/M04_IMG20.jpg' inverse>
            Un estudio en el ámbito nacional de Estados Unidos, realizado en 2011, sobre más de
            7000 compradores de entradas para danza, mostró un gran interés por la asistencia a
            ensayos públicos (puede accederse al estudio a través de la página web de Dance/USA).
            Esto sugiere que existe un sano apetito por la “visión curatorial” o, en este caso,
            una ventana que se abre hacia el proceso creativo.
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
