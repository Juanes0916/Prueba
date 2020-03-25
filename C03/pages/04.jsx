import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  Popup,
  UDScrollbars,
  UDScalable,
  UDCarousel
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>Sensoriales</h4>),
    content: (
      <div>
        Implican percepciones sensoriales: olfato, vista, tacto, oído, gusto.
      </div>
    )
  },
  {
    title: (<h4>De los sentimientos</h4>),
    content: (
      <div>
        Implican los sentimientos y las emociones.
      </div>
    )
  },
  {
    title: (<h4>Del pensamiento</h4>),
    content: (
      <div>
        Apelan al intelecto con el propósito de crear experiencias cognitivas que
        resuelvan problemas y que atraigan a los clientes.
      </div>
    )
  },
  {
    title: (<h4>De actuaciones</h4>),
    content: (
      <div>
        Implican cuestiones físicas y se proponen afectar experiencias corporales,
        estilos de vida e interacciones.
      </div>
    )
  },
  {
    title: (<h4>De relaciones</h4>),
    content: (
      <div>Experiencias que son el resultado de relaciones con un grupo.</div>
    )
  },
  {
    title: (<h4>Absorción</h4>),
    content: (
      <div>
        La absorción se relaciona con lo que mantiene la atención consciente de las personas.
      </div>
    )
  },
  {
    title: (<h4>Participación activa</h4>),
    content: (
      <div>
        La participación activa involucra a un cliente que lo afecta en lo personal un evento
        cualquiera.
      </div>
    )
  },
  {
    title: (<h4>Inmersión</h4>),
    content: (
      <div>
        La inmersión involucra a ese individuo en la experiencia, en el plano físico o virtual.
      </div>
    )
  },
  {
    title: (<h4>Participación pasiva</h4>),
    content: (
      <div>
        La participación pasiva afecta a los clientes que no influyen de forma directa en las
        actuaciones.
      </div>
    )
  },
  {
    title: (<h4>Entretenimiento</h4>),
    content: (
      <div>
        El entretenimiento involucra a un cliente que absorbe de manera pasiva la experiencia
        por medio de sus sentidos.
      </div>
    )
  },
  {
    title: (<h4>Educación</h4>),
    content: (
      <div>
        La experiencia educativa incluye de forma activa esa experiencia en la mente de ese
        cliente, porque aumenta sus conocimientos o habilidades.
      </div>
    )
  },
  {
    title: (<h4>Escapista</h4>),
    content: (
      <div>
        La experiencia escapista involucra encuentros memorables que sumergen e involucran
        de forma activa a ese cliente.
      </div>
    )
  },
  {
    title: (<h4>Estética</h4>),
    content: (
      <div>
        La experiencia estética lo sumerge en un ambiente.
      </div>
    )
  }
];

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
            <UDCarousel className='unc-filter' steps={[
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
            <div className='col-md-4 unc-padding-1'>
              <span className='pecc-927 unc-fill unc-clickeable' onClick={() => Popup.open(items[0])}></span>
              <h5>Sensorial</h5>
            </div>
            <div className='col-md-4 unc-padding-1'>
              <span className='pecc-916 unc-fill unc-clickeable' onClick={() => Popup.open(items[1])}></span>
              <h5>De los sentimientos</h5>
            </div>
            <div className='col-md-4 unc-padding-1'>
              <span className='pecc-973 unc-fill unc-clickeable' onClick={() => Popup.open(items[2])}></span>
              <h5>Del pensamiento</h5>
            </div>
            <div className='col-md-4 offset-sm-2 unc-padding-1'>
              <span className='pecc-94c unc-fill unc-clickeable' onClick={() => Popup.open(items[3])}></span>
              <h5>De actuaciones</h5>
            </div>
            <div className='col-md-4 unc-padding-1'>
              <span className='pecc-902 unc-fill unc-clickeable' onClick={() => Popup.open(items[4])}></span>
              <h5>De relaciones</h5>
            </div>
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

          <UDScalable>
            <div id='obj-arrow' className='unc-row-scalable' style={{ height: '354px', margin: 'auto 300px', width: '500px' }}>
              <div className='unc-scalable'>
                <img src='./assets/img/M02_IMG29.png' width='100%' />
                <div
                  className='unc-rect unc-c1'
                  onClick={() => Popup.open(items[5])}
                  style={{
                    height: '25px',
                    left: '210px',
                    top: '5px',
                    width: '85px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c2'
                  onClick={() => Popup.open(items[6])}
                  style={{
                    height: '45px',
                    left: '405px',
                    top: '155px',
                    width: '100px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c3'
                  onClick={() => Popup.open(items[7])}
                  style={{
                    height: '25px',
                    left: '210px',
                    top: '330px',
                    width: '85px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c4'
                  onClick={() => Popup.open(items[8])}
                  style={{
                    height: '45px',
                    left: '-5px',
                    top: '160px',
                    width: '100px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c5'
                  onClick={() => Popup.open(items[9])}
                  style={{
                    height: '25px',
                    left: '110px',
                    top: '100px%',
                    width: '130px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c6'
                  onClick={() => Popup.open(items[10])}
                  style={{
                    height: '25px',
                    left: '280px',
                    top: '100px',
                    width: '85px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c7'
                  onClick={() => Popup.open(items[11])}
                  style={{
                    height: '25px',
                    left: '280px',
                    top: '230px',
                    width: '85px'
                  }}>
                </div>
                <div
                  className='unc-rect unc-c8'
                  onClick={() => Popup.open(items[12])}
                  style={{
                    height: '25px',
                    left: '130px',
                    top: '230px',
                    width: '85px'
                  }}>
                </div>
              </div>
            </div>
          </UDScalable>

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
