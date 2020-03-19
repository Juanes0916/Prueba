import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

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
            <UDCollapse summaryClassName='unc-summary module04' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_8'
                data-module='unc-modulo04'>
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
                deberás llenar las áreas<br /> de texto y a continuación hacer clic en
                <i>Descargar tus respuestas</i>.
              </small>

            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
