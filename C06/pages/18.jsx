import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Reflexionemos sobre la implicación de públicos</h4>
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_6' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_6' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_6' data-slide-to='1'></li>
                <li data-target='#Carousel_6' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M04_IMG33.jpg'>
                    <div>
                      En sus esfuerzos por atraer y retener al público, cada vez más
                      creadores y organizaciones creativas y culturales están
                      experimentando con numerosas formas innovadoras de captación,
                      formación, fidelización y participación, en lo cual implicar
                      los públicos resulta un elemento clave.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M04_IMG10.jpg'>
                    <div>
                      Por último, queremos invitarte a no hacer en soledad el
                      desarrollo de tus estrategias de implicación de públicos, pues
                      la experiencia indica que los procesos ganan consistencia en
                      tanto involucran a distintos agentes del mismo ecosistema; es
                      decir, las sinergias son fundamentales para capitalizar esta
                      idea.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M04_IMG10.jpg'>
                    <div>
                      Muchas de estas estrategias de precio y otras que hemos visto
                      estan basadas en el uso inteligente de los datos desde este
                      programa. Animamos a que todos los proyectos sean
                      respuestuosos con las leyes de protección de datos porque es
                      la mejor forma implicar tus públicos.
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_6' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_6' data-slide='next'>
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
