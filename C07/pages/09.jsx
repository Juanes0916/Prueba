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
          <h5>Masificación de la realidad virtual</h5>

          <div className='unc-row unc-padding-1'>
            En 2018 muchas marcas crearán experiencias con realidad virtual, sectores como el
            automotriz, B2B, educación, propiedad raíz, turismo, entre otros, mejorarán su
            experiencia de venta con contenidos más realistas del producto o servicio. Igualmente,
            compañías como Facebook, Apple, Samsung y Google continúan apostándole fuerte a esta
            tecnología que, seguramente, traerá grandes sorpresas durante este año.
          </div>

          <div className='unc-row unc-row-border unc-padding-2'>
            Por lo tanto, sugiere establecer:
            <br /><br />

            <ul>
              <li>Creación de contenido para dispositivos móviles.</li>
              <li>Canales de video 3D.</li>
            </ul>
          </div>

          <h5>Publicidad digital – “Atrápame si puedes”</h5>

          <div className='unc-row unc-padding-1'>
            Llegar al consumidor será cada vez más difícil, las razones son varias:
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
                      Aumento de adblockers
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_3One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Permite a los usuarios evitar elementos de las páginas web, como la publicidad.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Three' aria-expanded='false' aria-controls='Collapse_3Three'>
                      Influencers
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_3Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      La dificultad de los influencers para encontrar un modelo de negocio que
                      permita convivir con las marcas.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Four' aria-expanded='false' aria-controls='Collapse_3Four'>
                      Políticas de privacidad
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      El aumento de las políticas de privacidad de los usuarios.
                    </div>
                  </div>
                </div>
              </div>

              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Five'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Five' aria-expanded='false' aria-controls='Collapse_3Five'>
                      Pago por contenido
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Five' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Five'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      La creación de nuevos modelos de negocios de pago por contenido que se alejan
                      del tradicional financiamiento vía publicidad, que convertirán a ésta en una
                      de las tendencias digitales más interesantes del 2018 y será un mayor reto
                      para las agencias y las marcas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Por lo tanto, sugiere establecer:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_5' className='carousel slide' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_5' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_5' data-slide-to='1'></li>
                <li data-target='#Carousel_5' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M06_IMG08.jpg'>
                    <div>
                      <h3>Analizar la presión a pautar, ya que los contenidos orgánicos se
                        verán menos.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M06_IMG16.jpg'>
                    <div>
                      <h3>Evaluar la forma de comunicación de los Influencers, para que pasen de
                        ser figuras promocionales a establecer mayor relación con las marcas.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M06_IMG22.jpg'>
                    <div>
                      <h3>Potenciar los sitios web y fortalecer las comunidades.</h3>
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_5' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_5' data-slide='next'>
                <span className='ti-angle-right'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/* eslint-enable */}
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
