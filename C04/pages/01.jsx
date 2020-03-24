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
    title: '¿Sabes qué son los tangibles? Escribe cómo los defines.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Sabes cuáles son los intangibles de tu emprendimiento? Escribe cuáles son.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Sabes cómo gestionar tus activos? Escribe de qué manera.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M01_IMG05.jpg',
                label: (
                  <div>
                    <h1>Gestionar tus intangibles, un asunto clave para la sostenibilidad de
                      emprendimientos creativos y culturales</h1>
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG24.jpg',
                label: (
                  <div style={{ textalign: 'center' }}>
                    <h3>
                      Reconocer los intangibles derivados del conocimiento volverlos activos,
                      sistematizarlos y evaluarlos, protegerlos y promoverlos
                    </h3>

                    Este módulo pretende ampliar la mirada sobre la identificación y gestión de
                    los intangibles, lo cual pasa por la sistematización, evaluación , así como
                    su promoción y protección a partir del marco normativo asociado.
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
            que inicias; todos hemos estado relacionados con el arte, la cultura, el
            emprendimiento, la creatividad y la innovación, pero no hemos aterrizado los
            conocimientos que el contexto nos ha brindado sobre estos temas, por esto, antes de
            comenzar con los contenidos de este módulo, queremos que escribas en los campos de
            texto dando respuesta, desde tu experiencia, a las siguientes preguntas:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module01' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1'
                data-module='unc-modulo01'>
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

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
