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
          <h5>Design Thinking</h5>

          <div className='unc-row unc-padding-1'>
            La primera de ellas, <strong>Design Thinking</strong> (en español, <i>Pensamiento de
            Diseño</i>). Tim Brown, diseñador industrial inglés, presidente de IDEO (compañía de
            diseño global) y creador de la herramienta, dice que esta metodología “es un enfoque de
            innovación centrado en el ser humano, que se nutre del conjunto de herramientas del
            diseñador para integrar las necesidades de las personas, las posibilidades de la
            tecnología y los requisitos para el éxito empresarial”.
            <br /><br /><br />

            <div className='text-center' style={{ maxwidth: '480px' }}>
              <img src='./assets/img/M02_IMG40.jpg' />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            El <strong>Design Thinking</strong> tiene cinco características:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_5' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_5' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_5' data-slide-to='1' className=''></li>
                <li data-target='#Carousel_5' data-slide-to='2' className=''></li>
                <li data-target='#Carousel_5' data-slide-to='3' className=''></li>
                <li data-target='#Carousel_5' data-slide-to='4' className=''></li>
              </ol>


              <div
                className='carousel-inner unc-equal-cols unc-row-bgfull'
                data-url='./assets/img/M03_IMG05.jpg'>
                <div className='item col- active'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '350px' }}>
                    <div>
                      <h5>Generación de empatía</h5>
                      La empatía es la capacidad de percibir y comprender lo que otro ser puede
                      sentir. En nuestro proceso debemos entender los problemas, necesidades y
                      deseos de los usuarios y tenerlos en cuenta en todas las fases de nuestro
                      proyecto.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '350px' }}>
                    <div>
                      <h5>Experimentación</h5>
                      Para experimentar se debe dejar el miedo al error, la constante
                      experimentación en el proceso permitirá la evolución de nuestras ideas. Todo
                      el proceso de basar en crear ideas e ir a experimentar con nuestro usuario.
                      Así iremos perfeccionando y entendiendo mejor a dónde queremos llegar.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '350px' }}>
                    <div>
                      <h5>Hazlo visual</h5>
                      Plasma toda la información en imágenes, dibuja, haz recortes, usa el color
                      para transmitir emociones. Ejercita la creatividad. Importa la estética.
                      Nos debemos olvidar de largos textos y aprender a captar nuestras ideas en
                      citas cortas, que contengan la esencia de lo que queremos recordar.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '350px' }}>
                    <div>
                      <h5>Trabajo en equipo</h5>
                      Mientras más perspectivas se tengan en un proyecto el resultado va a ser
                      mejor. Integrar un equipo multidisciplinario con personas que tengan
                      diferentes habilidades, profesiones, percepciones es una de las mejores
                      estrategias que se puede hacer. Se deben valorar las singularidades de cada
                      miembro y el aporte individual que puede hacer al proyecto.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '350px' }}>
                    <div>
                      <h5>Recursividad</h5>
                      No necesitamos materiales difíciles de acceder, papel, marcadores, pegante y
                      cartón son más que suficientes para probar todas nuestras ideas. Reúsemos los
                      materiales que tengamos y si necesitamos un elemento muy específico pongamos
                      a prueba nuestra creatividad y que no se convierta en un obstáculo o en
                      una inversión económica difícil de hacer.
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

          <div className='unc-row unc-padding-1'>
            Las etapas del <i>Design Thinking</i> se muestran en la siguiente gráfica, haz clic
            en sus componentes y conoce más sobre cada etapa:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los íconos para ver la descripcion de cada etapa</small>
          </div>

          <div className='row unc-row-icon-title'>
            {/* TODO: Mapa Interactivo */}
            <div className='col-sm-2 col-sm-offset-1 unc-padding-1'>
              <span className='pecc-935 unc-fill unc-clickeable' data-toggle='modal' data-target='#modal24'></span>
              <h5>Empatizar</h5>
            </div>
            <div className='col-sm-2 unc-padding-1'>
              <span className='pecc-94e unc-fill unc-clickeable' data-toggle='modal' data-target='#modal25'></span>
              <h5>Definir</h5>
            </div>
            <div className='col-sm-2 unc-padding-1'>
              <span className='pecc-94f unc-fill unc-clickeable' data-toggle='modal' data-target='#modal26'></span>
              <h5>Idear</h5>
            </div>
            <div className='col-sm-2 unc-padding-1'>
              <span className='pecc-948 unc-fill unc-clickeable' data-toggle='modal' data-target='#modal27'></span>
              <h5>Prototipar</h5>
            </div>
            <div className='col-sm-2 unc-padding-1'>
              <span className='pecc-97e unc-fill unc-clickeable' data-toggle='modal' data-target='#modal28'></span>
              <h5>Probar</h5>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            {/* TODO: Audio */}
            <div className='text-center'>
              <button className='unc-button' data-target='#modal30' data-toggle='modal' type='button'>
                <span className='btn-label'><i className='icon-volume-2'></i></span>
                ¿Quién ha utilizado Design thinking para crear o mejorar su oferta?
              </button>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
