import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDCarousel,
  UDCollapse,
  UDScrollbars
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: '¿Sabes qué es una tendencia? Escribe tu definición.',
    content: (
      <textarea id='TA_2_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Sabes cómo las tendencias pueden enriquecer tu negocio? Escribe de qué forma pueden hacerlo.',
    content: (
      <textarea id='TA_2_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Sabes cómo estar al tanto de las tendencias que pueden contribuir a tu negocio? Escribe la forma en que lo haces.',
    content: (
      <textarea id='TA_2_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  },
  {
    title: '¿Conoces alguna tendencia importante que le sume a tu negocio? Escribe de qué se trata.',
    content: (
      <textarea id='TA_2_before' cols='30' rows='10' placeholder='Ingresa tu respuesta'></textarea>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M06_IMG07.jpg',
                label: (
                  <h1>Tendencias y el desarrollo de negocios en el sector creativo y cultural</h1>
                )
              },
              {
                bgImage: './assets/img/M06_IMG06.jpg',
                label: (
                  <div>
                    <h3>Conocer cómo se espera que se comporte el mercado y sus actores en el
                    futuro, te da la posibilidad de preparar tu negocio
                    </h3>
                    En este módulo encontrarás tendencias relacioandas con el comportamiento del
                    mercado. Te invitamos a conocerlas, explorarlas y considerarlas al momento de
                    desarrollar negocios en el sector creativo y cultural.
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
            Es muy importante para este proceso que estés consciente de los conocimientos con
            los que inicias; posiblemente has estado relacionado con el arte, la cultura, el
            emprendimiento , la creatividad y la innovación, pero no has aterrizado los
            conocimientos que el contexto te ha brindado sobre estos temas, por esto, antes de
            comenzar con los contenidos de este módulo, queremos que escribas en los campos de
            texto dando respuesta, desde tu experiencia, a las siguientes preguntas:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module06' panels={panels} />

            <div className='text-center'>
              <button className='unc-button button-form' type='button' data-content-id='Collapse_1'
                data-module='unc-modulo06'>
                <span className='btn-label'><i className='icon-speech'></i></span>
                Descarga tus respuestas
              </button>

              <small style={{
                display: 'block',
                color: '#773939',
                maxwidth: '600px',
                margin: '0 auto;'
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
