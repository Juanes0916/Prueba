import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Referente de aplicación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            En Colombia hay una empresa especializada en la investigación de análisis de
            tendencias de consumo y estilos de vida, muy enfocada en los procesos de innovación
            dirigidos al sector creativo y cultural. Se trata de
            <a href='http://www.360trendlab.com/' target='_blank'> 360 Trendlab</a>, con 10 años
            de experiencia en la materia, según explica Paula Rivera su fundadora, quien nos
            habla en el siguiente videoclip de Trendlab y su equipo.
          </div>

          <Video videoId={315049089} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
