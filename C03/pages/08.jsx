import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Estudiar tu mercado</h5>

          <div className='unc-row unc-padding-1'>
            Luego de saber para quién haces lo que haces, llega el momento de conocerlo, y para
            hacerlo, existen diferentes alternativas, entre ellas realizar un estudio de mercado.
          <br /><br />

            Un estudio de mercado es un análisis riguroso del entorno de la organización cultural o
            creativa y de cada uno de sus productos o servicios. Para ello es importante la
            combinación de estrategias convencionales que te permitan conocer tu organización versus
            el mercado en el que participa, las tendencias del mercado, los competidores, y los
            clientes y sus necesidades, etc.
        </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_3' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_3' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_3' data-slide-to='1'></li>
                <li data-target='#Carousel_3' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M02_IMG17.jpg'>
                    <div>
                      En el estudio de mercado es muy importante que investigues y analices bien tu
                      competencia para conocer quiénes lo están haciendo bien y quiénes no. Esto te
                      ayudará a identificar oportunidades de negocio, claves de éxito y tendencias de
                      mercado. Conociendo la oferta de tu competencia puedes llegar a vislumbrar un
                      vació que no está siendo cubierto por nadie o la necesidad de mejorar un
                      producto, servicio o experiencia.
                  </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M02_IMG27.jpg'>
                    <div>
                      Puedes visitar los locales y establecimientos de tus competidores, visitar sus
                      sitios web y redes sociales, observar sus públicos, clientes o consumidores,
                      analizar la interacción de sus audiencias. Con esta información puedes hacer
                      una tabla de puntos débiles y fuertes. Si en el Sector hay muchos competidores,
                      elige los más fuertes y los más débiles. La comparación puede servirte mucho.
                  </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M02_IMG19.jpg'>
                    <div>
                      Para consolidar una investigación de mercado, una matriz DOFA es una de las
                      herramientas básicas más utilizadas y extendidas. También se la llama FODA a
                      partir de las siglas de Fortalezas, Amenazas, Oportunidades y Debilidades.
                      Hasta ahora es una metodología que sigue vigente y facilita la organización
                      de la información recolectada en un análisis de mercado.
                  </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_3' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_3' data-slide='next'>
                <span className='ti-angle-right'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Desde una orientación al conocimiento del usuario, un estudio de mercado sirve, para:
          <br /><br />

            <div className='text-center'>
              <img src='./assets/img/M02_IMG39.jpg' style={{ maxwidth: '860px', width: '100%' }} />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Realizar un estudio de mercado es útil, si se hace bien. La clave está en cómo se diseña
            una buena estrategia y cómo se implementa. Por ello, para diseñar un buen estudio de
            mercado e implementarlo, debes tener los siguientes puntos muy en cuenta:
        </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_4' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_4' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_4' data-slide-to='1' className=''></li>
                <li data-target='#Carousel_4' data-slide-to='2' className=''></li>
                <li data-target='#Carousel_4' data-slide-to='3' className=''></li>
                <li data-target='#Carousel_4' data-slide-to='4' className=''></li>
              </ol>


              <div
                className='carousel-inner unc-equal-cols unc-row-bgfull'
                data-url='./assets/img/M04_IMG07.jpg'>
                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      <h5>Es mejor observar que preguntar</h5>
                      Estudiar el comportamiento natural, el no anunciado o racionalizado, siempre va
                      a aportar ideas más cercanas a la necesidad profunda del usuario. En lugar de
                      preguntar ¿qué necesita? es más favorable tener un prototipo preparado y
                      estudiar las reacciones, la actitud, la relación con el producto o servicio en
                      cuestión de nuestro público objetivo.
                  </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      <h5>Investigar con usuarios reales en entornos reales</h5>
                      A la hora de testear un producto o servicio prototipo, es muy importante que no
                      cuentes con suplentes escogidos rápidamente para salir del paso ni que lo hagas
                      en lugares que no tienen nada que ver con el consumo del producto o servicio.
                      Todos los involucrados, incluido el contexto, deben ser reales para que
                      las conclusiones que obtengas también lo sean.
                  </div>
                  </div>
                </div>

                <div className='item col- active'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      <h5>Si el producto no existe tendrás que simularlo</h5>
                      La experiencia del usuario es lo más importante y para que vivan una
                      experiencia tienen que poder tocar un producto o sentir los beneficios de un
                      servicio. Deben vivirlo en primera persona, así que su tu producto o servicio
                      no existe, debes crear un prototipo rápido.
                  </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      <h5>la co-creación es la clave</h5>
                      En el estudio de mercado no solamente es importante escuchar las opiniones de
                      los usuarios, es una oportunidad para hacerlos partícipes del proceso de diseño
                      del producto o servicio en cuestión. Por eso, crear un ambiente de co-creación
                      es muy importante, porque solamente así se involucrarán y aportarán ideas
                      relevantes. Esto conecta con la emergencia de los llamados “living labs” o
                      “laboratorios vivos”, que son espacios sociales de innovación donde los
                      usuarios innovan a través de la co-creación. Ahí están trabajando juntos los
                      usuarios con los ingenieros e investigadores para generar valor.
                  </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      <h5>Antes, durante y después</h5>
                      No es suficiente con realizar un estudio de mercado antes de lanzar un producto
                      o servicio, es necesario hoy en día, ya que el mercado está en continuo cambio.
                      El estudio de mercado se debe mantener actualizado para que a partir de él se
                      vayan tomando decisiones de mejora.
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
            En el marco de un estudio de mercado, para conocer el cliente, puedes utilizar
             herramientas tradicionales como:
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
                      La entrevista
                  </a>
                  </h5>
                </div>
                <div id='Collapse_2One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_2One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <h5>
                        En la que puedes conocer a tu público no solo a través de preguntas
                        intencionadas sino analizando su lenguaje no verbal.
                    </h5>

                      En las entrevistas puedes hacer uso de herramientas como los cinco porqués.
                      Este sencillo método de investigación te ayudará a descubrir las profundas
                      motivaciones y suposiciones que sustentan el comportamiento de una persona.
                      Usarás este método mientras realizas una entrevista y comienzas con preguntas
                      realmente amplias como: ¿Ahorras mucho dinero?' o ¿Cómo estuvo tu cosecha este
                      año? Luego, al preguntar por qué cinco veces, llegarás a algunas respuestas
                      esenciales a problemas complicados.
                  </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_2Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_2'
                      href='#Collapse_2Two' aria-expanded='false' aria-controls='Collapse_2Two'>
                      La inmersión
                  </a>
                  </h5>
                </div>
                <div id='Collapse_2Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_2Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      <h5>Sumergirte en las vidas de las personas para las que estás diseñando por un día.</h5>

                      Pregúntales sobre sus vidas, cómo toma decisiones, míralos socializar, trabajar
                      y relajarse. No hay mejor manera de entender a las personas para las que estás
                      diseñando que sumergiéndote en su día a día y su entorno.
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