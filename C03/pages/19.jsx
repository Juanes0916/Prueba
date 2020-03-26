import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: '¿Cómo puedes hacer que las experiencias asociadas a tu oferta sean significativas?',
    content: (
      <textarea id='TA_3' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Cómo podrías conocer tu cliente?',
    content: (
      <textarea id='TA_3' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Cuál de las metodologías planteadas para conocer mejor a tu cliente y mejorar su relación con tu oferta podrías utilizar en tu proyecto?',
    content: (
      <textarea id='TA_3' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
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
