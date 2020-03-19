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
            <h4>Referente de aplicación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            En este módulo si bien no tenemos un caso específico, durante el módulo sí encontrarás
            referencias que te llevaran a conocer diferentes casos.
            <br /><br />

            Además de lo que veas en el módulo, es importante que sepas que la impliación de los
            públicos ocurre desde siempre; desde los griegos, y se ha visto transformada con la
            introducción de lo digital. Sin embargo es importante conocer sobre el marco conceptual
            de este asunto.
            <br /><br />
            Si quieres explorar más, puedes visitar por ejemplo:
            <a href='http://www.engageaudiences.eu'> engageaudiences.eu</a>
            <em> *Disponible en ingles*</em>
            <br /><br />
            <strong>Ahora bien, si has respondido con dudas las preguntas anteriores, te invitamos a
            conocer más a través de este módulo.</strong>
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
