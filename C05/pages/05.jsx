import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Por qué la lógica transmedia representa una oportunidad para el sector creativo
              y cultural?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            En la actualidad no solo existen los mecanismos para la transmedialidad, sino que las
            capacidades del sector creativo y cultural pueden permitir que ello ocurra, como
            explica Mauricio Vásquez:
          </div>

          <Video videoId={314987502} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
