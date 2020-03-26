import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: '¿En qué momentos puedes implicar tu público?',
    content: (
      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Cuáles de los mecanismos presentados puedes utilizar para implicar a tu público y propiciar su captación y fidelización? Escribe las razones.',
    content: (
      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿El precio que has fijado para tu oferta está alineado al objetivo que tienes? Escribe las razones.',
    content: (
      <textarea id='TA_4' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Reflexión</h5>

          <div className='unc-row unc-padding-1'>
            Haz finalizado con los contenidos de este módulo, para terminar queremos
            que reflexiones sobre las siguientes preguntas:
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
