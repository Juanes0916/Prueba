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
            <h4>Recursos de profundización</h4>
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre cada ícono para acceder al recurso de profundización</small>
          </div>

          <h5>Módulos ELPAUER sugeridos</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='/mis-contenidos/contenido/51' target='_blank' className='pecc-96b unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>El conocimiento del cliente</div>
                <div className='unc-prompt-description'>ELPAUER</div>
                <div className='unc-prompt-autor'>Fundación Viajelogía</div>
              </div>
            </div>
          </div>

          <h5>Documentos en biblioteca</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/files/Anexo_6_Marketing_cultural.pdf' target='_blank'
                  className='pecc-96b unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>
                  Aquí encontrarás más información sobre estudios de mercado, definición
                  de precios y desarrollo de públicos.
                </div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/files/Lista_de_referencias_Marketing.pdf' target='_blank'
                  className='pecc-96b unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
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
