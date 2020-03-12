import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';
import ButtonPopup from '../../components/ButtonPopup1';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Tendencias asociadas al relacionamiento de las marcas con los usuarios</h4>
          </div>

          <h5>Volver al origen</h5>

          <div className='unc-row unc-padding-1'>
            A partir de 2018 vemos con más fuerza cómo las marcas tienen un giro inesperado hacia el
            pasado, hacia el comienzo de su historia y el porqué de la creación de sus productos; un
            giro coherente con la tendencia del consumidor, quien está cambiando rápido y de forma
            radical.
          <br /><br />

            Las nuevas generaciones se comportan muy diferente a las tradicionales en su relación
            con las marcas y el consumo, porque son consumidoras más descomplicadas pero, al
            tiempo, más exigentes, con mucha información a la mano, dispuestas a pagar un poco más
            por marcas con las cuales se identifiquen no solo en el plano de la moda sino de los
            valores, los métodos de producción y del respeto por el medio ambiente y por la
            sociedad.
          <br /><br />

            Para 2020 la población laboral estará compuesta por millennials y Generación Z,
            consumidores que se van a caracterizar por:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre los ícono para ver la información asociada</small>
          </div>

          <div className='unc-row row unc-row-icon-title'>
            <ButtonPopup
              className='col-sm-1 col-sm-offset-2 unc-padding-1'
              buttonClassName='pecc-973 unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Ser más conscientes: respeto a las culturas y al impacto social ambiental.</p>
                )
              }}
            />
            <ButtonPopup
              className='col-sm-1 unc-padding-1'
              buttonClassName='pecc-920 unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Hacer un consumo diferente: reducirlo como acción sostenible.</p>
                )
              }}
            />
            <ButtonPopup
              className='col-sm-1 unc-padding-1'
              buttonClassName='pecc-969 unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Poseer más información en línea: webs, redes sociales y comunidades.</p>
                )
              }}
            />
            <ButtonPopup
              className='col-sm-1 unc-padding-1'
              buttonClassName='pecc-947 unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Ser más desprendidos: preferirán la economía colaborativa y serán más
                  conscientes del consumo.
                  </p>
                )
              }}
            />
            <ButtonPopup
              className='col-sm-1 unc-padding-1'
              buttonClassName='pecc-907 unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Ser más exigente: con conceptos que influyen en la determinación de la
                  compra.
                  </p>
                )
              }}
            />
            <ButtonPopup
              className='col-sm-1 unc-padding-1'
              buttonClassName='pecc-90c unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Ser más transparentes en la compra: buscan la verdad sobre lo que
                  consumirán.
                  </p>
                )
              }}
            />
            <ButtonPopup
              className='col-sm-1 unc-padding-1'
              buttonClassName='pecc-977 unc-fill unc-clickeable'
              popup={{
                title: <h4></h4>,
                content: (
                  <p>Obrar de forma correcta.</p>
                )
              }}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            El segundo ejemplo es el <strong>Museo de Arte de Denver</strong>, en Colorado,
            Estados Unidos.
          <br /><br />

            <strong>¿Qué es?</strong> El museo está compuesto por una serie de rectángulos
            entrelazados, por medio de un diseño geométrico de formas agresivas, puras e
            irregulares, de vidrio y titanio que reflejan los picos y cristales de roca de las
            montañas de Colorado, explica el portal. Es un proyecto diseñado como parte de una
            composición de los espacios públicos, monumentos y pasarelas concentrados en ese sector
            de Denver. El rasgo más sorprendente del museo es la forma triangular de una esquina
            que se dispara hacia afuera de la calle.
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


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M06_IMG21.jpg'
                style={{ minheight: '250px' }}>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Volver al origen es des-industrializar, volver a la esencia del marketing, a lo
                      fundamental y a entender las necesidades del consumidor y resolverlas de manera
                      funcional.
                  </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Por lo tanto, se sugiere establecer para estos públicos:
                    <br /><br />

                      <div className='text-left'>
                        - Primero persuasión y luego promoción. <br />
                        - Promover el re-uso, la re-venta y el cuidado ambiental. <br />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Y para que el producto dure:
                    <br /><br />

                      <div className='text-left'>
                        - Compromiso por el post-consumo. <br />
                        - Crecimiento de marcas locales y artesanales. <br />
                        - Marcas con causas. Mercadeo emocional sin olvidar lo funcional. <br />
                        - Adaptarse a los cambios del consumidor. <br />
                      </div>

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

          <br /><br />

          <DegrantImage url='./assets/img/M06_IMG04.jpg' inverse>
            Si aún no has explorado el módulo “Conocimiento del consumidor”, allí encontrarás
            información que está alineada a la lógica de esta tendencia.
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
