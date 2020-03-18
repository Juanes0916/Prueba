import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Recursos de profundización</h4>
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre cada ícono para acceder al recurso de profundización</small>
          </div>

          <h5>Módulos ELPAUER sugeridos</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='/mis-contenidos/portada/52' target='_blank' className='pecc-96b unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Intangibles, gestionarlos es un asunto clave para
                la sostenibilidad económica de tu emprendimiento
                </div>
                <div className='unc-prompt-description'>ELPAUER</div>
                <div className='unc-prompt-autor'>Fundación Viajelogía</div>
              </div>
            </div>
          </div>

          <h5>Documentos en biblioteca</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/files/Anexo_1_Creatividad_y_cultura.pdf' target='_blank'
                  className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Información general sobre el sector</div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/files/Lista_de_referencias_Innovaci%c3%b3n.pdf' target='_blank'
                  className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documento externo</div>
                <div className='unc-prompt-description'>Bibliografía</div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
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
