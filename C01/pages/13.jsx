import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

const panels = [
  {
    title: (
      <div>¿Has identificado si tu proyecto tiene un impacto social?
        <div>
          <small>Clave: ¿Hace parte de tus objetivos?</small>
        </div>
      </div>
    ),
    content: (
      (<textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />)
    )
  },
  {
    title: '¿Cómo podrías capitalizar ese impacto social para que posibilite la sostenibilidad económica de tu negocio?',
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
  </Page >
);

export default CustomPage;
