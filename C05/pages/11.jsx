import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Narrativas transmedia</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Bueno, ya con los ejemplos claros, ahora te hablaremos de una aplicación específica
            de la llamada narrativa transmedia, narración transmedia o narrativa transmediática
            (storytelling, término utilizado en inglés). Un tipo de relato en el que la historia
            se despliega por medio de múltiples medios y plataformas.
            <br /><br />

            Estas narrativas se han popularizado como una herramienta para conectarse con las
            audiencias, salirse de la manera acartonada y fría de hablar de negocios y para lograr
            mayor empatía con clientes potenciales.
            <br /><br />

            Lo primero que debes saber o tener claro son las ventajas de contar historias. Entre
            otras, estas son:
            <br /><br />
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce más sobre las ventajas de la
            narrativa transmedia.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            {/* TODO: D3 */}
            <div className='text-center'>
              <div id='obj-historias' className='unc-row-scalable' data-width='500'>
                <div className='unc-scalable'>
                  <img src='./assets/img/M05_IMG40.jpg' width='100%' />
                  <div className='unc-circle unc-c1' data-toggle='modal' data-target='#modal10'></div>
                  <div className='unc-circle unc-c2' data-toggle='modal' data-target='#modal11'></div>
                  <div className='unc-circle unc-c3' data-toggle='modal' data-target='#modal12'></div>
                  <div className='unc-circle unc-c4' data-toggle='modal' data-target='#modal13'></div>
                  <div className='unc-circle unc-c5' data-toggle='modal' data-target='#modal14'></div>
                  <div className='unc-circle unc-c6' data-toggle='modal' data-target='#modal15'></div>
                  <div className='unc-circle unc-c7' data-toggle='modal' data-target='#modal16'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Todos estos aspectos nos demuestran, entonces, que la narrativa transmedia propicia que
            los usuarios completen esos vacíos de las otras historias (se conviertan en
            prosumidores) y participen creando nuevos relatos.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
