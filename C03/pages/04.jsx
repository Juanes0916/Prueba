import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  Popup,
  UDScrollbars,
  UDCarousel
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import ButtonPopup from '../../components/ButtonPopup1';

const items = [
  {
    title: (<h5>Absorción</h5>),
    section: (
      <div>
        La absorción se relaciona con lo que mantiene la atención consciente de las personas.
      </div>
    )
  },
  {
    title: (<h5>Participación activa</h5>),
    section: (
      <div>
        La participación activa involucra a un cliente que lo afecta en lo personal un evento
        cualquiera.
      </div>
    )
  },
  {
    title: (<h5>Inmersión</h5>),
    section: (
      <div>
        La inmersión involucra a ese individuo en la experiencia, en el plano físico o virtual.
      </div>
    )
  },
  {
    title: (<h5>Participación pasiva</h5>),
    section: (
      <div>
        La participación pasiva afecta a los clientes que no influyen de forma directa en las
        actuaciones.
      </div>
    )
  },
  {
    title: (<h5>Entretenimiento</h5>),
    section: (
      <div>
        El entretenimiento involucra a un cliente que absorbe de manera pasiva la experiencia
        por medio de sus sentidos.
      </div>
    )
  },
  {
    title: (<h5>Educación</h5>),
    section: (
      <div>
        La experiencia educativa incluye de forma activa esa experiencia en la mente de ese
        cliente, porque aumenta sus conocimientos o habilidades.
      </div>
    )
  },
  {
    title: (<h5>Escapista</h5>),
    section: (
      <div>
        La experiencia escapista involucra encuentros memorables que sumergen e involucran
        de forma activa a ese cliente.
      </div>
    )
  },
  {
    title: (<h5>Estética</h5>),
    section: (
      <div>
        La experiencia estética lo sumerge en un ambiente.
      </div>
    )
  }
];

const popup = (item) => {
  Popup.open({
    content: (
      <div className='unc-title'>
        <div className='unc-title' style={{ color: '#9a10b2', textAlign: 'center' }}>{item.title}</div>
        <br />
        <div>{item.section}</div>
      </div>
    )
  });
};

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
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M02_IMG04.jpg',
                label: (
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
                )
              },
              {
                bgImage: './assets/img/M02_IMG07.jpg',
                label: (
                  <div>
                    <h3>Servicios</h3>

                    Son una forma de producto que consiste en actividades, beneficios o
                    satisfacciones que se ofrecen a la venta; son, básicamente, intangibles
                    que no tienen como resultado la obtención de la propiedad de algo. Como
                    ejemplos, podemos citar los servicios de los teatros, institutos educativos,
                    centros culturales, escuelas de arte, editoriales y demás servicios
                    culturales.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M02_IMG28.jpg',
                label: (
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
                )
              }
            ]}
            />
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
                title: (
                  <h5>Sensoriales</h5>
                ),
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
                title: (<h5>De los sentimientos</h5>),
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
                title: (<h5>Del pensamiento</h5>),
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
              className='col-md-7 col-sm-2 unc-padding-1'
              buttonClassName='pecc-94c unc-fill unc-clickeable'
              popup={{
                title: (<h5>De actuaciones</h5>),
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
                title: (<h5>De relaciones</h5>),
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

          <div id='obj-arrow' className='unc-row-scalable'>
            <div className='unc-scalable'>
              <img src='./assets/img/M02_IMG29.png' width='50%' />
              <div
                className='unc-rect unc-c1'
                onClick={() => popup(items[0])}
                style={{
                  left: '46%',
                  top: '1%',
                  width: '8%',
                  height: '8%'
                }}>
              </div>
              <div
                className='unc-rect unc-c2'
                onClick={() => popup(items[1])}
                style={{
                  left: '65.5%',
                  top: '44%',
                  width: '10%',
                  height: '13%'
                }}>
              </div>
              <div
                className='unc-rect unc-c3'
                onClick={() => popup(items[2])}
                style={{
                  left: '46%',
                  top: '94%',
                  width: '8%',
                  height: '8%'
                }}>
              </div>
              <div
                className='unc-rect unc-c4'
                onClick={() => popup(items[3])}
                style={{
                  left: '24.5%',
                  top: '45%',
                  width: '10%',
                  height: '13%'
                }}>
              </div>
              <div
                className='unc-rect unc-c5'
                onClick={() => popup(items[4])}
                style={{
                  left: '36%',
                  top: '28.5%',
                  width: '13.5%',
                  height: '8%'
                }}>
              </div>
              <div
                className='unc-rect unc-c6'
                onClick={() => popup(items[5])}
                style={{
                  left: '53%',
                  top: '28.5%',
                  width: '9%',
                  height: '8%'
                }}>
              </div>
              <div
                className='unc-rect unc-c7'
                onClick={() => popup(items[6])}
                style={{
                  left: '53%',
                  top: '65%',
                  width: '9%',
                  height: '8%'
                }}>
              </div>
              <div
                className='unc-rect unc-c8'
                onClick={() => popup(items[7])}
                style={{
                  left: '39%',
                  top: '65%',
                  width: '8%',
                  height: '8%'
                }}>
              </div>
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

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
