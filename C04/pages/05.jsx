import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Activos de conocimiento</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, es importante saber que cuando estos activos intangibles se transforman en un
            producto final y se materializan en elementos concretos, los llamaremos activos de
            conocimiento. Y se podrían definir tantos tipos como industrias o empresas creativas
            haya.
            <br /><br />
            Esos activos de conocimiento tienen unas características, que te las explicaremos a
            continuación:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_3' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_3' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_3' data-slide-to='1' className=''></li>
                <li data-target='#Carousel_3' data-slide-to='2' className=''></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M01_IMG08.jpg'>
                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      Su realización implica un ejercicio de creación intelectual, es decir, son
                      la materialización de una propuesta conceptual.
                    </div>
                  </div>
                </div>

                <div className='item col- active'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      Responden a un proceso de realización intencionada y en la medida de lo
                      posible susceptible de ser documentada.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center' style={{ height: '372px' }}>
                    <div>
                      Logran concretar y materializar procesos conceptuales de intangibles en
                      productos con formatos claramente definidos.
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
          <br /><br />

          <DegrantImage url='./assets/img/M01_IMG25.jpg' inverse>
            TEN EN CUENTA QUE: En la perspectiva del sector creativo y cultural el valor de los
            emprendimientos está dado por la suma de los activos intangibles, los activos de
            conocimiento y los activos económicos, pero los dos primeros son los que determinan,
            en buena medida, la capacidad de cada organización de mantenerse a lo largo del tiempo.
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
