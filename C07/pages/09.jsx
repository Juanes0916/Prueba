import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCarousel,
  UDCollapse
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: 'Aumento de adblockers',
    content: (
      <div className='unc-padding-1'>
        Permite a los usuarios evitar elementos de las páginas web, como la publicidad.
      </div>
    )
  },
  {
    title: 'Influencers',
    content: (
      <div className='unc-padding-1'>
        La dificultad de los influencers para encontrar un modelo de negocio que
        permita convivir con las marcas.
      </div>
    )
  },
  {
    title: 'Políticas de privacidad',
    content: (
      <div className='unc-padding-1'>
        El aumento de las políticas de privacidad de los usuarios.
      </div>
    )
  },
  {
    title: 'Pago por contenido',
    content: (
      <div className='unc-padding-1'>
        La creación de nuevos modelos de negocios de pago por contenido que se alejan
        del tradicional financiamiento vía publicidad, que convertirán a ésta en una
        de las tendencias digitales más interesantes del 2018 y será un mayor reto
        para las agencias y las marcas.
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
          <h5>Masificación de la realidad virtual</h5>

          <div className='unc-row unc-padding-1'>
            En 2018 muchas marcas crearán experiencias con realidad virtual, sectores como el
            automotriz, B2B, educación, propiedad raíz, turismo, entre otros, mejorarán su
            experiencia de venta con contenidos más realistas del producto o servicio. Igualmente,
            compañías como Facebook, Apple, Samsung y Google continúan apostándole fuerte a esta
            tecnología que, seguramente, traerá grandes sorpresas durante este año.
          </div>

          <div className='unc-row unc-row-border unc-padding-2'>
            Por lo tanto, sugiere establecer:
            <br /><br />

            <ul>
              <li>Creación de contenido para dispositivos móviles.</li>
              <li>Canales de video 3D.</li>
            </ul>
          </div>

          <h5>Publicidad digital – “Atrápame si puedes”</h5>

          <div className='unc-row unc-padding-1'>
            Llegar al consumidor será cada vez más difícil, las razones son varias:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module06' panels={panels} />
          </div>
          <br />

          <div className='unc-row unc-padding-1'>
            Por lo tanto, sugiere establecer:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M06_IMG08.jpg',
                label: (
                  <h3>
                    Analizar la presión a pautar, ya que los contenidos orgánicos se
                    verán menos.
                  </h3>
                )
              },
              {
                bgImage: './assets/img/M06_IMG16.jpg',
                label: (
                  <h3>
                    Evaluar la forma de comunicación de los Influencers, para que pasen de
                    ser figuras promocionales a establecer mayor relación con las marcas.
                  </h3>
                )
              },
              {
                bgImage: './assets/img/M06_IMG22.jpg',
                label: (
                  <h3>Potenciar los sitios web y fortalecer las comunidades.</h3>
                )
              }
            ]}
            />
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
