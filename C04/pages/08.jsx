import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Cómo sistematizar?</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, entendiendo la teoría, necesitamos ponerla en práctica, es decir, necesitamos
            saber cómo sistematizar. Al respecto, Juan Felipe tiene una recomendación.
          </div>

          <Video videoId={315143744} />

          <div className='unc-row unc-padding-1'>
            Teniendo estas claridades, debemos reconocer cómo se llevan a cabo los procesos de
            sistematización, sin antes advertir que cada uno es único y contextualizado de
            acuerdo con quién, cuándo y qué propósitos le demos. También, hay múltiples formas
            en las que se han realizado los procesos de sistematización, pero partiremos por
            entender unos momentos que son comunes y en ellos unas fases o pasos a tener en cuenta:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los botones y profundiza en las fases de la sistematización</small>
          </div>

          <div className='unc-row row unc-equal-cols'>
            {/* eslint-disable */}
            {/* TODO: Audio */}
            {/* TODO: Popup */}
            <div className='col-sm-4 unc-padding-1'>
              <div className='unc-row-card' style={{ height: '555px' }}>
                <div className='unc-row-card-image'>
                  <img src='./assets/img/M01_IMG27.jpg' width='100%' />
                </div>
                <h5 className='text-left'>Antes</h5>
                <div className='unc-padding-1'>
                  <div>
                    Marcar una ruta de inicio que debemos planear para darle un propósito o
                    un norte al proceso.
                  </div>
                  <button className='unc-button' data-target='#antesMdl' data-toggle='modal' type='button'>
                    <span className='btn-label'><i className='icon-volume-2'></i></span>
                    Escuchar audios
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='unc-row-card' style={{ height: '555px' }}>
                <div className='unc-row-card-image'>
                  <img src='./assets/img/M01_IMG28.jpg' width='100%' />
                </div>
                <h5 className='text-left'>Durante</h5>
                <div className='unc-padding-1'>
                  <div>
                    Nos referimos al hacer de la sistematización, la puesta en marcha que puede
                    implicar varias fases en su interior
                  </div>
                  <button className='unc-button' data-target='#duranteMdl' data-toggle='modal' type='button'>
                    <span className='btn-label'><i className='icon-volume-2'></i></span>
                    Escuchar audios
                  </button>
                  <button className='unc-button' data-target='#modal1' data-toggle='modal' type='button'>
                    <span className='btn-label'><i className='icon-speech'></i></span>
                    Trabajo de campo
                  </button>
                  <button className='unc-button' data-target='#modal2' data-toggle='modal' type='button'>
                    <span className='btn-label'><i className='icon-speech'></i></span>
                    Análisis de resultados
                  </button>
                  <button className='unc-button' data-target='#modal3' data-toggle='modal' type='button'>
                    <span className='btn-label'><i className='icon-speech'></i></span>
                    Conclusiones
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <div className='unc-row-card' style={{ height: '555px' }}>
                <div className='unc-row-card-image'>
                  <img src='./assets/img/M01_IMG29.jpg' width='100%' />
                </div>
                <h5 className='text-left'>Después</h5>
                <div className='unc-padding-1'>
                  <div>
                    Lo entendemos como la difusión, socialización, promoción, intercambio,
                    circulación, comercialización o transferencia de ese conocimiento desde
                    diferentes formatos, como publicaciones, videos, multimedias,
                    plataformas web, espacios de interlocución o difusión, entre otros.
                  </div>
                  <button className='unc-button' data-target='#despuesMdl' data-toggle='modal' type='button'>
                    <span className='btn-label'><i className='icon-volume-2'></i></span>
                    Escuchar audios
                  </button>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
