import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

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
            {/* TODO: D3 */}
            <div className='text-center'>
              <svg id='unc-transmedia-pie'></svg>
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
