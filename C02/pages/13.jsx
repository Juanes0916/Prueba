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
          <div className='unc-row unc-row-section-title'>
            <h4>Reflexiones sobre la innovación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Para finalizar queremos compartirte unas reflexiones sobre la innovación en el
            sector creativo y cultural:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en el mapa interactivo para ver las reflexiones de innvoación</small>
          </div>

          <div
            className='unc-row unc-row-bgfull unc-row-list unc-padding-1'
            data-url='./assets/img/M03_IMG06.png'>
            {/* eslint-disable */}
            {/* TODO: D3 */}
            <div className='unc-list-border'>
              <div className='row'>
                <div className='col-sm-3' data-toggle='modal' data-target='#modal4'>
                  <span>1</span>
                  <h5>Ser originales</h5>
                </div>
                <div className='col-sm-3' data-toggle='modal' data-target='#modal5'>
                  <span>2</span>
                  <h5>Adopatar innovaciones</h5>
                </div>
                <div className='col-sm-3' data-toggle='modal' data-target='#modal6'>
                  <span>3</span>
                  <h5>Saber comunicar</h5>
                </div>
                <div className='col-sm-3' data-toggle='modal' data-target='#modal7'>
                  <span>4</span>
                  <h5>Conocer al usuario</h5>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Como lo vimos en los videos anteriores, en <strong>Mowies</strong> todo este entramado
            está claro, como está claro que además de estos asuntos, para ser innovador hay que
            salirse de la zona de confort, para lo cual se requiere contar con un equipo que esté
            alineado en el propósito, según plantea Alejandro Arango:
          </div>

          <Video videoId={315229123} />

          <div className='unc-row unc-padding-1'>
            Como conclusión, Alejandro advierte que la idea es apostar a la sostenibilidad que es
            la que permitirá que la idea creativa se mantenga en el tiempo y te dé la posibilidad
            de vivir de ella:
          </div>

          <Video videoId={315230398} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
