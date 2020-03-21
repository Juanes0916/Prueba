import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>El boom del servicio al cliente</h5>

          <div className='unc-row unc-padding-1'>
            En 2018 las marcas comenzarán a balancear mucho mejor el presupuesto de adquisición de
            clientes frente al de retención, adicionalmente, gran parte de la atención al cliente
            migrará a redes sociales y a plataformas de mensajería como WhatsApp, igualmente los
            chatbots (programa informático con el que es posible mantener una conversación),
            mejorarán su desempeño al contar con mayor aprendizaje. Durante este año escucharemos
            hablar de Social CRM más seguido, veremos cómo tecnologías de automatización serán más
            relevantes para atender de forma eficiente a los clientes, y las marcas realizarán un
            esfuerzo importante por satisfacer a sus clientes más allá del tradicional contact
            center.
            <br /><br />

            Por lo tanto, sugiere establecer:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M06_IMG09.jpg',
                label: (
                  <h3>A mayor competencia mayor énfasis en los clientes actuales.</h3>
                )
              },
              {
                bgImage: './assets/img/M06_IMG21.jpg',
                label: (
                  <h3>
                    Mantener un balance entre las estrategias para adquirir nuevos clientes
                    y retener los existentes.
                  </h3>
                )
              },
              {
                bgImage: './assets/img/M06_IMG35.jpg',
                label: (
                  <h3>
                    El cuidado del cliente es el nuevo marketing: Pensar en retener los
                    clientes existentes más que en ganar nuevos.
                  </h3>
                )
              }
            ]}
            />
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
