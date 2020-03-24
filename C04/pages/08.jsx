import React from 'react'; // eslint-disable-line no-unused-vars
import {
  AudioList,
  ListItem,
  ListSection,
  Page,
  Popup,
  UDScrollbars,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const audios = [
  {
    headerImageSrc: './assets/img/M01_IMG27.jpg',
    sections: [
      {
        title: 'Antes de sistematizar',
        file: './assets/media/m01_11.mp3',
        items: [
          {
            title: 'Antes de sistematizar',
            start: 0,
            end: 5
          },
          {
            title: 'Preguntarnos el porqué',
            start: 6,
            end: 15
          },
          {
            title: 'Preguntas bien realizadas',
            start: 16,
            end: 37
          },
          {
            title: 'Delimitación temporal',
            start: 38,
            end: 49
          },
          {
            title: 'Formatos comunicativos',
            start: 50,
            end: 59
          },
          {
            title: 'Alcance de sistematización',
            start: 60,
            end: 81
          },
          {
            title: 'Recuperar conocimiento en el hacer',
            start: 82,
            end: 105
          }
        ]
      }
    ]
  },
  {
    headerImageSrc: './assets/img/M01_IMG28.jpg',
    sections: [
      {
        title: 'Durante la sistematización',
        file: './assets/media/m01_12.mp3',
        items: [
          {
            title: 'Durante la sistematización',
            start: 0,
            end: 5
          },
          {
            title: 'Fuentes secundarias',
            start: 6,
            end: 20
          },
          {
            title: 'Analizar y depurar información',
            start: 21,
            end: 43
          }
        ]
      }
    ]
  },
  {
    headerImageSrc: './assets/img/M01_IMG29.jpg',
    sections: [
      {
        title: 'Después de la sistematización',
        file: './assets/media/m01_13.mp3',
        items: [
          {
            title: 'Después de la sistematización',
            start: 0,
            end: 17
          },
          {
            title: 'Preguntas de evaluación',
            start: 18,
            end: 33
          }
        ]
      }
    ]
  }
];

const items = [
  {
    title: <h4>Trabajo de campo</h4>,
    content: (
      <div>
        Implica la realización de estrategias, técnicas y herramientas que
        permitan el diálogo y la construcción colectiva entre los actores
        involucrados. Este momento invita a poner las percepciones,
        aprendizajes y conocimientos individuales en un mismo plano para
        conectarlos y generar un nuevo relato, basado en la evidencia, según
        la experiencia individual de cada persona, experiencias todas que serán
        las fuentes primarias.
        <br /><br />

        Algunas estrategias pueden ser entrevistas, grupos focales, talleres
        participativos, diarios de campo, líneas del tiempo y conversatorios,
        todos con herramientas y preguntas sobre qué se hizo, cómo se hizo y
        qué se aprendió, o con momentos, hitos o aprendizajes significativos.
      </div>
    )
  },
  {
    title: <h4>Análisis de resultados</h4>,
    content: (
      <div>
        Fase dedicada a la interpretación de los resultados, para proceder a
        las conclusiones acerca de nuestro proyecto, proceso o práctica. Este
        análisis triangula toda la información recopilada desde la fase
        documental para encontrar similitudes y diferencias y categorizar los
        elementos comunes que responda a las preguntas eje.
      </div>
    )
  },
  {
    title: <h4>Conclusiones</h4>,
    content: (
      <div>
        Surgen de la interpretación que realizamos en la fase anterior. En
        este punto la información se convierte conocimiento; es decir, en un
        resultado tangible que puede ser divulgado, compartido y posible de
        transferir a otras experiencias o contextos, a partir de varias
        estrategias de comunicación.
      </div>
    )
  }
];

const popup = (audio) => {
  Popup.open({
    content: (
      <AudioList headerImageSrc={audio.headerImageSrc}>
        {audio.sections.map((section) => (
          <ListSection
            file={section.file}
            title={section.title}
          >
            {section.items.map((item) => (
              <ListItem
                title={item.title}
                start={item.start}
                end={item.end}
              />
            ))}
          </ListSection>
        ))}
      </AudioList>
    )
  });
};

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Cómo sistematizar?</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, entendiendo la teoría, necesitamos ponerla en práctica, es decir, necesitamos
            saber cómo sistematizar. Al respecto, Juan Felipe tiene una recomendación.
          </div>

          <Video videoId={315143744} />

          <div className='unc-row unc-padding-1'>
            Teniendo estas claridades, debemos reconocer cómo se llevan a cabo los procesos de
            sistematización, sin antes advertir que cada uno es único y contextualizado de
            acuerdo con quién, cuándo y qué propósitos le demos. También, hay múltiples formas
            en las que se han realizado los procesos de sistematización, pero partiremos por
            entender unos momentos que son comunes y en ellos unas fases o pasos a tener en cuenta:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los botones y profundiza en las fases de la sistematización</small>
          </div>

          <div className='unc-row row unc-equal-cols'>
            <div className='col-sm-4 unc-padding-1'>
              <div className='unc-row-card' style={{ height: '650px' }}>
                <div className='unc-row-card-image'>
                  <img src='./assets/img/M01_IMG27.jpg' width='100%' />
                </div>
                <h5 className='text-left'>Antes</h5>
                <div className='unc-padding-1'>
                  <div>
                    Marcar una ruta de inicio que debemos planear para darle un propósito o
                    un norte al proceso.
                  </div>
                  <button className='unc-button' onClick={() => popup(audios[0])}>
                    <span className='btn-label'><i className='icon-volume-2'></i></span>
                    Escuchar audios
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='unc-row-card' style={{ height: '650px' }}>
                <div className='unc-row-card-image'>
                  <img src='./assets/img/M01_IMG28.jpg' width='100%' />
                </div>
                <h5 className='text-left'>Durante</h5>
                <div className='unc-padding-1'>
                  <div>
                    Nos referimos al hacer de la sistematización, la puesta en marcha que puede
                    implicar varias fases en su interior
                  </div>

                  <button className='unc-button' onClick={() => popup(audios[1])}>
                    <span className='btn-label'><i className='icon-volume-2'></i></span>
                    Escuchar audios
                  </button>
                  <button className='unc-button' onClick={() => Popup.open(items[0])}>
                    <span className='btn-label'><i className='icon-speech'></i></span>
                    Trabajo de campo
                  </button>
                  <button className='unc-button' onClick={() => Popup.open(items[1])}>
                    <span className='btn-label'><i className='icon-speech'></i></span>
                    Análisis de resultados
                  </button>
                  <button className='unc-button' onClick={() => Popup.open(items[2])}>
                    <span className='btn-label'><i className='icon-speech'></i></span>
                    Conclusiones
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='unc-row-card' style={{ height: '650px' }}>
                <div className='unc-row-card-image'>
                  <img src='./assets/img/M01_IMG29.jpg' width='100%' />
                </div>
                <h5 className='text-left'>Después</h5>
                <div className='unc-padding-1'>
                  <div>
                    Lo entendemos como la difusión, socialización, promoción, intercambio,
                    circulación, comercialización o transferencia de ese conocimiento desde
                    diferentes formatos, como publicaciones, videos, multimedias,
                    plataformas web, espacios de interlocución o difusión, entre otros.
                  </div>
                  <button className='unc-button' onClick={() => popup(audios[2])}>
                    <span className='btn-label'><i className='icon-volume-2'></i></span>
                    Escuchar audios
                  </button>
                </div>
              </div>
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
