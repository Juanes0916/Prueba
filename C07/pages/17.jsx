import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: '¿Cuáles de estas tendencias pueden incidir en tu negocio o en la forma en que tu público se relaciona con él?',
    content: (
      <textarea id='TA_5' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
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
            <UDCollapse summaryClassName='unc-summary module06' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_6'
                data-module='unc-modulo06'>
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
