import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';
import * as d3 from 'd3';

import Header from '../components/Header';
import PieButtons from '../../components/PieButtons';

const popups = [
  {
    title: (<h4>¿A qué se refiere?</h4>),
    content: (
      <div>
        La innovación social se refiere a una acción endógena o intervención exógena de
        desarrollo social, por medio de un cambio original/novedoso, en la prestación
        de un servicio o en la producción de un bien, que logra resultados positivos
        frente a una o más situaciones de pobreza, marginalidad, discriminación, exclusión
        o riesgo social y que tiene potencial de ser replicable o reproducible, según
        describe el filósofo chileno Martín Hopenhayn, exdirector de la División de
        Desarrollo Social de la Comisión Económica para América Latina y el Caribe (CEPAL).
      </div>
    )
  },
  {
    title: (<h4>¿Se puede escalar?</h4>),
    content: (
      <div>
        A veces, la innovación social puede ser escalada e introducida a un mercado o adoptada
        por el estado para ser replicable en otros contextos. Esto último está estrechamente
        relacionado con la doble naturaleza de los emprendimientos creativos y culturales
        antes mencionada.
      </div>
    )
  },
  {
    title: (<h4>¿Cuándo se da la innovación social?</h4>),
    content: (
      <div>
          La innovación social se da cuando las necesidades de una comunidad no pueden ser
          resueltas ni por el estado ni por el mercado y emergen así soluciones que solventan
          dicha necesidad, apropiadas por la comunidad y que tienen la
          posibilidad de ser replicables.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Has escuchado hablar de innovación social?</h5>

          <div className='unc-row unc-padding-1'>
            Así como la economía creativa, el tema de la innovación ha tomado gran relevancia en
            las últimas décadas, debido a su posibilidad de aportar al desarrollo en ciencia y
            tecnología, y de paso, al crecimiento económico, como lo plantea un estudio de 2014 de
            las expertas de la Universidad de Santiago de Compostela, España, Ana María Porto
            Castro y Maria Josefa Mosteiro García.
            <br /><br />

            En este sentido, algunos subsectores y emprendimientos de la economía creativa han
            logrado ser reconocidos, no solo por generar valor económico y simbólico en sus
            territorios, sino por promover la innovación al impulsar la generación y uso de nuevas
            ideas, herramientas y tecnologías que representan soluciones para necesidades del
            mercado o del entorno social, dice el informe mundial de la UNESCO, de 2013.
            <br /><br />

            Estrechamente relacionado con la creación de soluciones para un entorno social algunos
            teóricos hablan de innovación social, conoce el concepto de innovación social con el
            siguiente recurso gráfico:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del mapa interactivo para conocer más sobre
            innovación social
            </small>
          </div>

          <div className='unc-row text-center'>
            <PieButtons
              textData={[
                ['¿A qué se refiere?'],
                ['¿Se puede escalar?'],
                ['¿Cuándo se da la?', 'innovación social'],
                ['Innovación Social']
              ]}
              color={d3.scaleOrdinal(['#9d1844', '#7c1236', '#c85c80'])}
              lastCenter={true}
              popups={popups}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            A pesar de esto, muchas iniciativas culturales y creativas desconocen o son reacias
            ante procesos de innovación de los que podrían sacar provecho y elevar aún más el valor
            generado para los territorios en los que se desenvuelven y, a veces, están incluso
            innovando sin darse cuenta.
            <br /><br />
            Así es que si tienes un proyecto o emprendimiento en el sector creativo y cultural que
            quieres hacer sostenible en el ámbito económico, te invitamos a evaluar cómo la
            innovación puede permitirte lograrlo.
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
