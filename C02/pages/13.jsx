import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  Popup,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>Ser originales</h4>),
    content: (
      <div>
        En el sector creativo y cultural hay un factor importante de originalidad y
        creatividad y este es un elemento fuerte del que los emprendedores suelen hacer
        uso para que su producto o servicio resulte atractivo, de modo que una persona
        esté dispuesta a pagar por ellos.
      </div>
    )
  },
  {
    title: (<h4>Adoptar innovaciones: Ser constantes</h4>),
    content: (
      <div>
        La innovación es innovación cuando se innova. Esto suena redundante, pero la innovación
        dejará de serlo en algún punto cuando muchas personas la adopten. Siempre hay que seguir
        en el camino de innovar para generar valor y fidelidad. No se innova por una sola vez.
      </div>
    )
  },
  {
    title: (<h4>Saber comunicar: Conocer el negocio</h4>),
    content: (
      <div>
        El producto o servicio es solo el comienzo. Innovar en toda la cadena de valor es posible
        y da más posibilidades y valor competitivo. La idea es hacer la cadena de valor, conocerla
        y saber comunicar los factores diferenciadores.
      </div>
    )
  },
  {
    title: (<h4>Conocer al usuario</h4>),
    content: (
      <div>
        Se debe saber en qué parte de la empresa vale la pena y para qué se hacen las
        innovaciones. Conocer al usuario, cliente o consumidor es fundamental, igual que
        conocer a las personas que hacen parte de la cadena. Eso da claridades para saber
        cómo, cuándo y con qué innovar.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Reflexiones sobre la innovación</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Para finalizar queremos compartirte unas reflexiones sobre la innovación en el
            sector creativo y cultural:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en el mapa interactivo para ver las reflexiones de innvoación</small>
          </div>

          <div
            className='unc-row unc-row-bgfull unc-row-list unc-padding-1'
            style={{ backgroundImage: 'url(./assets/img/M03_IMG06.png)' }}>
            <div className='unc-list-border'>
              <div className='row'>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[0])}>1</span>
                  <h5>Ser originales</h5>
                </div>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[1])}>2</span>
                  <h5>Adopatar innovaciones</h5>
                </div>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[2])}>3</span>
                  <h5>Saber comunicar</h5>
                </div>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[3])}>4</span>
                  <h5>Conocer al usuario</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Como lo vimos en los videos anteriores, en <strong>Mowies</strong> todo este entramado
            está claro, como está claro que además de estos asuntos, para ser innovador hay que
            salirse de la zona de confort, para lo cual se requiere contar con un equipo que esté
            alineado en el propósito, según plantea Alejandro Arango:
          </div>

          <Video videoId={315229123} />

          <div className='unc-row unc-padding-1'>
            Como conclusión, Alejandro advierte que la idea es apostar a la sostenibilidad que es
            la que permitirá que la idea creativa se mantenga en el tiempo y te dé la posibilidad
            de vivir de ella:
          </div>

          <Video videoId={315230398} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
