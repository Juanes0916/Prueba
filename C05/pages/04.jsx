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
          <h5>Supuestos y principios de la transmedialidad</h5>

          <div className='unc-row unc-padding-1'>
            La lógica transmedia se soporta en tres supuestos, como lo explica de forma clara
            Mauricio Vásquez:
          </div>

          <Video videoId={314986704} />

          <div className='unc-row unc-padding-1'>
            Para que exista una lógica transmedia se debe cumplir con tres condiciones
            fundamentales:
          </div>

          <div className='unc-row row unc-row-icon-title'>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-90c unc-fill'></span>
              <h5>Ser un universo narrativo mayor a las partes que lo componen.</h5>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-90d unc-fill'></span>
              <h5>Incorporar distintos medios o plataformas.</h5>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-927 unc-fill'></span>
              <h5>Permitir la participación y alimentación del relato por parte de los
              consumidores.
              </h5>
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
