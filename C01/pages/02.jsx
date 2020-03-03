import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Caso La Casa de Carlota</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Aunque verás varios ejemplos y expertos en este módulo, para iniciar queremos
            hablarte de La Casa de Carlota,  un estudio de diseño, con operaciones en
            Medellín y Barcelona, en el que trabajan creativos y diseñadores profesionales,
            ilustradores, estudiantes de escuelas de diseño, creativos con autismo y
            síndrome de Down, una holandesa y un par de vegetarianos. Disponer de esa
            extraordinaria combinación de talentos tan diferentes – y a la vez tan
            complementarios – les permite ofrecer a sus clientes soluciones de diseño
            innovadoras, frescas y diferentes para sus productos y servicios.
            <br /><br />

            Conoce un poco del origen de La Casa de Carlota.
          </div>

          <Video videoId={315315893} />

          <div className='unc-row unc-padding-1'>
            Esta idea se ha convertido en un estudio de diseño referente en innovación
            creativa y de impacto social a nivel mundial. <strong>No han inventado
            la creatividad, solo exploran nuevas formas de descubrirla.</strong>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
