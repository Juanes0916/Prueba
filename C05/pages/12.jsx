import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';
import * as d3 from 'd3';

import Header from '../components/Header';
import PieButtons from '../../components/PieButtons';

const popups = [
  {
    title: (<h4>Expansión vs profundidad</h4>),
    content: (
      <div>
        En este caso, la expansión se da gracias a las redes sociales. Se considera una
        expansión cuando se incrementa “el capital simbólico o económico del relato”. La
        profundidad se logra al encontrar aquellos embajadores de la historia, los encargados
        de ampliar el relato y propagar la narrativa con sus distintas versiones. Un ejemplo
        de expansiones es lo que ha sucedido con películas como Harry Potter y Matrix, que
        migraron a otros formatos.
      </div>
    )
  },
  {
    title: (<h4>Continuidad vs Multiplicidad</h4>),
    content: (
      <div>
        Para la ejecución de una historia es necesario la continuidad y la coherencia de los
        distintos lenguajes, medios y plataformas. Se espera que una historia que tiene su origen
        en el cine se comporte similar en un videojuego, en un cómic o en un sitio web. La
        continuidad se complementa con la multiplicidad, la creación de experiencias narrativas
        nuevas; es decir, con otros soportes. Matrix, Harry Potter y Star Wars también
        son ejemplo de esa continuidad, en la que el núcleo de la historia se respeta.
      </div>
    )
  },
  {
    title: (<h4>Inmersión vs Estabilidad</h4>),
    content: (
      <div>
        La inmersión en mundos ficticios es inherente a las narrativas transmedias. La cuestión
        es brindar facilidad al usuario y un ejemplo de esto son los videojuegos. Sin embargo, la
        estabilidad sucede cuando los elementos narrativos se llevan a la cotidianidad, como ocurre
        con la cerveza Duff de los Simpson y las figuras de Lego de Piratas del Caribe.
      </div>
    )
  },
  {
    title: (<h4>Construcción de mundos</h4>),
    content: (
      <div>
        Las transmedias construyen situaciones y detalles que dan veracidad al relato. Esto se
        evidencia cuando los fans alcanzan a tener un conocimiento enciclopédico de la narración.
        Un ejemplo es Batman y Ciudad Gótica, escenario del que los seguidores del cómic tienden a
        buscar la mayor cantidad de información, por ser la casa de su personaje favorito.
      </div>
    )
  },
  {
    title: (<h4>Serialidad</h4>),
    content: (
      <div>
        En estas narrativas las piezas no se organizan de forma lineal sino secuencial. Estas, a
        su vez, generan amplían las tramas difundidas en muchos medios. Un ejemplo es la trilogía
        de Matrix. El relato, en este caso en particular, es contado en películas, video juegos y
        cómics, pero no en el mismo periodo de tiempo.
      </div>
    )
  },
  {
    title: (<h4>Subjetividad</h4>),
    content: (
      <div>
        Las narrativas transmedias crean y potencian personajes e historias, por lo cual una de sus
        características fundamentales es ampliar esa historia, pues los conflictos de los
        personajes son usados como expansiones, como lo expone la siguiente gráfica:
        <br /><br />

        <div className='text-center'>
          <img src='./assets/img/M05_IMG41.png' />
        </div>
        <br /><br />

        Ejemplo: Los conflictos de los personajes a veces son usados como expansiones de la
        historia.
      </div>
    )
  },
  {
    title: (<h4>Realización</h4>),
    content: (
      <div>
        La participación de los usuarios, sea como creador o difusor, es fundamental.
      </div>
    )
  }
];

const panels = [
  {
    title: 'Mythos',
    content: (
      <div className='unc-padding-1'>
        Describe la historia como es; esto es, los conflictos, batallas, personajes,
        criaturas, hechos y rumores. Es la base para generar la interacción en el
        escenario. Ejemplo: conflicto de Superman con sujeto de otro planeta, poder:
        vuelo, velocidad y fuerza. Salva el mundo.
      </div>
    )
  },
  {
    title: 'Ethos',
    content: (
      <div className='unc-padding-1'>
        Marca los códigos sobre lo que significa el “bien” o el “mal”. Corresponde a
        la ética explícita e implícita del mundo. Es decir, se refiere a los códigos
        de comportamiento que los personajes deben seguir. Resulta indispensable para
        entender cómo comportarse en el mundo ficcionado. Ejemplo: comportamiento de
        superhéroe, trajes y vestuario con la capacidad de solucionar.
      </div>
    )
  },
  {
    title: 'Topos',
    content: (
      <div className='unc-padding-1'>
        Hace alusión al tiempo en el que se presenta la historia (presente, pasado y
        futuro) y su detallada geografía. Involucra las tradiciones y el lenguaje.
        Ejemplo: Starwars que tiene planetas, lenguajes y personajes.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Características de la narrativa transmedia</h5>

          <div className='unc-row unc-padding-1'>
            Ahora bien, para hacer mundos o universos transmediales debes saber que estos tienen
            unas características, según lo exponen las expertas en el tema Lisbeth Klastrup y
            Susana Pajares Tosca Klastrup:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module04' panels={panels} />
          </div>
          <br />

          <div className='unc-row unc-padding-1'>
            Es necesario tener en cuenta que el relato no sólo responde a los personajes sino al
            tiempo en el que se desarrolla y al contexto.
            <br /><br />

            Además, no basta con esa unión sino que son necesarios unos detalles adicionales que
            aquí te los explicamos:
            <br /><br />
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce más sobre las características
            de la narrativa transmedia.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='unc-row text-center'>
              <PieButtons
                textData={[
                  ['Expansión Vs', 'Profundidad'],
                  ['Continuidad Vs', 'Multiplicidad'],
                  ['Inmersión Vs', 'Estabilidad'],
                  ['Construcción de mundos'],
                  ['Serialidad'],
                  ['Subjetividad'],
                  ['Realización']
                ]}
                color={d3.scaleOrdinal(['#00607e', '#007c93', '#00aaca', '#67b6b2'])}
                popups={popups}
              />
            </div>
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
