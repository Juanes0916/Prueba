import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>

          <h5>Hablemos de impacto social</h5>

          <div className='unc-row unc-padding-1'>
            La pregunta clave, entonces, es saber qué se entiende por impacto social, para lo cual
            Juan Felipe Aramburo tiene una explicación sencilla en el siguiente videoclip:
          </div>

          <Video videoId={315288478} />

          <div className='unc-row unc-padding-1'>
            Al interpretar sus palabras, el impacto social es algo que se siente en las personas
            que lo reciben, sea en el aspecto cognitivo o físico, y que se da en el ámbito
            personal, familiar, grupal o comunitario. Y el espectro del impacto social es amplio,
            porque cambia para bien o para mal la vida de las comunidades que lo reciben e
            involucra muchas variables.
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            { /* TODO: Carousel */}
            <div id='Carousel_2' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_2' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_2' data-slide-to='1'></li>
                <li data-target='#Carousel_2' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'
                data-url='./assets/img/M04_IMG07.jpg'>
                <div className='item active col-'>
                  <div
                    className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M00_IMG08.jpg'>
                    <div>
                      Luego de habernos aproximado a lo que es cultura y su incidencia en la
                      transformación de la sociedad, así como habernos aproximado a una definición
                      de impacto social, podemos decir que el sector creativo y cultural está
                      asociado a la generación de impacto social y que dicho impacto puede ser
                      generado de manera natural por los artistas o creadores que hacen uso de sus
                      capacidades creativas para relacionarse en un escenario cultural.
							      </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div
                    className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M00_IMG09.jpg'>
                    <div>
                      En algunos casos, estos artistas o creadores realizan sus obras por la
                      necesidad y deseo de autoexpresión o por el simple disfrute de hacerlas e
                      incidir en un contexto social o momento histórico particular, desde lo cual
                      impactan la sociedad. Sin embargo también hay artistas o creadores para
                      quienes la realización de sus obras o creaciones además de representar estos
                      propósitos, representan la posibilidad de llevar su oferta al público e
                      impactar la sociedad y, desde allí, propiciar el desarrollo de un negocio.
							      </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div
                    className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M00_IMG07.jpg'>
                    <div>
                      Considerando que el impacto social no es un resultado sino un proceso
                      intencional que puede darse en un proceso específico de intervención o como
                      parte de la cadena de valor de una empresa, es indispensable que, partiendo
                      del planteamiento de tus objetivos, reconozcas el potencial que tiene tu
                      propuesta para generar impacto social, aspecto que puede ser clave para su
                      puesta en el mercado y reconocimiento por parte del público, de la oferta
                      entregada desde tu negocio.
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
