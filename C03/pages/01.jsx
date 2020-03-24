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
    title: '¿Conoces herramientas para conocer al público al que va dirigida tu oferta creativa y cultural? Escribe cuáles.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Conoces metodologías que puedes utilizar para diseñar una oferta creativa y cultural centrada en el usuario? Escribe cuáles.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M02_IMG15.jpg',
                label: (
                  <div>
                    <h1>El conocimiento del cliente, punto de partida para el desarrollo de
                      oferta creativa y cultural</h1>
                  </div>
                )
              },
              {
                bgImage: './assets/img/M02_IMG18.jpg',
                label: (
                  <div style={{ textalign: 'center' }}>
                    <h3>
                      En las empresas creativas y culturales el conocimiento del público te asegura
                      gran parte del éxito
                    </h3>

                    No basta con tener un buen producto, si no tienes un vasto conocimiento del
                    público al que irán dirigidos estás haciendo la mitad de la tarea par
                    a mantenerte vigente en el sector creativo y cultural.
                    Aquí, te mostramos asuntos a tener en cuenta.
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
            <UDCollapse summaryClassName='unc-summary modulo02' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1'
                data-module='unc-modulo02'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>
              <small style={{
                display: 'block',
                color: '#773939',
                maxwidth: '600px',
                margin: '0 auto'
              }}>>
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
