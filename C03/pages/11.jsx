import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCarousel,
  Popup,
  AudioList,
  ListSection,
  ListItem
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import ButtonPopup from '../../components/ButtonPopup1';

const audios = [
  {
    headerImageSrc: './assets/img/M03_IMG26.jpg',
    sections: [
      {
        title: '¿Quién ha utilizado Design thinking para crear o mejorar su oferta?',
        file: './assets/media/m02_06.mp3',
        items: [
          {
            title: 'Instituto de Artes de Minneapolis (MIA)',
            start: 0,
            end: 73
          },
          {
            title: 'Big Brothers Big Sisters',
            start: 74,
            end: 142
          }
        ]
      }
    ]
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
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Design Thinking</h5>

          <div className='unc-row unc-padding-1'>
            La primera de ellas, <strong>Design Thinking</strong> (en español, <i>Pensamiento de
            Diseño</i>). Tim Brown, diseñador industrial inglés, presidente de IDEO (compañía de
            diseño global) y creador de la herramienta, dice que esta metodología “es un enfoque de
            innovación centrado en el ser humano, que se nutre del conjunto de herramientas del
            diseñador para integrar las necesidades de las personas, las posibilidades de la
            tecnología y los requisitos para el éxito empresarial”.
            <br /><br /><br />

            <div className='text-center' style={{ maxwidth: '480px' }}>
              <img src='./assets/img/M02_IMG40.jpg' />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            El <strong>Design Thinking</strong> tiene cinco características:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M03_IMG05.jpg',
                label: (
                  <div>
                    <h5>Generación de empatía</h5>

                    La empatía es la capacidad de percibir y comprender lo que otro ser puede
                    sentir. En nuestro proceso debemos entender los problemas, necesidades y
                    deseos de los usuarios y tenerlos en cuenta en todas las fases de nuestro
                    proyecto.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M03_IMG05.jpg',
                label: (
                  <div>
                    <h5>Experimentación</h5>

                    Para experimentar se debe dejar el miedo al error, la constante
                    experimentación en el proceso permitirá la evolución de nuestras ideas. Todo
                    el proceso de basar en crear ideas e ir a experimentar con nuestro usuario.
                    Así iremos perfeccionando y entendiendo mejor a dónde queremos llegar.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M03_IMG05.jpg',
                label: (
                  <div>
                    <h5>Hazlo visual</h5>
                    Plasma toda la información en imágenes, dibuja, haz recortes, usa el color
                    para transmitir emociones. Ejercita la creatividad. Importa la estética.
                    Nos debemos olvidar de largos textos y aprender a captar nuestras ideas en
                    citas cortas, que contengan la esencia de lo que queremos recordar.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M03_IMG05.jpg',
                label: (
                  <div>
                    <h5>Trabajo en equipo</h5>

                    Mientras más perspectivas se tengan en un proyecto el resultado va a ser
                    mejor. Integrar un equipo multidisciplinario con personas que tengan
                    diferentes habilidades, profesiones, percepciones es una de las mejores
                    estrategias que se puede hacer. Se deben valorar las singularidades de cada
                    miembro y el aporte individual que puede hacer al proyecto.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M03_IMG05.jpg',
                label: (
                  <div>
                    <h5>Recursividad</h5>
                    No necesitamos materiales difíciles de acceder, papel, marcadores, pegante y
                    cartón son más que suficientes para probar todas nuestras ideas. Reúsemos los
                    materiales que tengamos y si necesitamos un elemento muy específico pongamos
                    a prueba nuestra creatividad y que no se convierta en un obstáculo o en
                    una inversión económica difícil de hacer.
                  </div>
                )
              }
            ]}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            Las etapas del <i>Design Thinking</i> se muestran en la siguiente gráfica, haz clic
            en sus componentes y conoce más sobre cada etapa:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los íconos para ver la descripcion de cada etapa</small>
          </div>

          <div className='row unc-row-icon-title'>
            <ButtonPopup
              className='col-sm-3 col-sm-offset-1 unc-padding-1'
              buttonClassName='pecc-935 unc-fill unc-clickeable'
              popup={{
                title: (<h5>Empatizar</h5>),
                content: (
                  <div>
                    El proceso comienza con una profunda comprensión de las necesidades de los
                    usuarios, implicados en la solución que les desarrollamos, así como de su
                    entorno.
                  </div>
                )
              }}
              downTitle='Empatizar'
            />
            <ButtonPopup
              className='col-sm-2 unc-padding-1'
              buttonClassName='pecc-94e unc-fill unc-clickeable'
              popup={{
                title: (<h5>Definir</h5>),
                content: (
                  <div>
                    Reúne la información recopilada en la fase anterior, hace una selección para
                    resaltar y sintetizar la información relevante, procesa e identifica problemas
                    cuyas soluciones serán clave para obtener un resultado con impacto, todo con
                    base en la necesidad del usuario.
                  </div>
                )
              }}
              downTitle='Definir'
            />
            <ButtonPopup
              className='col-sm-2 unc-padding-1'
              buttonClassName='pecc-94f unc-fill unc-clickeable'
              popup={{
                title: (<h5>Idear</h5>),
                content: (
                  <div>
                    En esta etapa la creatividad juega un papel importante, aún en situaciones
                    en las que se requiere solo plasmar las ideas más irrisorias o más ocurrentes.
                    Comienza a buscar alternativas de ver el problema y sesiona por ideas, para
                    estimular el pensamiento libre y ampliar el espacio problemático.
                  </div>
                )
              }}
              downTitle='Idear'
            />
            <ButtonPopup
              className='col-sm-2 unc-padding-1'
              buttonClassName='pecc-948 unc-fill unc-clickeable'
              popup={{
                title: (<h5>Prototipar</h5>),
                content: (
                  <div>
                    Vuelve las ideas realidad, por medio de modelos que las hacen palpables y
                    ayudan a visualizar las posibles soluciones, debido a que pone elementos que
                    mejoran o refinan eso que queremos alcanzar antes de llegar a un resultado
                    final.
                  </div>
                )
              }}
              downTitle='Prototipar'
            />
            <ButtonPopup
              className='col-sm-2 unc-padding-1'
              buttonClassName='pecc-97e unc-fill unc-clickeable'
              popup={{
                title: (<h5>Probar</h5>),
                content: (
                  <div>
                    Los prototipos se pueden compartir y probar dentro del equipo de trabajo, en
                    otros departamentos o en un pequeño grupo de personas fuera del equipo de
                    diseño. Esta es una fase experimental y el objetivo es identificar la mejor
                    solución posible para cada uno de los problemas identificados.
                  </div>
                )
              }}
              downTitle='Probar'
            />
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='text-center'>
              <button className='unc-button' onClick={() => popup(audios[0])}>
                <span className='btn-label'><i className='icon-volume-2'></i></span>
                ¿Quién ha utilizado Design thinking para crear o mejorar su oferta?
              </button>
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
