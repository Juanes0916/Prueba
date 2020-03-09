import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Reflexionemos sobre transmedialidad</h4>
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_2' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_2' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_2' data-slide-to='1'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='/content/pecc/imgs/M05_IMG23.jpg'>
                    <div>
                      Esa obsesión por hacer las cosas bien, por hacerlas cada día mejor y
                      por vincular a más públicos, le han permitido a La Fábrica, el ejemplo
                      con el que iniciamos este módulo, ir a la vanguardia de la madre de todas
                      sus batallas: mantenerse vigente en un mercado cada vez más exigente y
                      diversificado.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='/content/pecc/imgs/M05_IMG04.jpg'>
                    <div>
                      Recuerda, en el mundo creativo y cultural la transmedia abre universo de
                      posibilidades en las que se puede llevar al público no solo un producto sino
                      todas aquellas creaciones que surgen antes durante y después de la entrega de
                      tu oferta al público. Que además pueden ser entregados en diferentes
                      formatos, lo cual posibilita que al final se llegue a más públicos.
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
