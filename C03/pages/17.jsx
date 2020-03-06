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
                <a href='/mis-contenidos/portada/54' target='_blank' className='pecc-96b unc-fill unc-clickeable' />
                <div className='unc-prompt-title'>
                  Implicar tu público, una forma de propiciar su captación
                </div>
                <div className='unc-prompt-description'>ELPAUER</div>
                <div className='unc-prompt-auto'>Fundación Viajelogía</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='/mis-contenidos/portada/53' target='_blank' className='pecc-96b unc-fill unc-clickeable' />
                <div className='unc-prompt-title'>
                  La lógica transmedia, cómo llegar en distintos formatos
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
                <a href='./assets/docs/Anexo_3_Dise%c3%b1o_y_creaci%c3%b3n_de_productos.pdf' target='_blank'
                  className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Información sobre el conocimiento del cliente</div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='http://innovacionparatodos.com/content/pecc/docs/Anexo_5_Comunicaci%c3%b3n_cultural.pdf'
                  target='_blank' className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Información sobre comunicación estratégica y canales de comunicación.
                </div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/docs/Lista_de_referencias_Conocimiento_del_cliente.pdf' target='_blank'
                  className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documento en biblitoeca</div>
                <div className='unc-prompt-description'>Bibliografía</div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
