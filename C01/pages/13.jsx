import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

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
            <UDCollapse summaryClassName='unc-summary modulo00' panels={panels} />
            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_4'
                data-module='unc-modulo00'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>
              <div
                style={{
                  display: 'block',
                  color: '#773939',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                <small >
                  Ten presente que las respuestas no son almacenadas por el sistema. Por lo tanto
                  deberás llenar las áreas de texto y a continuación hacer clic en <i>Descarga
                  tus respuestas</i>.</small>
              </div>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page >
);

export default CustomPage;
