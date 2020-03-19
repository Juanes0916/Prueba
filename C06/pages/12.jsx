import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>El precio</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Ahora hablemos de un aspecto importante en la implicación del público: el precio.
            <br /><br />

            Teniendo en cuenta que es el valor (sea monetario o no monetario) que el comprador
            de un producto entrega a cambio de la utilidad que recibe, el precio desempeña un
            papel importante en las relaciones con tus públicos.
            <br /><br />

            Éste propicia una de las experiencias que tu público tiene con tu oferta y puede
            incidir en que se dé o no, la experiencia total mencionada en el Aro de implicación:
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
