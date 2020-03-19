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
            <h4>¿En qué momentos se puede implicar el público?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Como lo verás en el Arco de la implicación, sacado del libro “Implica a
            tu público” de Alan S. Brown y Rebecca Ratskin (2011), los momentos en
            los que pueden darse la implicación de tu público: desde la preparación
            (preliminar o intensa) que tiene lugar antes del intercambio creativo o
            cultural, pasando por el tratamiento posterior al intercambio, hasta el
            Eco del impacto, que puede durar toda una vida.
            <br /><br />

            Conozcamos un poco más sobre las cinco fases:
            <br /><br />
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y profundiza en las fases del
              Arco de implicación.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            {/* TODO: D3 */}
            <h4 className='text-center'>El arco de la implicación</h4>
            <div className='text-center'>
              <div id='obj-arco' className='unc-row-scalable' data-width='900' style={{ display: 'inline-block' }}>
                <div className='unc-scalable'>
                  <img src='./assets/img/M04_IMG36.png' width='100%' />
                  <div className='unc-circle unc-c1' data-toggle='modal' data-target='#modal6'></div>
                  <div className='unc-circle unc-c2' data-toggle='modal' data-target='#modal7'></div>
                  <div className='unc-circle unc-c3' data-toggle='modal' data-target='#modal8'></div>
                  <div className='unc-circle unc-c4' data-toggle='modal' data-target='#modal9'></div>
                </div>
              </div>
            </div>
            <br />
            Fuente: Brow, Alan & Ratzkin, Rebeca (2011). Implica a tu público (p.
            8). The San Francisco Foundation.
            <br />
            Disponible en:
            <a href='http://www.marketingdelasartes.com/implica-a-tu-publico-asimetrica'>
              http://www.marketingdelasartes.com/implica-a-tu-publico-asimetrica
            </a>
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
