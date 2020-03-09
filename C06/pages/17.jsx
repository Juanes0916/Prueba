import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Formas de pago</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Luego de haber visto elementos asociados a la fijación de precios (cuánto cobrar),
            otro asunto relacionado con la experiencia asociada al precio, es la forma de pago;
            es decir, cómo cobrar.
            <br /><br />

            Las formas de pago también se han multiplicado con el avance de las nuevas tecnologías.
            Una herramienta muy utilizada en la actualidad son las aplicaciones móviles de los
            bancos, las cuales le sirven, por ejemplo, a un consumidor potencial, que en su momento
            no tiene efectivo para pagar una camiseta en un bazar, pero que con esta
            herramienta no pierde la oportunidad de comprar ni el diseñador de vender.
          </div>

          <DegrantImage url='./assets/img/M04_IMG40.jpg' inverse>
            La penetración del comercio electrónico ha llegado a unas cifras importantes. Según
            datos de la Cámara de Comercio Electrónico de Colombia, la venta y compra de bienes
            y servicios por internet creció en el país en un 20% al cierre de 2018, lo que
            representa ingresos por 17 billones de pesos.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            En la actualidad, cualquier persona cuenta con la posibilidad de desarrollar
            pasarelas de pago electrónico por medio de diferentes aplicaciones y proveedores,
            enfocadas a distintas necesidades de comercio electrónico que pueden aplicarse a
            muchos de nuestros bienes y servicios culturales y artísticos.
            <br /><br />

            Sobre este tema, mira lo que dice el experto Raúl Ramos, de Asimétrica, en relación
            con las plataformas de distribución:
          </div>

          <Video videoId={315027846} />

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_4' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_4' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_4' data-slide-to='1'></li>
                <li data-target='#Carousel_4' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M04_IMG25.jpg'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Un ejemplo destacable en relación con lo que dice el experto es la
                      experiencia de Salallena.com, proyecto que inició en abril de 2017 y
                      que ha facilitado el acceso de artistas locales de Medellín,
                      vinculados al sector independiente de las artes escénicas, a la venta
                      de boletería en línea.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Así, un músico puede ofrecer un concierto en un café pequeño, para 50
                      personas, a diez mil pesos la entrada, o una banda como Los Petit Fellas,
                      que se presenta en el Teatro Pablo Tobón Uribe, puede estar anunciada en
                      una misma cartelera y, a su vez, vender entradas con la comodidad de contar
                      con una taquilla <i>online</i> abierta 24/7.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Los datos que arroja Salallena.com en menos de un año de operaciones son
                      interesantes. El primero es que la boletería inferior a diez mil pesos no
                      tiene casi circulación dentro de los medios de pago electrónico. Otro dato
                      importante es que el promedio de pago por entrada para un espectáculo
                      escénico en la ciudad, a través de medios electrónicos, es de unos 26.000
                      pesos, por boleta.
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
            Una conclusión que podemos sacar con estos dos datos es que la disponibilidad de pago
            de los usuarios en plataformas digitales oscila entre 15.000 y 26.000 pesos, por
            persona, con la particularidad también de que en cada transacción el promedio de
            entradas que se venden es de 2,6, es decir, que muy pocas personas compran una
            sola entrada para ir a una función o un concierto.
            <br /><br />

            El Bitcoin, Litecoin y las criptomonedas son formas de pago que tienen un auge
            altísimo en la actualidad y puede ser una alternativa interesante, pero es
            importante considerar aspectos legales, tributarios y financieros al momento de
            utilizarlas. Aun la manera en que se comercia con este tipo de medio de pago no es
            muy clara, por eso, la recomendación es asesorarse bien sobre su uso, su distribución
            y sus formas de cambio, para evitar riesgos.
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_5' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_5' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_5' data-slide-to='1'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M04_IMG09.jpg'>
                <div className='item active col-' style={{ minheight: '200px' }}>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      El Teatro Matacandelas utilizó el Bitcoin y en la actualidad recibe desde
                      su página web casi todas las criptomonedas para el pago de entradas.
                    </div>
                  </div>
                </div>

                <div className='item col-' style={{ minheight: '200px' }}>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      En la página de <a href='https://www.coinpayments.net' target='_blank'
                        style={{ color: 'white', fontweight: 'bold' }}>CoinPayments</a> puede
                    consultarse sobre el uso de más de 250 tipos de criptomonedas y la manera
                    de implementarlas en el comercio electrónico ¿Podrías ser la moneda
                    del futuro? Eso está por verse.
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
            Con el objetivo de incrementar la presencia <i><i>online</i></i>, el pago
            por <i>share</i> ofrece un método de pago que consiste en hacerte fan o compartir
            contenido en Facebook o Twitter para acceder al producto. Letku es una plataforma
            de comercialización de ebooks y contenidos digitales, nacida en 2014, cuyo objetivo
            es aunar esfuerzo de autores, editores y clientes para ofrecer un espacio de
            publicación y difusión de la cultura, que sea justo para todas las partes. Una de las
            formas de pago es la de compartir en Facebook o Twitter.
            <br /><br />

            Otro ejemplo del mundo de las artes escénicas lo puso en marcha la coreógrafa Debbie
            Wilson, al llevar a la escena un borrador de su nueva obra en el Winchester Street
            Theatre, de Toronto, Canadá:
          </div>

          <DegrantImage url='./assets/img/M04_IMG43.jpg' inverse>
            Contrató a los bailarines de una escuela de danza próxima y solo le pidió a su público
            que trajeran sus teléfonos móviles y tuitearan todo el tiempo con el numeral #helios
            cuáles eran sus impresiones mientras se desarrollaba el espectáculo The Eyes of Helios.
            Además del soporte publicitario que esta iniciativa supuso para la obra, a la
            coreógrafa le permitió saber cómo el foco de atención del espectador se modifica
            durante la función.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Hay otras plataformas que puedes considerar como Pay Pal, que permite que los
            consumidores realicen sus pagos escaneando un código QR o recibiendo una secuencia de
            cuatro dígitos. El Presidente de esa compañía, David Marcus, lo llama la Money 3.0.
            <br /><br />

            Apple Pay llegó, y con él la posibilidad de pagar no solo con el móvil sino con el
            reloj (aunque lo cierto es que fue Samsung quien se adelantó, al ofrecer el pago a
            través del móvil, gracias a su plataforma Samsung Pay).
            <br /><br />

            Amazon introdujo la opción de añadir productos al carrito a través de Twitter. Para
            ello, sólo es necesario responder con el numeral #AmazonCart a cualquier tweet que
            contenga un link a un producto de esa compañía.
            <br /><br />

            La empresa Biyo propone pagar con la palma de la mano. Solo hace falta registrar una
            tarjeta de crédito por primera vez, pasándola por el terminal Biyo y luego escaneando
            la palma. De esta forma, los datos quedan asociados y a partir de ahí se utilizar la
            mano para realizar futuros pagos en locales que cuenten con este terminal.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
