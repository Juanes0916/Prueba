import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>La evaluación</h5>

          <div className='unc-row unc-padding-1'>
            Al tener claro qué es la sistematización, ahora hay que pasar a un segundo momento:
            <strong> la evaluación</strong>, pero… ¿qué es la evaluación? Esa pregunta la responde,
            en el siguiente videoclip, nuestro experto Juan Felipe Aramburo,
            de <i>Proantioquia</i>:
          </div>

          <Video videoId={315146474} />

          <div className='unc-row unc-padding-1'>
            Es importante que entendamos la <strong>evaluación</strong> como un proceso sistemático
            en el cual se puede  obtener información necesaria sobre los resultados, previstos o
            no, y el funcionamiento de un proyecto, práctica o servicio, para saber en qué medida
            se logran los objetivos y se desarrolla la producción, con el fin de tomar decisiones
            oportunas y reorientar las acciones mediante la modificación de cualquiera de sus
            aspectos.
            <br /><br />

            Para cualquier industria creativa y cultural evaluar es imperativo si pretende tener
            información confiable y verídica para la toma de decisiones que le permitan
            rendimiento, resultados, logro de objetivos o el desarrollo de la producción de un
            bien, servicio o práctica. Así, podrá reconocer el impacto de sus acciones y la
            visibilización de sus productos.
            <br /><br />

            Ya sabiendo la importancia de la evaluación, hay que tener claro que se trata de una
            actividad permanente, que trasciende la actividad puntual y que hace parte de todos
            los ciclos o momentos de los procesos.
            <br /><br />

            Ahora, para qué evaluar. La respuesta nos la da Juan Felipe Aramburo:
          </div>

          <Video videoId={315147834} />

          <div className='unc-row unc-padding-1'>
            La evaluación se ubica en un proyecto o servicio y se plantea en un momento de la
            planeación, en el que diagnosticamos y priorizamos aquellos procesos que se realizarán.
            Luego implementamos las estrategias o acciones, de acuerdo con los recursos
            disponibles, sean humanos, económicos o de infraestructura o si es para la creación,
            la producción, la comercialización o la difusión.
            <br /><br />

            Evaluamos cómo se lograron los objetivos o resultados esperados y, en este momento,
            puedes asociar la evaluación a una revisión valorada del trabajo hecho, pero si
            pensamos la evaluación como un proceso, esta estaría en cada momento o ciclo. Así,
            evaluamos la planeación y la ejecución para tener un control de lo que se está
            realizando y prever las acciones siguientes.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
