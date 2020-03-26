import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import FormActivity from '../../components/FormActivity';

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
            <FormActivity panels={panels} />
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
