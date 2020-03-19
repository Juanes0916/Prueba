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
            <h4>
              Mowies, un caso del sector en el que la innovación ha posibilitado su sostenibilidad
            </h4>
          </div>

          <div className='unc-row unc-padding-1'>
            De una obsesión y una necesidad de contar historias nació Mowies
            (<a href='http://www.mowies.com'>www.mowies.com</a>), hoy una plataforma virtual en la
            que cualquier realizador y productor puede ofrecer su trabajo audiovisual, con pocos
            intermediarios y con un contacto casi directo con el consumidor. Además, con la
            posibilidad de que otros la difundan y todos perciban valor a través de ello.
            <br /><br />
            Alejandro Arango, su creador, dice que el esfuerzo por grabar una película lo dejó
            arruinado y, ante la negativa y las pocas o escasas posibilidades de comercializarla,
            tuvo que recurrir a su ingenio para evitar que le volviera a pasar y crear una
            alternativa para personas que pasaran por una situación similar.
            <br /><br />
            <strong>Mowies</strong> es una plataforma social para la monetización de contenidos
            audiovisuales en la cual ganan, tanto los creadores como los espectadores, como
            Alejandro lo explica en el siguiente videoclip:
          </div>

          <Video videoId={315248991} />

          <div className='unc-row unc-padding-1'>
            ¿Y cómo funciona?, sencillo: el productor o realizador le pone un precio a su trabajo,
            lo monta de forma gratis a la plataforma y recibe el 90% de ese precio por cada compra
            que haga el consumidor, quien también gana dinero (el 20 % del precio estipulado) si lo
            socializa en sus redes sociales, según explica Alejandro.
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
