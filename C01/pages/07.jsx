import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCollapse,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const panels = [
  {
    title: '¿Cuáles son las palabras clave de tu proyecto?',
    content: (
      <div className='unc-row row unc-equal-cols'>
        <div className='col-md-7 unc-padding-1'>
          Plantear 4 palabras claves que describan lo que quieres hacer es siempre
          útil para darle claridad al proyecto. Debes concertar con tu equipo de
          trabajo cuáles palabras describen lo que buscan hallar.
            <br /><br />

          <strong>Para mejorar la visualización del trabajo, y favorecer la
          constante reflexión, te sugerimos construir tu caracterización con notas
          adhesivas</strong>. En cada una de ellas puedes poner una (ojalá solo
          una) palabra clave. <strong>Juega a construir agrupamientos, e incluso a
          fusionar palabras</strong>. Mantener estas construcciones a lo largo del
          proceso será una inspiración permanente para mantener las estrategias
          acotadas a tus verdaderos intereses y motivaciones.
        </div>
        <div className='col-sm-5 unc-padding-1'>
          <div
            className='unc-row-bgfull'
            style={{ backgroundImage: 'url(./assets/img/M01_IMG13.jpg)' }}
          />
        </div>
      </div>
    )
  },
  {
    title: '¿Cuáles fueron tus ideas iniciales?',
    content: (
      <div className='row'>
        <div className='col-sm-6 unc-padding-1'>
          Antes de tener tu versión final de tu propuesta, se te ocurrieron algunas
          preguntas e ideas interesantes que poco a poco fuiste estructurando.
          Escribe algunas de ellas para tener presente cómo fue tomando forma tu
          propuesta.
          <br /><br />

          Recuerda que las empresas de conocimiento no venden productos por
          unidades. Lo que venden ante todo son ideas, por eso su capital
          intelectual es su principal activo. Para ampliar la discusión te
          proponemos esta charla TED en la que Damian Kulash nos muestra el proceso
          creativo de la banda, y cómo descubrir ideas maravilloso.
        </div>
        <div className='col-sm-6 unc-padding-1'>
          <div className='unc-row unc-row-prompt'>
            <a
              href='https://www.ted.com/talks/ok_go_how_to_find_a_wonderful_idea?language=es#t-869171'
              className='pecc-108 unc-fill unc-clickeable' target='_blank'
            />
            <div className='unc-prompt-title'>Video recomendado</div>
            <div className='unc-prompt-description'>Cómo encontrar una idea maravillosa</div>
            <div className='unc-prompt-autor'>OK Go</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: '¿Cuál es el objetivo de tu trabajo?',
    content: (
      <div className='row unc-equal-cols'>
        <div className='col-sm-6 unc-padding-1'>
          Recuerda la importancia de que este objetivo sea claro, medible y cercano
          a tu contexto. Los proyectos no siempre plantean soluciones inmediatas,
          requieren un proceso ordenado para obtener soluciones y avances.
          <br /><br />

          En el sector cultural como en ningún otro, tenemos que hacer renuncias.
          Buena parte de los procesos que desarrollamos pueden ser complementados,
          profundizados o mejorados con la aplicación de nuevos formatos y el
          desarrollo de más actividades. Sin embargo, tener los objetivos claros
          nos permite hacer solo las actividades que aporten a estos propósitos.
          Recuerda que cada proyecto desencadena otras posibilidades y que no todo
          debe ser resuelto con una única intervención.
        </div>
        <div className='col-sm-6 unc-padding-1'>
          <div
            className='unc-row-bgfull'
            style={{ backgroundImage: 'url(./assets/img/M01_IMG41.jpg)' }}
          />
        </div>
      </div>
    )
  },
  {
    title: '¿Por qué es importante mi proyecto o actividad?',
    content: (
      <div className='unc-row row unc-equal-cols'>
        <div className='col-md-6 col-sm-5 unc-padding-1'>
          Nunca dejes de lado la razón por la que quieres desarrollar tu proyecto
          o proceso. Esto te permitirá entender la importancia del mismo y en qué
          aporta a tu realidad como gestor o creativo.
          <br /><br />

          Tener clara la utilidad, no en términos económicos o financieros, sino en
          función de lo que produce en las comunidades o grupos de interés con los
          que trabajas permite “justificar” tus acciones. Esto es fundamental,
          sobre todo cuando tu propuesta requiere de financiadores.
        </div>
        <div className='col-md-6 col-sm-5 unc-padding-1'>
          <div
            className='unc-row-bgfull'
            style={{ backgroundImage: 'url(./assets/img/M01_IMG42.jpg)' }}
          />
        </div>
      </div>
    )
  },
  {
    title: '¿Cuáles son los antecedentes de mi proyecto?',
    content: (
      <div className='unc-row row unc-equal-cols'>
        <div className='col-md-6 col-sm-5 unc-padding-1'>
          Define que se ha desarrollado previamente sobre tu proyecto, lee y conoce
          las anteriores aproximaciones, qué ha pasado antes y cómo se ha intentado
          dar solución a la problemática que estás trabajando.
          <br /><br />

          Es fundamental que sepas que en las comunidades con las que quieres
          trabajar ya se han adelantado otras acciones. Reconoce los aciertos y
          dificultades que han existido. Esto puede ayudar a adaptar tus
          metodologías y garantizar mejores “salidas” de tu proceso de intervención
          o interacción.
        </div>
        <div className='col-md-6 col-sm-5 unc-padding-1'>
          <img src='./assets/img/M01_IMG43.jpg' />
        </div>
      </div>
    )
  },
  {
    title: '¿Cuáles son tus recursos?',
    content: (
      <div className='unc-row row unc-equal-cols'>
        <div>
          Siempre ten en cuenta con quienes y con qué cuentas para lograr el
          objetivo que te has propuesto.
          <br /><br />

          Es fundamental que reconozcas que no solo existen los recursos
          financieros (dinero), consumibles (materiales) e infraestructura. El
          principal recurso, como ya hemos dicho, es el capital intelectual y éste
          está asociado a las personas de tu equipo, y a las ideas y procesos que
          los mismos participantes puedan desarrollar.
        </div>
        <div className='col-md-6 col-sm-5 unc-padding-1'>
          <img src='./assets/img/M01_IMG45.jpg' />
        </div>
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Mide el impacto social de tu emprendimiento</h5>

          <div className='unc-row unc-padding-1'>
            Ahora bien, a juicio de Juan Felipe no basta con tener claro tus objetivos, en la tarea
            de la medición del impacto social hay que hacer lo que él llama la trazabilidad de tus
            objetivos.
          </div>

          <DegrantImage url='./assets/img/M00_IMG15.jpg'>
            La trazabilidad, que es una evaluación integral, una mediación de los objetivos, que
            como ejercicio de seguimiento, puede ser orientadora, en especial, si se hace de dos
            maneras: cuantitativa y cualitativa; es decir, si mide el impacto.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Es importante tener claras las respuestas a los siguientes cuestionamientos para hacer
            trazabilidad:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary modulo00' panels={panels} />
          </div>

          <div className='unc-row unc-padding-1'>
            Si hay claridad en los objetivos, agrega Juan Felipe, habrá claridad en cómo
            alcanzarlos; es decir, si el qué está claro, el cómo sale por añadidura, siempre y
            cuando entre las tareas encomendadas aparezca la evaluación como elemento fundamental
            para saber si las metas se están cumpliendo o para corregir si el rumbo se desvió:
          </div>

          <Video videoId={315297895} />

          <DegrantImage url='./assets/img/M00_IMG12.jpg' inverse>
            En el módulo <a href='/mis-contenidos/portada/52' target='_blank'>“Gestionar los
            intangibles, un asunto clave para la sostenibilidad económica de tu
            emprendimiento”</a>, podrás conocer más sobre la sistematización y la evaluación y
            otras herramientas que pueden ayudarte en la gestión de los negocios creativos y
            culturales.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Para esto es importante aplicar algunos instrumentos y estrategias que permitan
            verificar cómo se comportan los tres componentes de los objetivos (<strong>qué, cómo y
            para qué</strong>) a lo largo del tiempo:
          </div>

          <Video videoId={315303848} />

          <DegrantImage url='./assets/img/M00_IMG04.jpg'>
            La trazabilidad de los objetivos te permitirá evidenciar los resultados de tu negocio o
            emprendimiento, lo cual es en insumo clave para resaltar en tu oferta, eso sí, teniendo
            en cuenta el público al que quieres comunicarle esos resultados.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            En este sentido y, en el caso puntual de tener interés por resaltar los resultados que
            en términos de impacto social genera tu negocio o emprendimiento, La Casa de Carlota
            nos cuenta su experiencia al llegar al cliente resaltando el impacto social que
            generan, y la importancia de considerar y conocer el público al que queremos
            comunicarle nuestro impacto social.
          </div>

          <Video videoId={315271910} />

          <DegrantImage url='./assets/img/M00_IMG10.jpg' inverse>
            Te invitamos a que veas nuestro módulo
            <a href='/mis-contenidos/portada/51' target='_blank'>“Conocimiento del cliente”</a>,
            en el que podrás explorar aspectos relevantes sobre la comprensión del cliente, con lo
            cual podrás reflexionar sobre la manera más pertinente de hacer visible a tu cliente,
            el impacto social que generas.
          </DegrantImage>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
