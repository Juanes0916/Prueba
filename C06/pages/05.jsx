import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';
import * as d3 from 'd3';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';
import PieButtons from '../../components/PieButtons';

const popups = [
  {
    title: (<h4>Público</h4>),
    content: (
      <div>
        Persona que <strong>asiste</strong> a un espectáculo o evento.
      </div>
    )
  },
  {
    title: (<h4>Usuario</h4>),
    content: (
      <div>
        Persona que <strong>usa tu producto</strong> o servicio para un bien propio.
      </div>
    )
  },
  {
    title: (<h4>Cliente</h4>),
    content: (
      <div>
        Persona que <strong>paga por los productos</strong> o servicios que le puedes ofrecer.
      </div>
    )
  },
  {
    title: (<h4>Audiencia</h4>),
    content: (
      <div>
        Persona que <strong>interactua</strong> con tu empresa a través de cualquier medio
        de comunicación.
      </div>
    )
  },
  {
    title: (<h4>Consumidor</h4>),
    content: (
      <div>
        Persona que <strong>consume</strong> tu producto o servicio.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Qué entendemos por público?</h5>

          <div className='unc-row unc-padding-1'>
            Antes de entrar en detalles del tema, debes tener claro a qué nos referimos cuando
            hablamos de público. En el módulo de Conocimiento del Cliente verás los diferentes
            roles con los que tu público interactúa con tu oferta. Aquí nos enfocaremos en dos
            de ellos, la audiencia y el público.
            <br /><br />

            Estos roles son:
            <br /><br />

            <div className='unc-row-tip'>
              <small>Haz clic en los componentes del gráfico y conoce los roles del público.</small>
            </div>

            <div className='text-center'>
              <div className='unc-row text-center'>
                <PieButtons
                  textData={[
                    ['1. Publico'],
                    ['2. Usuario'],
                    ['3. Cliente'],
                    ['4. Audiencia'],
                    ['5. Consumidor']
                  ]}
                  color={d3.scaleOrdinal(['#35387f', '#666db1', '#9a9bcb'])}
                  popups={popups}
                />
              </div>
              {/* TODO: D3 */}
              <svg id='unc-mercado6-pie'></svg>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Además, debes saber que frente a las diferencias entre públicos y audiencias no
            hay definiciones únicas. El discurso de las industrias creativas ha introducido la
            expresión audiencias culturales y se ha convenido que este término facilita la
            investigación y el diseño de estrategias, en especial, en el medio anglosajón, al
            diferenciarlo de públicos. Se afirma, entonces, que las audiencias se desarrollan
            mientras los públicos se forman.
            <br /><br />

            Hay quienes ven en este matiz una declaración de principios y sostienen que hablar de
            audiencias implica entender el fenómeno artístico desde la lógica de la transacción de
            producto y mercancía. En cambio, optar por públicos remite al sentido más profundo de
            la creación. Otros plantean que los públicos son audiencias ya fidelizadas.
          </div>

          <DegrantImage url='./assets/img/M04_IMG39.jpg' inverse>
            Al margen de tal dicotomía, y para facilitar la aproximación al tema, en adelante nos
            referiremos a públicos, considerando lo escrito por el antropólogo mexicano Néstor
            Canclini: “Los públicos no nacen sino que se hacen, pero de modos distintos en la
            época gutenberguiana o en la digital”
          </DegrantImage>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
