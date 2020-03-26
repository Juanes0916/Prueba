import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: '¿Cómo podría la lógica transmedia ser incorporada en tu emprendimiento?',
    content: (
      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Qué creaciones hay antes, durante o después de la entrega de tu oferta al público? Valida con tu usuario si le gustaría verlas y en qué formato.',
    content: (
      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Qué tecnologías análogas o digitales podrías utilizar para posibilitar que tu público tenga diferentes puntos de contacto?',
    content: (
      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Reflexión</h5>

          <div className='unc-row unc-padding-1'>
            Haz finalizado con los contenidos de este módulo, para terminar queremos que
            reflexiones sobre las siguientes preguntas:
          </div>

          <div className='unc-row'>
            <FormActivity panels={panels} />
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
