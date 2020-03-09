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
          <h5>¿Qué tener en cuenta en el proceso de implicación del público?</h5>

          <div className='unc-row unc-padding-1'>
            En todo este proceso, debes tener en cuenta la diversidad de preferencias que
            hay en tu público. Cada miembro del público tiene su propio arco de implicación,
            basado en su apetito y su enfoque sobre cómo quiere implicarse.
            <br /><br />

            La investigación sobre las preferencias del público para implicarse con la obra, el
            producto creativo o el evento, nos sugiere seis tipologías generales de público:
          </div>

          {/* eslint-disable */}
          {/* TODO: AiCarousel */}
          <div id='AiCarousel' className='carousel slide filter' data-ride='carousel'>

            <ol className='carousel-indicators'>
              <li data-target='#AiCarousel' data-slide-to='0' className='active'></li>
              <li data-target='#AiCarousel' data-slide-to='1'></li>
              <li data-target='#AiCarousel' data-slide-to='2'></li>
              <li data-target='#AiCarousel' data-slide-to='3'></li>
              <li data-target='#AiCarousel' data-slide-to='4'></li>
              <li data-target='#AiCarousel' data-slide-to='5'></li>
            </ol>


            <div className='carousel-inner unc-equal-cols' data-url='./assets/img/M04_IMG07.jpg'>
              <div className='item active col-'>
                <div className='unc-row-carousel unc-flex-center unc-row-bgfull' data-url='./assets/img/M04_IMG37.jpg'>
                  <div>
                    <strong>Los Lectores:</strong> son personas con una “implicación ligera”,
                    personas que disfrutan haciendo poco, excepto leer notas sobre el
                    programa, carteleras, y algún que otro artículo.
                  </div>
                </div>
              </div>

              <div className='item col-'>
                <div className='unc-row-carousel unc-flex-center unc-row-bgfull' data-url='./assets/img/M04_IMG38.jpg'>
                  <div>
                    <strong>Los Evaluadores Críticos:</strong> prestan atención a las reseñas de
                     los críticos y a otras fuentes independientes de información antes de
                     decidir asistir.
                  </div>
                </div>
              </div>

              <div className='item col-'>
                <div className='unc-row-carousel unc-flex-center unc-row-bgfull' data-url='./assets/img/M04_IMG39.jpg'>
                  <div>
                    <strong>Los Conversadores Ocasionales:</strong> procesan el arte hablando sobre
                    él de manera informal con amigos y familiares.
                  </div>
                </div>
              </div>

              <div className='item col-'>
                <div className='unc-row-carousel unc-flex-center unc-row-bgfull' data-url='./assets/img/M04_IMG40.jpg'>
                  <div>
                    <strong>Los Procesadores Tecnológicos:</strong> hacen uso de blogs, redes
                    sociales y otros entornos digitales para implicarse
                  </div>
                </div>
              </div>

              <div className='item col-'>
                <div className='unc-row-carousel unc-flex-center unc-row-bgfull' data-url='./assets/img/M04_IMG41.jpg'>
                  <div>
                    <strong>Los Buscadores de Perspectivas:</strong> buscan una experiencia
                    intelectual, y disfrutan absorbiendo gran cantidad de información antes y después de
                    su asistencia.
                  </div>
                </div>
              </div>

              <div className='item col-'>
                <div className='unc-row-carousel unc-flex-center unc-row-bgfull' data-url='./assets/img/M04_IMG42.jpg'>
                  <div>
                    <strong>Los Aprendices Activos:</strong> desean involucrarse personalmente
                    en la configuración de su propia experiencia.
                  </div>
                </div>
              </div>
            </div>


            <a className='left carousel-control' href='#AiCarousel' data-slide='prev'>
              <span className='ti-angle-left'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a className='right carousel-control' href='#AiCarousel' data-slide='next'>
              <span className='ti-angle-right'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
          {/* eslint-enable */}
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
