import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Ten en cuenta las herramientas para la transmedialidad</h5>

          <div className='unc-row unc-padding-1'>
            Así no haya una fórmula para incorporar la lógica transmedia, ten en cuenta que sí
            tienen unas herramientas, las cuales puedes utilizar a la hora de intencionarla en
            tu oferta, aquí te hacemos una lista de las más importantes:
          </div>

          <h3>Herramientas transmedia de marketing creativo y cultural</h3>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO Collapse */}
            <div id='HtmCollpase' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingOne'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#HtmCollpase' href='#HtmCollapseOne'
                      aria-expanded='true' aria-controls='HtmCollapseOne'>
                      1. Web
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseOne' className='panel-collapse collapse in' role='tabpanel'
                  aria-labelledby='HtmHeadingOne'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Independientemente del tipo de la narrativa, es siempre recomendable tener
                      una web, ya que esta permitirá enfocar diferentes tipos de contenidos y
                      formatos, y enlazarlos con otras plataformas.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingTwo'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseTwo' aria-expanded='false' aria-controls='HtmCollapseTwo'>
                      2. Apps
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='HtmHeadingTwo'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Las aplicaciones móviles son una buena herramienta para generar contenidos,
                      interactuar y poner a disposición servicios para tus clientes.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingThree'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseThree' aria-expanded='false' aria-controls='HtmCollapseThree'>
                      3. Blog
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseThree' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingThree'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Son muy efectivos para relacionarse y fidelizar clientes a través de
                      contenidos de valor, además generan credibilidad y diferenciación frente a
                      la competencia. El contenido debe ser útil y ayudar a estos mismos en asuntos
                      relacionados a tu negocio.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingFour'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseFour' aria-expanded='false' aria-controls='HtmCollapseFour'>
                      4. E-books
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseFour' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingFour'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Los libros no van a extinguirse, pero el formato electrónico está de moda y
                      es muy útil para facilitar el acceso a la lectura. Además, en algunas
                      plataformas es posible poner enlaces para enriquecer a la
                      historia y generar tráfico para otros canales.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingFive'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseFive' aria-expanded='false' aria-controls='HtmCollapseFive'>
                      5. Juegos
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseFive' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingFive'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      La gamificación o empleo de la mecánica de los juegos está siendo muy
                      utilizada para atraer y fidelizar clientes, así como para animar que ellos
                      realicen tareas consideradas aburridas, también para minimizar los tiempos
                      para adquisición de productos.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingSix'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseSix' aria-expanded='false' aria-controls='HtmCollapseSix'>
                      6. QR Codes
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseSix' className='panel-collapse collapse' role='tabpanel' aria-labelledby='HtmHeadingSix'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Funciona como enlace para llevar a contenidos diferentes en la web o para
                      descargar apps. Estos códigos pueden estar ubicados en elementos de
                      comunicación tradicional y en formato físico.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingSeven'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseSeven' aria-expanded='false' aria-controls='HtmCollapseSeven'>
                      7. Videos
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseSeven' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingSeven'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Más allá de las películas, cortos, trailers y anuncios; a través del formato
                      audiovisual es posible generar contenidos útiles como entrevistas,
                      testimonios, tutoriales y animaciones (storytelling).
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingEight'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseEight' aria-expanded='false' aria-controls='HtmCollapseEight'>
                      8. Audios
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseEight' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingEight'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Así como las canciones tienen un gran poder de alcance en lnternet, los
                      podcasts son una buena opción para distribuir los contenidos de audio que
                      también pueden ser entrevistas, testimonios o clases. Los usuarios pueden
                      descargarlos o escucharlos en streaming por las radios online.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingNine'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseNine' aria-expanded='false' aria-controls='HtmCollapseNine'>
                      9. Comics
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseNine' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingNine'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Buena opción de formato para públicos específicos, para diferenciarse a
                      través de una plataforma.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingTen'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseTen' aria-expanded='false' aria-controls='HtmCollapseTen'>
                      10. Eventos
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseTen' className='panel-collapse collapse' role='tabpanel' aria-labelledby='HtmHeadingTen'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Estar en vivo de manera presencial u online con la audiencia puede ser muy
                      productivo para escuchar y relacionarse con los clientes, además de promover
                      experiencias personalizadas o exclusivas.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='HtmHeadingEleven'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#HtmCollpase'
                      href='#HtmCollapseEleven' aria-expanded='false' aria-controls='HtmCollapseEleven'>
                      11. Presentaciones
                    </a>
                  </h5>
                </div>
                <div id='HtmCollapseEleven' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='HtmHeadingEleven'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Los slides no están fuera de moda y son una buena plataforma para divulgar de
                      manera esquemática contenidos acerca de clases, libros, casos y otros. Pueden
                      estar disponibles para descargar en tu página o blog, online en página como
                      Slideshare.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>
          <br />

          <DegrantImage url='./assets/img/M05_IMG20.jpg' inverse>
            Te invitamos a ver el material complementario asociado a Gamificación, que es referido
            en la sección “Recursos de profundización o complementarios” que encontrarás al
            finalizar este módulo.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Además, te invitamos a conocer lo planteado por el experto Mauricio Vásquez sobre el
            juego y el uso de sus lógicas en la transmedialidad:
          </div>

          <Video videoId={314994214} />
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
