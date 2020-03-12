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
          <div className='unc-row unc-row-section-title'>
            <h4>Fijación de precios</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Sabiendo la importancia del precio, lo que debes tener en consideración a continuación
            es cuánto cobrar.
          </div>

          <h5>Definir el objetivo asociado al precio</h5>

          <div className='unc-row unc-padding-1'>
            Para definir cuánto cobrar se debe considerar cuál es el objetivo principal que quieres
            lograr con el precio y, desde allí, diseñar la estrategia de fijación. En el gráfico
            que verás a continuación puedes ver los objetivos asociados a la fijación de precios:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce más sobre los objetivos
            asociados a la fijación de precios.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            {/* TODO: D3 */}
            <div className='text-center'>
              <svg id='unc-precios-pie'></svg>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
