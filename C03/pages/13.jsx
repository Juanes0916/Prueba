import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Lean Startup</h5>

          <div className='unc-row unc-padding-1'>
            La tercera estrategia es <strong><i>Lean Startup</i></strong>, que se concentra en
            encontrar de forma rápida un cliente con un problema al que ofrece una solución,
            conocida como propuesta de valor. El motor de la metodología es descubrir qué quiere
            el cliente, definir hipótesis asociadas a ello, y con esas hipótesis se generan
            experimentos sobre qué validar o desechar de las propuestas, para perseverar en la
            idea o pivotiar, como lo muestra el siguiente gráfico.
            <br /><br />

            <div className='text-center' style={{ maxwidth: '780px', width: '100%' }}>
              <img src='./assets/img/M02_IMG35.png' />
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
