import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCarousel,
  UDCollapse
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: '¿Sabes qué es innovación? Cuéntanos como la definirías.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />
    )
  },
  {
    title: '¿Sabes en qué aspectos se pueden innovar en un negocio?. Cuéntanos cuáles crees que son.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />
    )
  },
  {
    title: '¿Conoces casos de negocio del sector creativo y cultural en los que la innovación haya posibilitado su sostenibilidad?. Cuéntanos cuáles conoces.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta' />
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M03_IMG38.jpg',
                label: (
                  <div>
                    <h1>Innovación en negocios del sector creativo y cultural</h1>
                  </div>
                )
              },
              {
                bgImage: './assets/img/M03_IMG40.jpg',
                label: (
                  <div style={{ textalign: 'center' }}>
                    <h3>
                      La innovación, aspecto clave para la sostenibilidad económica de tu
                      emprendimiento
                    </h3>

                    La innovación en el sector creativo y cultural impulsa la generación y uso
                    de nuevas ideas, herramientas y tecnologías que representan soluciones para
                    necesidades del mercado o del entorno social, dice el informe mundial de la
                    UNESCO, de 2013.
                  </div>
                )
              }
            ]}
            />
          </div>

          <br /><br />

          <div className='unc-row unc-row-section-title'>
            <h4>Actividad de exploración</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Es muy importante para este proceso que estés consciente de los conocimientos con los
            que inicias; posiblemente has estado relacionados con el arte, la cultura, el
            emprendimiento, la creatividad y la innovación, pero no hemos aterrizado los
            conocimientos que el contexto nos ha brindado sobre estos temas, por esto, antes de
            comenzar con los contenidos de este módulo, queremos que escribas en los campos de
            texto dando respuesta, desde tu experiencia, a las siguientes preguntas:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary modulo03' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1'
                data-module='unc-modulo03'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>
              <small style={{
                display: 'block',
                color: '#773939',
                maxwidth: '600px',
                margin: '0 auto'
              }}>

                Ten presente que las respuestas no son almacenadas por el sistema.
                Por lo tanto deberás llenar las áreas de texto y a continuación
                hacer clic en <i>Descargar tus respuestas</i>.
              </small>

            </div>

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
