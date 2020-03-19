import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Aspectos para incorporar la transmedialidad en lo creativo y cultural</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Ahora que sabemos qué es la transmedialidad y la posibilidad que representa de crear
            una cultura colaborativa en la que participan los públicos gracias a la multiplicidad
            de formatos asociados, lo que sigue es conocer algunas pautas para incorporar en
            proyectos creativos y culturales; es decir, en tu proyecto, lo que podría denominarse
            una lógica transmedia.
          </div>

          <h5>La transmedialidad debe ser intencionada</h5>

          <div className='unc-row unc-padding-1'>
            Mauricio Vásquez dice que la transmedialidad debe estar alineada a la intención y en
            este sentido puede incorporarse al principio de tu proyecto o puede ir incorporándose
            poco a poco, como te resulte más conveniente:
          </div>

          <Video videoId={314991635} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
