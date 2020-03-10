import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Reflexionemos sobre las tendencias</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            El mundo real y el mundo virtual imponen cambios y dinámicas con las que tu negocio
            en el sector creativo y cultural, y el público al que está dirigido se relacionarán,
            entonces, conocer qué cambios se espera que ocurran en temas tecnológicos, sociales
            o de otra índole, podrá ayudarte a evaluar, definir o preparar tu negocio en el
            sector creativo y cultural para vivirlos. La información sobre estos cambios los puedes
            encontrar en estudios de tendencias o realizar tus propias búsquedas en temas que te
            interesen.
          </div>

          <DegrantImage url='./assets/img/M06_IMG05.jpg' inverse>
            Para esto último te invitamos a ver los módulos de vigilancia tecnológica que
            encontrarás en Innovación Para Todos, visita la sección de “Recursos de profundización
            de este módulo”, allí los encontrarás referidos.
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
