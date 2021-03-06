import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: '¿Sabes qué es impacto social? Escribe tu definición.',
    content:
      (<textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
  },
  {
    title: '¿Sabes en qué consiste capitalizar el capital? Escribe en qué consiste.',
    content:
      (<textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
  },
  {
    title: '¿Conoces negocios del sector creativo y cultural que han capitalizado el impacto social para su sostenibilidad económica? Escribe cuáles y de qué forma.',
    content:
      (<textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
  }
];


const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Autoevaluación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            ¿Recuerdas las preguntas iniciales que te pedimos contestar desde tu experiencia? Es
            momento de contrastar tus conocimientos, ahora contesta a las siguientes preguntas
            teniendo en cuenta los contenidos vistos en este módulo.
            <br /><br />

            ¡Contrasta cada una de tus respuestas anteriores y evidencia tu aprendizaje!
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
  </Page >
);

export default CustomPage;
