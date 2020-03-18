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
            <h4>Reflexionemos sobre cultura + conocimiento + impacto social</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Entonces, más que problemas, las empresas creativas y culturales enfrentan retos y
            tiene una gran responsabilidad desde su que hacer, como lo plantea Juan Felipe:
          </div>

          <Video videoId={315313187} />

          <div className='unc-row unc-padding-1'>
            Al retomar las dimensiones analizadas: cultura + conocimiento + impacto social, es
            claro que no son solo un capital activo para la creación de ofertas creativas y
            culturales, sino una parte vital del propósito de las empresas creativas y culturales.
            Su uso, gestión y desarrollo, conectado con una comprensión del cliente, sus intereses
            y necesidades, pueden ser un aspecto clave para asegurar la sostenibilidad de tu
            emprendimiento.
            <br /><br />

            Para finalizar queremos que escuches la invitación que el equipo de Casa Carlota
            Medellín tiene para ti.
          </div>

          <Video videoId={315281041} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
