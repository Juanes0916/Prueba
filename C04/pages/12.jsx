import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Criterio que se aplica para elaborar un indicador</h5>

          <div className='unc-row unc-padding-1'>
            Luego de haber entendido estos conceptos básicos y su implementación en el sector
            creativo y cultural, pueden surgirte preguntas sobre cómo se lleva a la práctica y,
            para ellas, te daremos varios ejemplos que puedan ilustrar mejor el desarrollo
            metodológico de la evaluación.
            <br /><br />

            Uno de los criterios es el indicador AMORE (Asequible, Medible, Oportuno, Relevante
            y Específico).
            <br /><br />

            <div className='text-center' style={{ maxwidth: '500px' }}>
              <img src='./assets/img/M01_IMG34.png' width='100%' />
            </div>
            <br /><br />
            Es decir, que sea posible y alcanzable, que tengamos facilidad para recolectar la
            información con los métodos y costos que implique; que pueda ser medido y cuantificado
            o descrito; que sea realista, claro, concreto y consensuado o aceptado (Roselló, 2011).
            <br /><br />

            De acuerdo con lo anterior, es importante que dispongamos de instrumentos para obtener
            la información, los cuales pueden ser registros (censos, estadísticas existentes,
            actas de reuniones, documentos de trabajo de orden interno) generados por la propia
            empresa o externos; mediciones que se pueden aplicar a las prácticas, proyectos,
            actividades o productos; encuestas de opinión, percepción, muestreos que permitan
            arrojar información; entrevistas individuales o grupales que aporten información
            cualitativa y complementen los datos cuantitativos.
            <br /><br />

            Un ejemplo en el ámbito internacional como lo realiza la UNESCO con indicadores para la
            medición de la actividad cultural (Echavarría, 2018) que le permiten tener un
            conocimiento sobre la producción y consumo de servicios culturales, así como el valor
            público e impacto en la economía y desarrollo de un país, y de esta manera orientar
            la financiación hacia este Sector. Un ejemplo de indicadores desde el caso de Australia
            es:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '900px' }}>
              <img src='./assets/img/M01_IMG35.png' width='100%' />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Para el caso colombiano retomaremos la batería de indicadores creados por el Banco de
            la República (2014) para medir el efecto e impacto de su política cultural. Ellos
            partieron por identificar dimensiones (para este caso ciudadanía) y en ellas variables
            estructuradas desde categorías y criterios, como los fueron:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '900px' }}>
              <img src='./assets/img/M01_IMG36.png' width='100%' />
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='col-sm-6 unc-padding-1'>
              <strong>Para la construcción de estos indicadores, ellos definieron de cada variable
              un atributo o rasgo medible que sirvió para definir qué información requerían y
              dónde buscarla</strong> (revisión bibliográfica, de informes o planes de trabajo,
              entre otros), <strong>así como la elaboración de los instrumentos necesarios para
              recopilar la información</strong> (encuestas, grupos de opinión o discusión, entre
              otros) con actores internos y externos, para luego analizarla con base en análisis
              estadísticos; el más común es darle un valor a cada variable y atributo, y
              puntuarla en escala tipo Linkert que evalúa de 1 a 5 (desde completa o totalmente
              positivo siendo 5, parcial positivo 4, nulo 3, parcial negativo 2 y completa o
              totalmente negativo puntuado a 1), estas puntuaciones se le otorgan a cada atributo
              y se dividen por el número de ítems recogiendo un promedio o porcentaje estadístico
              que da cuenta de cada variable. (Banco de la República, 2014).
            </div>

            <div className='col-sm-6 unc-padding-1'>
              Ahora bien, si la evaluación la entendemos como un proceso continuo que abarca todo
              el proyecto, práctica o servicio en la empresa, <strong>los indicadores que
              utilizamos tienen diferentes definiciones de acuerdo con el momento que requerimos
              evaluar, así podemos encontrar indicadores ex-ante o de contexto</strong>; de gestión
              o proceso, y de resultado, ex-post o impacto.
              <br /><br />

              <strong>En el momento Ex-ante o de contexto, evaluamos el diagnóstico, ¿El punto de
              partida del proyecto era correcto?</strong> Miraremos hasta qué punto hicimos un buen
              análisis de la realidad en la que se inscribe el proyecto y si llegamos a un buen
              diagnóstico que nos permita construir objetivos y orientar la planeación e
              implementación del bien, servicio o producto (Roselló, 2011).
            </div>
          </div>


          <div className='unc-row unc-padding-1'>
            <div className='text-center' style={{ maxwidth: '900px' }}>
              <img src='./assets/img/M01_IMG37.png' width='100%' />
            </div>
            <br /><br />

            Si el interés es realizar un seguimiento y monitoreo al proyecto u empresa, se tendrán
            indicadores de gestión y de resultado. <strong>Los indicadores de gestión te permitirán
            tener información precisa sobre el proceso, es decir, el funcionamiento, de acuerdo con
            lo previsto, de la producción o implementación del bien o servicio</strong>; para esto
            tendremos en cuenta los Indicadores de Recursos, Costos y Tiempos, que dan cuenta de la
            utilización y desempeño de todos los elementos, actores, recursos financieros y tiempos
            que intervienen en cada proceso cultural, es decir, miden el nivel, cantidad y calidad
            de los elementos requeridos y utilizados en cada actividad para la obtención de los
            productos y/o servicios culturales (Quintero, 2001). <strong>En este grupo también
            están los Indicadores de Proceso que dan cuenta de las actividades realizadas y las
            metas intermedias cumplidas, así como de los resultados preliminares e
            intermedios</strong>, en diferentes etapas o momentos de ejecución, midiendo el
            cumplimiento en la realización del conjunto de actividades, y su grado de calidad, que
            se han realizado para tratar de alcanzar la misión y el objetivo
            propuesto. (Quintero, 2001).

            <br /><br />
            <div className='text-center' style={{ maxwidth: '900px' }}>
              <img src='./assets/img/M01_IMG38.png' width='100%' />
            </div>
            <br /><br />

            <strong>Los indicadores de resultado te servirán para evaluar hasta qué punto se han
            obtenido los objetivos/resultados deseados, es decir la eficacia, desde dos instancias:
            la primera será el producto, los cuales reflejan los resultados concretos de las
            actividades desarrolladas a partir de insumos disponibles y de los procesos
            adelantados</strong>, y si reflejan el cumplimiento de los propósitos establecidos en
            la misión y en los objetivos adelantados por la organización cultural(Quintero, 2001);
            en segunda instancia, los indicadores de efecto, que son a mediano plazo, identifican
            la contribución de estos a los proyectos, políticas o planes de la empresa o del sector
            de acuerdo con la valoración de los usuarios, clientes o beneficiarios de los bienes y
            servicios culturales ofrecidos.(Quintero, 2001).
            <br /><br />

            <strong>Los indicadores de impacto, como su nombre lo indican, pueden darte un panorama
            de la repercusión del proyecto a mediano y largo plazo y a gran escala</strong>, es
            decir, el aporte del bien, servicio o proyecto al desarrollo humano, la calidad de vida
            y el bienestar de la comunidad, como fin último del sector cultural. (Quintero, 2001).

            <br /><br />
            <img src='./assets/img/M01_IMG39.png' width='100%' data-max-width='900' />
            <br /><br />

            Como quedó claro, <strong>la tendencia hoy es a utilizar indicadores
            cuali-cuantitativos que no solo te permitan medir datos sino también percepciones sobre
            aquello que queremos evaluar; su uso depende del momento o ciclo del proyecto o
            práctica que estemos evaluando; así tendremos indicadores para el diagnóstico, la
            planeación, la ejecución y la evaluación de manera que tenga una información completa
            confiable y rigurosa</strong>. Ahora bien, ya tienes un conocimiento general sobre el
            tipo de indicadores y los momentos en los que pueden aplicarse, así como su proceso de
            construcción. Si deseas acercarte a otras experiencias, el documento “Índices de
            impacto cultural” Antecedentes, metodología y resultados del Banco de la República
            (2014) presenta algunos referentes que pueden ser útiles a la hora de entender de
            manera aplicada la construcción de indicadores y los resultados de
            evaluaciones, especialmente de efecto e impacto.
            <br /><br />

            Como conclusión podemos decirte lo siguiente: si sabes que el conocimiento es un bien
            que le otorga valor a la organización u empresa, la sistematización y la evaluación son
            procesos fundamentales que le otorgan capital.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
