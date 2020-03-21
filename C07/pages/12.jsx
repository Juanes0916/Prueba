import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: 'Economía de plataformas',
    content: (
      <div className='unc-padding-1'>
        Los ecommerce y las tiendas online cada vez son más populares, porque lo que
        conocemos como ventas por internet hacen que esta tendencia se posicione cada
        vez más y con mayor frecuencia, gracias a sus facilidades de compra,
        múltiples opciones de pago y entregas relámpago.
      </div>
    )
  },
  {
    title: 'Súper contenidos',
    content: (
      <div className='unc-padding-1'>
        En esta tendencia aplica la ley “mayor calidad, menor cantidad”, porque el
        marketing de contenidos de las marcas está alineado con los temas de
        conversación de los usuarios de esas marcas, al hacer de ese marketing un
        lugar en redes sociales donde el contenido web demostrará su eficacia por
        medio del análisis de data, gracias al comportamiento de los usuarios.
      </div>
    )
  },
  {
    title: 'El boom del comercio social y móvil',
    content: (
      <div className='unc-padding-1'>
        Una vez más somos testigos de cómo el comercio electrónico se posiciona día
        a día en nuestra cotidianidad. Los pagos con el móvil, las compras online y
        por internet van consolidando sistemas y comunidades en las que los usuarios
        pueden interactuar, hacer transferencia, consumir contenido e
        intercambiar experiencias.
      </div>
    )
  },
  {
    title: 'Inteligencia artificial',
    content: (
      <div className='unc-padding-1'>
        Más cerca de lo que imaginamos, la inteligencia artificial está presente en
        muchas de nuestras actividades diarias revolucionando y generando nuevos
        sistemas que permitan procesar la información mucho más rápido, si aún no lo
        crees, pregúntale a Siri.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Tendencias que marcan el curso de 2017 – 2018</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            A continuación, relacionaremos las tendencias que las más importantes agencias
            digitales de marketing establecieron para el 2017 y 2018:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module06' panels={panels} />
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
