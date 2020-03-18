import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¡Haz cosas increíbles!</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Michael Kaiser, presidente del Centro John F. Kennedy para las Artes Performátivas
            de Washington (EE.UU), contó en una de sus conferencias en Circulart 2017 en Medellín,
            que una de las preguntas que más le hacen es qué hacer para que un proyecto creativo
            sea más fácil de financiar o comercializar, a lo que responde siempre “hacer cosas
            increíbles”. Puede parecer obvio, pero se trata de que, desde el diseño, lo que se haga
            sea único y maravilloso para marcar la diferencia. Kaiser también destacó que muchos
            proyectos no se toman el tiempo necesario para desarrollar sus ideas y todo busca
            hacerse de inmediato. Proyectar lo que se va realizar a hacer a uno o dos años
            (incluso cinco) permite trabajar mejor en hacer esas ideas de una forma “increíble”,
            con un mejor horizonte temporal.
            <br /><br />

            A nivel empresarial el diseño y la creación se han volcado al uso de metodologías
            disruptivas que buscan entablar una relación con los usuarios y públicos, no solo desde
            la experiencia de entregar un producto, sino desde la posibilidad de generar vínculos
            emocionales.
          </div>

          <DegrantImage url='./assets/img/M01_IMG42.jpg' inverse>
            Tu talento + el conocimiento del cliente son fundamentales para hacer cosas increíbles.
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
