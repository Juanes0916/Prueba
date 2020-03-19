import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

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
            {/* TODO: D3 */}
            <div className='text-center'>
              <svg id='unc-principios-pie'></svg>
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
