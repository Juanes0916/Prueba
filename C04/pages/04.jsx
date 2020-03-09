import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Activos intangibles</h5>

          <div className='unc-row unc-padding-1'>
            Los <i>activos intangibles</i>, son la sumatoria de saberes con las que cuenta una
            organización y que le permiten construir, interactuar y producir su gran capital de
            trabajo; es decir, no son monetarios sino utilizados para el desarrollo de productos
            específicos que, a su vez, aportan al crecimiento económico.  El argentino <i>Horacio
            Krell</i>, director de <i>Ilvem</i>, reúne los activos intangibles en tres grandes
            grupos: <i>el capital humano</i>, <i>el capital estructural</i> y <i>el capital
            relacional</i> y los desarrolla de la siguiente manera:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_2' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_2' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_2' data-slide-to='1' className=''></li>
                <li data-target='#Carousel_2' data-slide-to='2' className=''></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M01_IMG11.jpg'
                style={{ backgroundimage: 'url(&quot;./assets/imgs/M01_IMG11.jpg&quot;)' }}>
                <div className='item col- active left'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px;' }}>
                    <div>
                      <h5>Capital humano</h5>
                      No le pertenece a la empresa pero es el que cuenta con el conocimiento
                    </div>
                  </div>
                </div>

                <div className='item col- next left'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px;' }}>
                    <div>
                      <h5>Capital estructural</h5>
                      Krell hace referencia al conjunto de patentes, Marcas, bases de datos,
                      plataformas tecnológicas u otro tipo de recursos de información con los que
                      cuenta cada empresa. Para el caso del sector creativo y cultural donde se
                      incluye lo social suelen ser las metodologías propias de trabajo que permiten
                      hacer diferentes tipos de intervenciones e interacciones con distintas
                      comunidades.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px;' }}>
                    <div>
                      <h5>Capital relacional</h5>
                      Se refiere a la capacidad de cada organización de establecer relaciones
                      directas y efectivas, con tomadores de decisiones, patrocinadores o posibles
                      socios potenciales que lleven al desarrollo de nuevas iniciativas, proyectos
                      o productos.
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_2' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_2' data-slide='next'>
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
