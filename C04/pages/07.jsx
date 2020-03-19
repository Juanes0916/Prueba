import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCarousel,
  UDCollapse,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: 'Centrada en el aprendizaje',
    content: (
      <div className='unc-padding-1'>
        Está centrada en el aprendizaje y tiene el propósito de retroalimentar al
        equipo responsable de un proyecto o iniciativa, con el fin de comprender las
        prácticas organizacionales y proveer insumos para la planificación
        estratégica y la mejora continua.
      </div>
    )
  },
  {
    title: 'Transforma la práctica',
    content: (
      <div className='unc-padding-1'>
        Mejora y transforma la práctica a partir de un proceso reflexivo que lleva a
        implementar nuevas posibilidades expresivas y diversas alternativas, pues
        contribuye a la reflexión y transformación de la propia práctica, en la
        medida en que hay un conocimiento útil para la toma de decisiones en torno
        del mejoramiento o aprovechamiento de los recursos que la potencien.
      </div>
    )
  },
  {
    title: 'Transfiere conocimiento',
    content: (
      <div className='unc-padding-1'>
        Transfiere conocimiento (intercambio y adaptación) y comparte aprendizajes
        con experiencias similares, para ir más allá de un intercambio anecdótico,
        como dice Oscar Jara, educador y sociólogo peruano‐costarricense, director
        general del Centro de Estudios y Publicaciones Alforja, en Costa Rica, y
        coordinador del Programa Latinoamericano de Apoyo a la Sistematización de
        Experiencias del Consejo de Educación de Adultos de América Latina (CEAAL).
      </div>
    )
  },
  {
    title: 'Facilita visibilidad',
    content: (
      <div className='unc-padding-1'>
        Facilita la visibilidad y la comunicación del conocimiento para incidir en
        políticas y planes a partir de aprendizajes concretos que provienen de
        experiencias reales; es decir, posibilita formular propuestas
        de mayor alcance, basadas en lo que sucede en el terreno.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>La sistematización</h5>

          <div className='unc-row unc-padding-1'>
            Ahondemos ahora en la sistematización y escuchemos la explicación de Juan Felipe:
          </div>

          <Video videoId={315142806} />

          <div className='unc-row unc-padding-1'>
            Entonces, apostarle a un proceso de sistematización nos permite:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M01_IMG06.jpg',
                label: (
                  <div>
                    Encontrar el conocimiento que se ha adquirido en el hacer, es decir,
                    el saber-hacer (<i>know-how</i>).
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG06.jpg',
                label: (
                  <div>
                    Crear memoria en una organización, lo cual permite identificar las formas de
                    trabajo.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG06.jpg',
                label: (
                  <div>
                    Identificar mejores recursos para incorporarlos a los nuevos proyectos y
                    servicios y convertirse en referentes para otros procesos similares.
                  </div>
                )
              }
            ]}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            Por medio de la sistematización se identifica el conocimiento que se convierte, así,
            en un bien o producto posible de ser capitalizado o protegido mediante algunos de los
            mecanismos de propiedad industrial, los cuales serán nombrados más adelante.
            <br /><br />

            También posibilita generar preguntas autoevaluadoras y cuestionamientos desde el
            diálogo reflexivo en equipo, que lleven a comprender los procesos internos,
            cómo se están desarrollando los servicios o productos y encontrar elementos
            innovadores.
            <br /><br />

            En este caso, son pertinentes preguntas como:

            <div className='text-center'>
              <img src='./assets/img/M01_IMG51.jpg' />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            En este sentido, queda claro que la sistematización tiene algunos postulados:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module01' panels={panels} />
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
