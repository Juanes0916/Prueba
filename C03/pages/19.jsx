import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

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
            <UDCollapse summaryClassName='unc-summary module02' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_5'
                data-module='unc-modulo02'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>

              <small style={{
                display: 'block',
                color: '#773939',
                maxwidth: '600px',
                margin: '0 auto'
              }}>
                Ten presente que las respuestas no son almacenadas por el sistema. Por lo tanto
                deberás llenar las áreas de texto y a continuación hacer clic en
                <i> Descargar tus respuestas</i>.
              </small>

            </div>
          </div>

        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
