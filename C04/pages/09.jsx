import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, Popup, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>¿Quién?</h4>),
    content: (
      <div>
        La Fundación Casa Tres Patios
        (<a href=' http://www.casatrespatios.org' target='_blank'> www.casatrespatios.org</a>),
        un centro de arte contemporáneo ubicado en Medellín.
      </div>
    )
  },
  {
    title: (<h4>¿Qué hace?</h4>),
    content: (
      <div>
        Realiza publicaciones de sus memorias y documentaciones impresas y digitales de sus
        programas y proyectos, con el fin de divulgar sus metodologías pedagógicas y una marca y
        forma de hacer que le imprimen un valor en el sector creativo y cultural de la ciudad
      </div>
    )
  },
  {
    title: (<h4>¿Cómo lo hace?</h4>),
    content: (
      <div>
        A continuación, podrás ver algunas publicaciones relacionadas con el tema que venimos
        tratando: <a href=' https://www.casatrespatios.org/publicaciones-c3p' target='_blank'>
          https://www.casatrespatios.org/publicaciones-c3p</a>
      </div>
    )
  },
  {
    title: (<h4>¿Quién?</h4>),
    content: (
      <div>
        Nuestro Tesoro Escondido
      </div>
    )
  },
  {
    title: (<h4>¿Qué hace?</h4>),
    content: (
      <div>
        Por medio de la investigación-acción participativa, explora las ideas y visiones de
        las organizaciones juveniles en Medellín y recogen su proceso vivido en el video Plata,
        Cultura y Cambio, que permite la difusión y transferencia de ese conocimiento adquirido
        en el hacer.
      </div>
    )
  },
  {
    title: (<h4>¿Cómo lo hace? Ambos ejemplos se pueden ver en los siguientes enlaces:</h4>),
    content: (
      <div className=' unc-row row'>
        <div className='col-sm-6 unc-padding-1'>
          <div className='unc-row-prompt' style={{ height: '66px' }}>
            <a href='https://www.youtube.com/watch?v=tVZNaaB_YfM' target='_blank'
              className='pecc-108 unc-fill unc-clickeable'>Video recomendado</a>
            <div className='unc-prompt-description'>Planta, cultura y cambio</div>
            <div className='unc-prompt-autor'>Recrear International</div>
          </div>
        </div>
        <div className='col-sm-6 unc-padding-1'>
          <div className='unc-row-prompt' style={{ height: '66px' }}>
            <a href='https://www.youtube.com/watch?v=bALi7L4mf-U' target='_blank'
              className='pecc-108 unc-fill unc-clickeable'>Video recomendado</a>
            <div className='unc-prompt-description'>Llamas grises y espacio especial</div>
            <div className='unc-prompt-autor'>Juan Velez</div>
          </div>
        </div>
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Ejemplos</h5>

          <div className='unc-row unc-padding-1'>
            Conoce aquí algunos ejemplos de propuestas en el sector creativo y cultural que
            hacen uso de la sistematización.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre el mapa interactivo para ver más información</small>
          </div>

          <div className='unc-row row'>
            <div className='col-sm-6'>
              <h4>Centro de arte contemporáneo</h4>
            </div>
            <div className='col-sm-6'>
              <h4>Audiovisual recrea práctica cultural pedagógica</h4>
            </div>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row unc-row-list unc-row-bgfull row' style={{ backgroundImage: 'url(./assets/img/M01_IMG40.jpg)' }}>
                <div className='unc-list-border'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <span onClick={() => Popup.open(items[0])}>1</span>
                      <h5>¿Quién?</h5>
                    </div>
                    <div className='col-sm-4'>
                      <span onClick={() => Popup.open(items[1])}>2</span>
                      <h5>¿Qué hace?</h5>
                    </div>
                    <div className='col-sm-4'>
                      <span onClick={() => Popup.open(items[2])}>3</span>
                      <h5>¿Cómo lo hace?</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row unc-row-list unc-row-bgfull row' style={{ backgroundImage: 'url(./assets/img/M01_IMG29.jpg)' }}>
                <div className='unc-list-border'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <span onClick={() => Popup.open(items[3])}>1</span>
                      <h5>¿Quién?</h5>
                    </div>
                    <div className='col-sm-4'>
                      <span onClick={() => Popup.open(items[4])}>2</span>
                      <h5>¿Qué hace?</h5>
                    </div>
                    <div className='col-sm-4'>
                      <span onClick={() => Popup.open(items[5])}>3</span>
                      <h5>¿Cómo lo hace?</h5>
                    </div>
                  </div>
                </div>
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
