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
          <h5>Potencial de la creatividad para solucionar impactos negativos</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, otro punto desde el cual se puede capitalizar el impacto social generado por las
            empresas creativas y culturales es aprovechando el potencial de la creatividad para dar
            respuesta a los impactos negativos generados por otras empresas. Veamos esto con más
            detenimiento.
            <br /><br />

            En su relación con el entorno, todas las organizaciones deben reflexionar sobre qué
            problemas resuelve o qué problemas genera su que hacer, y si lo que genera es lo que
            podríamos llamar un impacto negativo; más problemas que soluciones, pues el deber en
            este caso es pensar en cómo mitigar los problemas o impactos negativos ocasionados.
            <br /><br />

            La idea no es tan descabellada, según la explicación del tema que hace a continuación
            Joan, el ejecutivo español de La Casa de Carlota, quien advierte que el impacto social
            también puede ser negativo y, para ello, también debe haber una respuesta:
          </div>

          <Video videoId={315277180} />

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre cada componente para escuchar el audio correspondiente</small>
          </div>

          <div className='unc-row unc-padding-1 row'>
            { /* TODO: Audio */}
            <div className='col-sm-4 unc-padding-1'>
              <div className='text-center'>
                <button className='unc-button' data-target='#formacionMdl_A' data-toggle='modal' type='button'>
                  <span className='btn-label d-block'><i className='icon-volume-2'></i></span>
                  Desde la consolidación de competencias ciudadadanas
                </button>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='text-center'>
                <button className='unc-button' data-target='#formacionMdl_B' data-toggle='modal' type='button'>
                  <span className='btn-label d-block'><i className='icon-volume-2'></i></span>
                  Desde el reconocimiento de prácticas locales de desarrollo
                </button>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='text-center'>
                <button className='unc-button' data-target='#formacionMdl_C' data-toggle='modal' type='button'>
                  <span className='btn-label d-block'><i className='icon-volume-2'></i></span>
                  Desde la inclusión y promoción de la diversidad
                </button>
              </div>
            </div>
            <div className='col-sm-4 col-sm-offset-2 unc-padding-1'>
              <div className='text-center'>
                <button className='unc-button' data-target='#formacionMdl_D' data-toggle='modal' type='button'>
                  <span className='btn-label d-block'><i className='icon-volume-2'></i></span>
                  Desde la construcción conjunta de conocimiento
                </button>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='text-center'>
                <button className='unc-button' data-target='#formacionMdl_E' data-toggle='modal' type='button'>
                  <span className='btn-label d-block'><i className='icon-volume-2'></i></span>
                  Desde los lenguajes alternativos
                </button>
              </div>
            </div>
          </div>

        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;