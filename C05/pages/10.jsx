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
            <h4>Ejemplos de transmedialidad en Colombia</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Ya hicimos una aproximación a la trasmedia, pero ahora queremos que conozcas con
            ejemplos colombianos, cómo se lleva a la práctica esta herramienta.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los botones y profundiza en cada uno de los casos.</small>
          </div>

          <div className='unc-row row'>
            {/* TODO: Image Container */}
            <div className='col-md-4 text-center'>
              <button className='unc-button' id='btn4Rios'>
                <span className='btn-label'><i className='icon-loop'></i></span>
                4 Rios
              </button>
            </div>
            <div className='col-md-4 text-center'>
              <button className='unc-button' id='btnAntorcha'>
                <span className='btn-label'><i className='icon-loop'></i></span>
                Antorcha Films
              </button>
            </div>
            <div className='col-md-4 text-center'>
              <button className='unc-button' id='btnColombian'>
                <span className='btn-label'><i className='icon-loop'></i></span>
                Colombian Loops
              </button>
            </div>
            <div className='col-md-12 mt-5 text-center'>
              <div
                id='img-container'
                style={{
                  border: '2px dashed #999',
                  margin: '2em auto',
                  maxwidth: '700px',
                  minheight: '300px',
                  display: 'none'
                }}>
                <img src='./assets/img/M05_IMG37.jpg' id='img37' />
                <img src='./assets/img/M05_IMG38.jpg' id='img38' />
                <img src='./assets/img/M05_IMG39.jpg' id='img39' />
              </div>
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
