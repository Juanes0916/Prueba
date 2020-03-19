import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Apropiación de cambios tecnológicos</h5>

          <div className='unc-row unc-padding-1'>
            Otro asunto para tener en cuenta al pensar en innovación son los cambios tecnológicos,
            pues marcan un momento de transición que han visto surgir nuevos formatos en las
            industrias creativas y culturales, nuevas temáticas y nuevos consumidores.
          </div>

          <DegrantImage url='./assets/img/M03_IMG12.jpg'>
            Los emprendedores culturales deben ser sensibles a los cambios y una mirada macro debe
            darles los elementos para tomar decisiones de manera rápida, pues todo está sucediendo
            en un entorno de inmediatez y transitoriedad.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Las tecnologías de la información y comunicación (TIC), los avances tecnológicos y las
            redes sociales hacen posible que las personas puedan hacer o acceder a muchísimas cosas
            que antes tenían precio y cada vez cuesta menos hacer las cosas y más ponerlas en
            circulación.
            <br /><br />

            La clave aquí, como lo plantea Alejandro Arango en uno de los videosclips anteriores,
            es captar la atención de las personas y qué mejor manera que aprovechar la inmediatez,
            rapidez, accesibilidad y cobertura de la tecnología, las TIC y las redes sociales, para
            cooptar nichos de consumidores y alimentarlos con los aspectos que plantean las
            diferencias.
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
