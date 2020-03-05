import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Cómo innovar?</h4>
          </div>

          <h5>¿CÓMO INNOVAR?
            <small> Para Mowies es conociendo qué quiere el público y cómo lo quiere</small>
          </h5>

          <div className='unc-row unc-padding-1'>
            Y ahora llega el momento de hablar sobre cómo hacer innovación. Para empezar queremos
            que conozcas cómo Mowies identificó en qué diferenciarse, punto en el cuál radica la
            innovación que han realizado.
          </div>

          <Video videoId={315285582} />

          <div className='unc-row unc-padding-1'>
            Para este innovador es fundamental la interacción y la posibilidad de validar con el
            público qué quiere y cómo lo quiere:
          </div>

          <Video videoId={315219916} />

          <div className='unc-row unc-padding-1'>
            Alineado con esto, un estudio realizado en 2015 por Corfo, una agencia del gobierno
            chileno que apoya el emprendimiento en su país, indicó que reconocer en las personas
            sus motivaciones y sus necesidades dará una base clara para definir la forma de
            conversar con los consumidores y usuarios. Para eso, hay que “salir a la calle,
            ‘pivotear’ el producto, probarlo, reestructurarlo si es necesario, validarlo como
            solución y conseguir la mejor disposición de pago para vender”.
          </div>

          <div className='unc-row unc-row-border unc-padding-2'>
            Y esto no solo al momento de iniciar un negocio sino en el proceso de mejorarlo en el
            tiempo, lo cual pone sobre la mesa que la comunicación, aspecto que puedes explorar más
            en el material sugerido en la sección <a href='#'><strong>Recursos de
            profundización</strong></a> de este módulo, también es clave en la innovación.
          </div>

          <div className='unc-row unc-padding-1'>
            Alejandro Arango, de <strong>Mowies</strong>, explica cómo acude a la comunicación y a
            la interacción para ganar fidelidad y tránsito en su plataforma digital:
          </div>

          <Video videoId={315223420} />
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
