import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Mowies modificó la cadena de valor del negocio</h5>

          <div className='unc-row unc-padding-1'>
            <strong>Mowies</strong> modifica la cadena de valor de su negocio, al reducir a los
            eslabones, como lo explica en el siguiente videoclip su creador, Alejandro Arango:
          </div>

          <Video videoId={315225562} />

          <div className='unc-row unc-padding-1'>
            Innovar es un elemento clave al pensar en la sostenibilidad de tu negocio y, para ello,
            es fundamental que esa innovación quede clara en cualquiera de los eslabones de la
            cadena de valor, como lo demuestra
            <strong>Mowies</strong>.
          </div>

          <DegrantImage url='./assets/img/M03_IMG39.jpg' inverse >
            Si quieres más información, puedes explorar más sobre la cadena de valor del sector
            creativo y cultural, en el material sugerido en la sección Recursos de profundización
            de este módulo.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Por eso, es importante que cada iniciativa conozca no solo los procesos de innovación
            de los que podría sacar provecho sino que complemente esa tarea con sinergias que
            darían más valor a su cadena.
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
