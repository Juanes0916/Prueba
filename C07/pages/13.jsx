import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  Popup,
  UDScrollbars,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>¿Cómo vivimos estas tendencias en el sector creativo y cultural?</h4>),
    content: (
      <Video videoId={315064225} />
    )
  },
  {
    title: (<h4>¿Cómo podemos utilizar estas tendencias en el sector?</h4>),
    content: (
      <Video videoId={315069124} />
    )
  },
  {
    title: (<h4>¿Cuáles son los tiempos de adaptación de estas tendencias?</h4>),
    content: (
      <Video videoId={315032690} />
    )
  },
  {
    title: (<h4>¿Cuál es el panorama de tendencias a nivel local?</h4>),
    content: (
      <Video videoId={315039882} />
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Cómo vivimos las tendencias en el sector creativo y cultural?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Antes de terminar queremos plantear algunas preguntas clave en este tema que nuestra
            experta invitada, Paula Riveros, de 360 Trendlab, nos responderá, con base en su
            experiencia y conocimiento.
        </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los botones con las preguntas y conoce las respuestas de
            Paula.</small>
          </div>

          <div className='unc-row row'>
            <div className='col-md-3' style={{ padding: '1em' }}>
              <div className='text-center'>
                <button className='unc-button' onClick={() => Popup.open(items[0])}>
                  <span className='btn-label' id='m-icon'><i className='fa fa-eye'>&nbsp;</i></span>
                  ¿Cómo vivimos estas tendencias en el sector creativo y cultural?
                </button>
              </div>
            </div>
            <div className='col-md-3' style={{ padding: '1em' }}>
              <div className='text-center'>
                <button className='unc-button' onClick={() => Popup.open(items[1])}>
                  <span className='btn-label' id='m-icon'><i className='fa fa-eye'>&nbsp;</i></span>
                  ¿Cómo podemos utilizar estas tendencias en el sector?
                </button>
              </div>
            </div>
            <div className='col-md-3' style={{ padding: '1em' }}>
              <div className='text-center'>
                <button className='unc-button' onClick={() => Popup.open(items[2])}>
                  <span className='btn-label' id='m-icon'><i className='fa fa-eye'>&nbsp;</i></span>
                  ¿Cuáles son los tiempos de adaptación de estas tendencias?
                </button>
              </div>
            </div>
            <div className='col-md-3' style={{ padding: '1em' }}>
              <div className='text-center'>
                <button className='unc-button' onClick={() => Popup.open(items[3])}>
                  <span className='btn-label' id='m-icon'><i className='fa fa-eye'>&nbsp;</i></span>
                  ¿Cuál es el panorama de tendencias a nivel local?
                </button>
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
