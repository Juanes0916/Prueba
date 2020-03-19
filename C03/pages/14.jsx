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
          <h5>Agile</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, te hablaremos de <strong><i>Agile</i></strong>, que permite desarrollar
            soluciones para el lanzamiento al mercado de una propuesta, de forma ágil y oportuna.
            Es, en esencia, una forma de trabajar caracterizada por la entrega frecuente e
            incremental del producto, la reevaluación continua y la adaptación de los planes y las
            expectativas de los consumidores, como lo muestra la siguiente gráfica:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '780px', width: '100%' }}>
              <img src='./assets/img/M02_IMG36.png' />
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
