import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import ButtonPopup from '../../components/ButtonPopup1';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Lo creativo y lo cultural trascienden los productos y servicios, son
              experiencias</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Para empezar hablemos de las diferencias entre ellos:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_2' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_2' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_2' data-slide-to='1'></li>
                <li data-target='#Carousel_2' data-slide-to='2'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M02_IMG04.jpg'>
                    <div>
                      <h3>Producto</h3>

                      Cualquier cosa que se puede ofrecer a un mercado para su atención,
                      adquisición, uso o consumo, y que pudiera satisfacer un deseo o una
                      necesidad. Los productos incluyen más que solo los bienes tangibles. Para el
                      sector creativo y cultural puede ser un tanto más fácil determinar sus
                      productos, objetos, servicios, espacios, material gráfico, prendas de vestir
                      etc. Como ejemplo de algunos productos, podemos citar la producción de
                      contenido multimedia, revistas culturales, producción de series de
                      televisión, programación de videojuegos, venta de obras de arte,
                      artesanías, etc.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M02_IMG07.jpg'>
                    <div>
                      <h3>Servicios</h3>

                      Son una forma de producto que consiste en actividades, beneficios o
                      satisfacciones que se ofrecen a la venta; son, básicamente, intangibles
                      que no tienen como resultado la obtención de la propiedad de algo. Como
                      ejemplos, podemos citar los servicios de los teatros, institutos educativos,
                      centros culturales, escuelas de arte, editoriales y demás servicios
                      culturales.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center unc-row-bgfull'
                    data-url='./assets/img/M02_IMG28.jpg'>
                    <div>
                      <h3>Experiencias</h3>

                      Se trata del nombre asignado al conjunto de políticas y estrategias más
                      recientes e innovadoras, centradas en la búsqueda de una nueva fuente de
                      ventaja competitiva basada en la implicación emocional de los clientes y
                      en la creación de experiencias ligadas al producto o servicio. Es, en otras
                      palabras, la búsqueda, por parte del sector creativo y cultura, de enfatizar
                      la diferenciación de sus ofertas. Algunos ejemplos: Programadores de festivales,
                      muestras o redes de teatro o cine; sello discográfico; videojuegos;
                      productora de música; conciertos, entre otros.
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

          <div className='unc-row unc-padding-1'>
            Conoce los tipos de experiencias de los consumidores, según Schmitt :
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en cada ícono para profundizar en los tipos de experiencia</small>
          </div>

          <div className='row unc-row-icon-title'>
            <ButtonPopup
              className='col-md-4 unc-padding-1'
              buttonClassName='pecc-927 unc-fill unc-clickeable'
              popup={{
                title: <h5>Sensoriales</h5>,
                content: (
                  <div>Implican percepciones sensoriales: olfato, vista, tacto, oído, gusto.</div>
                )
              }}
              downTitle='Sensorial'
            />
            <ButtonPopup
              className='col-md-4 unc-padding-1'
              buttonClassName='pecc-916 unc-fill unc-clickeable'
              popup={{
                title: <h4>De los sentimientos</h4>,
                content: (
                  <div>Implican los sentimientos y las emociones.</div>
                )
              }}
              downTitle='De los sentimientos'
            />
            <ButtonPopup
              className='col-md-4 unc-padding-1'
              buttonClassName='pecc-973 unc-fill unc-clickeable'
              popup={{
                title: <h4>Del pensamiento</h4>,
                content: (
                  <div>
                    Apelan al intelecto con el propósito de crear experiencias cognitivas que
                    resuelvan problemas y que atraigan a los clientes.
                  </div>
                )
              }}
              downTitle='Del pensamiento'
            />
            <ButtonPopup
              className='col-md-7 col-sm-offset-2 unc-padding-1'
              buttonClassName='pecc-94c unc-fill unc-clickeable'
              popup={{
                title: <h4>De actuaciones</h4>,
                content: (
                  <div>
                    Implican cuestiones físicas y se proponen afectar experiencias corporales,
                    estilos de vida e interacciones.
                  </div>
                )
              }}
              downTitle='De actuaciones'
            />
            <ButtonPopup
              className='col-md-2 unc-padding-1'
              buttonClassName='pecc-902 unc-fill unc-clickeable'
              popup={{
                title: <h4>De relaciones</h4>,
                content: (
                  <div>Experiencias que son el resultado de relaciones con un grupo.</div>
                )
              }}
              downTitle='De relaciones'
            />
          </div>

          <div className='unc-row unc-padding-1'>
            Los productos son fungibles y tangibles; los servicios son intangibles y las
            experiencias, memorables. Esto quiere decir que para los compradores de experiencias
            estas son personales y existen solo en la mente del individuo que ha sido impactado en
            el ámbito emocional, físico, intelectual o incluso espiritual.
            <br /><br />

            Las experiencias, por su naturaleza, siempre han estado en el corazón de la industria
            del entretenimiento; por eso, en la actualidad, el concepto de vender experiencias debe
            ir más allá de los teatros y los parques de atracciones; esto es, más allá de lo
            fungible y lo tangible, porque lo memorable tiene un poder transformador y es capaz de
            cambiar la forma de pensar y actuar de un individuo.
            <br /><br />

            Para lograr esa transformación, <strong><i>las experiencias han de ser significativas y
            ricas</i></strong>. Según lo plantean los autores estadounidenses Joseph Pine y James
            Gilmore, quiénes en 1998 fueron los primeros en hablar del término <strong><i>Economía
            de la Experiencia</i></strong>, las experiencias más enriquecedoras son aquellas que
            abarcan aspectos de cuatro dominios: <strong><i>absorción, participación activa,
            inmersión y participación pasiva</i></strong>.
          </div>

          <div className='unc-row unc-padding-1'>
            Veamos cómo describen los expertos cada uno de estos ámbitos y cómo se relacionan con
            lo que queramos lograr en nuestro público.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic a cada texto en el mapa interactivo para ver la definición</small>
          </div>

          <div id='obj-arrow' className='unc-row-scalable' data-width='500'>
            {/* TODO: D3 */}
            <div className='unc-scalable'>
              <img src='./assets/img/M02_IMG29.png' width='100%' />
              <div className='unc-rect unc-c1' data-toggle='modal' data-target='#modal6'></div>
              <div className='unc-rect unc-c2' data-toggle='modal' data-target='#modal7'></div>
              <div className='unc-rect unc-c3' data-toggle='modal' data-target='#modal8'></div>
              <div className='unc-rect unc-c4' data-toggle='modal' data-target='#modal9'></div>
              <div className='unc-rect unc-c5' data-toggle='modal' data-target='#modal10'></div>
              <div className='unc-rect unc-c6' data-toggle='modal' data-target='#modal11'></div>
              <div className='unc-rect unc-c7' data-toggle='modal' data-target='#modal12'></div>
              <div className='unc-rect unc-c8' data-toggle='modal' data-target='#modal13'></div>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            La propuesta de las experiencias te puede servir para reflexionar sobre las
            características que debe tener la oferta que diseñes, claro está, articulado con el
            conocimiento de tu público, lo cual te permitirá conocer sus deseos y expectativas
            frente a una experiencia particular.
            <br /><br />

            Una experiencia ocurre cuando una propuesta de negocio utiliza de manera intencionada
            el servicio que ofrece para captar y enganchar a los clientes en un evento memorable
            y ya sabes qué es un evento memorable.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
