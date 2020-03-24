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
    title: 'En tu opinión, ¿Qué crees que es implicar a tu público?. Escribe tus ideas',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Qué sabes de como se relacionan la implicación de públicos con su captación y fidelización?. Escribe tus ideas',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿En qué medida crees que el precio incide en la impliación de tus públicos?. Escribe tus ideas.',
    content: (
      <textarea id='TA_1_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M04_IMG35.jpg',
                label: (
                  <div>
                    <h1>Implicar tu público, una forma de propiciar su captación y fidelización</h1>
                  </div>
                )
              },
              {
                bgImage: './assets/img/M04_IMG35.jpg',
                label: (
                  <div>
                    <h3>
                      No solo es importante conocer el público al que va dirigida tu oferta,
                      para lograr un relacionamiento que te permita enriquecer tu negocio, hay
                      que ir mucho más allá
                    </h3>

                    En este módulo conocerás sobre elementos claves a tener en cuenta para
                    implicar tu público y propiciar su captación y fidelización. Conocerás sobre
                    la implicación de públicos. Además este módulo te mostrará  cómo el precio se
                    relaciona con el desarrollo de públicos y conocerás aspectos importantes para
                    su definición (cuánto cobrar) y forma de pago (cómo cobrar).
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
            que inicias; posiblemente has estado relacionado con el arte, la cultura, el
            emprendimiento , la creatividad y la innovación, pero no has aterrizado los
            conocimientos que el contexto te ha brindado sobre estos temas, por esto, antes de
            comenzar con los contenidos de este módulo, queremos que escribas en los campos de
            texto dando respuesta, desde tu experiencia, a las siguientes preguntas:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module04' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1'
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
                deberás llenar las áreas de texto y a continuación hacer clic en
                <i>Descargar tus respuestas</i>.
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
