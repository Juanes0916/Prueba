import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Referentes de aplicación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            En este módulo conocerás el caso de <strong>La Fábrica</strong> y cómo han incorporado
            lo que podemos llamar una lógica transmedia para entregar oferta creativa y cultural
            al público. Además, el experto Mauricio Vásquez te hablará sobre la transmedialidad.
          </div>

          <h5>La Fábrica</h5>

          <div className='unc-row unc-padding-1'>
            Trabajar en equipo, con un obsesivo deseo de perfección y excelencia por hacer las
            cosas bien, le ha permitido a
            <a href='http://www.lafabrica.com' target='_blank'> La Fábrica</a> mantenerse durante
            ya 20 años en la cima de las empresas creativas y culturales españolas.
            <br /><br />

            <div className='text-center' style={{ maxwidth: '700px' }}>
              <img src='./assets/img/M05_IMG36.png' />
            </div>
            <br /><br />

            Para saber más sobre esta iniciativa, explora esta entrevista con Alberto Anaut:
            <br />
          </div>

          <Video videoId='UuQ4RX6qiCw' />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
