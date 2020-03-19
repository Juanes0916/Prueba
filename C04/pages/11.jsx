import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Cómo evaluar?</h5>

          <div className='unc-row unc-padding-1'>
            Con este contexto, lo que debes saber enseguida es cómo se evalúa y, para que lo
            entiendas mejor, te ofrecemos la explicación de Juan Felipe:
          </div>

          <Video videoId={315149412} />

          <div className='unc-row unc-padding-1'>
            Los indicadores son los instrumentos que usamos en este proceso; es decir, los
            criterios de medición que permiten valorar, analizar y evaluar el comportamiento
            y la dinámica de las variables; esto es, las características, componentes y elementos
            que constituyen el objetivo de los planes, programas y proyectos, según plantea el
            investigador Víctor Manuel Quintero Uribe.
          </div>

          <DegrantImage url='./assets/img/M01_IMG31.jpg' inverse>
            También se puede considerar la evaluación, según el Banco de la República, como “la
            medición operativa o cuantificación de las variables teóricas”, en el sentido de que
            cada dimensión de un proyecto que se estudia puede convertirse en un indicador, al
            convertirse en un criterio que nos servirá para valorar si las acciones
            están encaminadas a nuestros propósitos.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Los indicadores los hemos asociado desde lo medible, es decir, de manera cuantitativa,
            porque nos arrojan datos importantes sobre aquello que estemos realizando, pero en la
            actualidad existe la tendencia de evaluar con indicadores cualitativos, que describen
            atributos, cualidades o características.
            <br /><br />

            En este caso, proponemos hablar mejor de indicadores cuanti-cualitativos que conjuguen
            lo cuantitativo, al permitir “valorar qué, cuánto y cómo se hará, se hace y se hizo,
            recogiendo datos y opiniones sobre los productos, efectos e impactos que los planes,
            programas y proyectos culturales tienen sobre creadores, público y sociedad en
            general”, pero que incorporen también lo cualitativo, “que nos permite comprender los
            atributos, las cualidades, las características, las bondades y limitantes de lo que se
            está haciendo y lo que se hizo, recogiendo las opiniones de oferentes y demandantes
            sobre los bienes y servicios culturales promovidos”, agrega Quintero.
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
