import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

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
