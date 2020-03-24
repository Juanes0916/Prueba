import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';
import * as d3 from 'd3';

import Header from '../components/Header';
import PieButtons from '../../components/PieButtons';

const popups = [
  {
    title: (<h4>Diseñar para experiencias comunitarias</h4>),
    content: (
      <div>
        Las audiencias reaccionan mejor cuando comparten en un espacio, una historia.
      </div>
    )
  },
  {
    title: (<h4>Volver los proyectos tangibles</h4>),
    content: (
      <div>
        Es importante establecer conexiones directas con el mundo real. Ir más allá de los
        límites que impone un medio. Cuando las personas cuentan con algo en sus manos realizan
        preguntas al respecto, comparten información y promueven la creación de comunidades.
      </div>
    )
  },
  {
    title: (<h4>Motivar el descubrimiento</h4>),
    content: (
      <div>
        Las personas deben encontrar la información por sí mismas. Este mecanismo es el móvil
        de los fanáticos, quienes se apropian, comparten y redefinen una narrativa.
      </div>
    )
  },
  {
    title: (<h4>Hacer del diseño algo personal</h4>),
    content: (
      <div>
        Tratar de vincularlo con los referentes culturales de la comunidad en la que se interviene.
      </div>
    )
  },
  {
    title: (<h4>Crear un mundo más grande que sus personajes</h4>),
    content: (
      <div>
        No sólo concentrarse en los conflictos y sus protagonistas sino en la creación de guías
        de conexión que motiven un crecimiento permanente.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>No hay fórmula, pero sí unos principios</h5>

          <div className='unc-row unc-padding-1'>
            No existe una fórmula para incorporar la transmedialidad de manera exitosa, pero
            podríamos seguir el ejemplo del productor Michael Monello, experto en narrativas
            inmersas y marketing innovador, quien ha desarrollado cinco principios que pueden
            ayudar en caso de implementar un modelo transmedia en un proyecto cultural:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y profundiza en los principios.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='unc-row text-center'>
              <PieButtons
                textData={[
                  ['Diseñar para experiencias', 'comunitarias'],
                  ['Volver los proyectos', 'tangibles'],
                  ['Motivar el descubrimiento'],
                  ['Hacer del diseño', 'algo personal'],
                  ['Crear un mundo más grande', 'que sus personajes']
                ]}
                color={d3.scaleOrdinal(['#00607e', '#007c93', '#00aaca', '#67b6b2'])}
                popups={popups}
              />
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
