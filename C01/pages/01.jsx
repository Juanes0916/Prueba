import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCarousel
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: '¿Sabes qué es impacto social? Escribe tu definición.',
    content: (<textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
  },
  {
    title: `¿Sabes cómo puede influir el impacto social de un emprendimiento
            en su sostenibilidad? Escribe en tu opinión.`,
    content: (<textarea id='TA_2_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
  },
  {
    title: `¿Conoces negocios del sector creativo y cultural que han capitalizado
            el impacto social para su sostenibilidad económica? Escribe cuáles y de qué forma.`,
    content: (<textarea id='TA_3_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M00_IMG06.jpg',
                label: (
                  <h1>
                    El impacto social es el mayor aporte de las empresas creativas y culturales
                  </h1>
                )
              },
              {
                bgImage: './assets/img/M00_IMG09.jpg',
                label: (
                  <div>
                    <h3>
                      Puedes capitalizar para la  sostenibilidad de tu emprendimiento
                    </h3>

                    Tener claro, desde los objetivos de tu empresa creativa y cultural, qué
                    impacto social generas en la comunidad, ya sea para resolver problemas
                    comunes o mitigar otros, es clave a la hora de pensar en la sostenibilidad
                    de tu negocio o emprendimiento.
                  </div>
                )
              }
            ]} />
          </div>

          <div className='unc-row unc-row-section-title'>
            <h4>Actividad de exploración</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Es muy importante para este proceso que estés consciente de los conocimientos
            con los que inicias; posiblemente has estado relacionados con el arte,
            la cultura, el emprendimiento, la creatividad y la innovación, pero no hemos
            aterrizado los conocimientos que el contexto nos ha brindado sobre estos temas,
            por esto, antes de comenzar con los contenidos de este módulo, queremos que
            escribas en los campos de texto dando respuesta, desde tu experiencia, a las
            siguientes preguntas:
          </div>

          <FormActivity panels={panels} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
