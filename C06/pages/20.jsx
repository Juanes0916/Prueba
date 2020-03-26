import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: 'En tu opinión, ¿Qué crees que es implicar a tu público?. Escribe tus ideas',
    content: (
      <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Qué sabes de como se relacionan la implicación de públicos con su captación y fidelización?. Escribe tus ideas',
    content: (
      <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿En qué medida crees que el precio incide en la impliación de tus públicos?. Escribe tus ideas',
    content: (
      <textarea id='TA_1_after' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Autoevaluación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            ¿Recuerdas las preguntas iniciales que te pedimos contestar desde tu
            experiencia? Es momento de contrastar tus conocimientos, ahora contesta
            a las siguientes preguntas teniendo en cuenta los contenidos vistos en
            este módulo.
            <br /><br />

            ¡Contrasta cada una de tus respuestas anteriores y evidencia tu
            aprendizaje!
          </div>

          <div className='unc-row'>
            <FormActivity panels={panels} />
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
