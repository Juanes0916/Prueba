import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, Popup, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const items = [
  {
    title: <h4>Prosumidores</h4>,
    content: (
      <div>
        Aquellos que hacen una devolución con nuevos contenidos y expanden el universo
        (la historia).
      </div>
    )
  },
  {
    title: <h4>Los Fans</h4>,
    content: (
      <div>
        Comparten contenidos de forma activa y participan online en conversaciones.
      </div>
    )
  },
  {
    title: <h4>Consumidores de diferentes medios</h4>,
    content: (
      <div>
        Los consumidores del universo narrativo en diferentes soportes.
      </div>
    )
  },
  {
    title: <h4>Consumidores de un solo medio</h4>,
    content: (
      <div>
        Audiencias de tv, oyentes de radio, lectores.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>El rol de los consumidores transmedia</h5>

          <div className='unc-row unc-padding-1'>
            En este punto es bueno hablar de lo que algunos teóricos modernos han denominado
            “prosumidor” (acrónimo formado por la fusión de las palabras productor -también
            profesional o proveedor, según el contexto- y consumidor) y su papel.
            <br /><br />

            Con el surgimiento de la web 2.0, el nuevo consumidor ha tenido las condiciones
            ideales para consolidarse como una “mente inteligente”, al generar opiniones en blogs,
            foros, medios sociales y otros canales. El escritor y futurólogo estadounidense Alvin
            Toffler, creador del término, dijo en 1980 que en poco tiempo los consumidores
            exigirán ser escuchados y participarán en la confección de los productos y servicios
            de las empresas para satisfacer sus necesidades reales, tal y como sucede en la
            actualidad con la transmedia.
          </div>

          <DegrantImage url='./assets/img/M05_IMG24.jpg' inverse>
            El consumidor, antes un agente pasivo, ahora tiene un papel activo; es decir, no solo
            es co-creador del servicio sino que participa en el consumo y crea valor para sí mismo
            y para la empresa.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Atrás quedó esa figura pasiva y autómata de los consumidores de los medios
            tradicionales; por eso, al referirnos a los prosumidores hacemos alusión a aquellos
            usuarios apasionados por los relatos y los detalles, que tienen la necesidad de
            establecer conexiones con otros aficionados en el marco de los espacios online, las
            fansites o los blogs.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Has clic en los componentes y conoce los tipos de consumidor</small>
          </div>

          <div className='unc-row row unc-row-icon-title'>
            <div className='col-sm-3 unc-padding-1'>
              <span className='pecc-913 unc-fill unc-clickeable' onClick={() => Popup.open(items[0])}></span>
              <h5>Los prosumidores</h5>
            </div>
            <div className='col-sm-3 unc-padding-1'>
              <span className='pecc-94d unc-fill unc-clickeable' onClick={() => Popup.open(items[1])}></span>
              <h5>Los fans</h5>
            </div>
            <div className='col-sm-3 unc-padding-1'>
              <span className='pecc-996 unc-fill unc-clickeable' onClick={() => Popup.open(items[2])}></span>
              <h5>Los consumidores de diferentes medios</h5>
            </div>
            <div className='col-sm-3 unc-padding-1'>
              <span className='pecc-97a unc-fill unc-clickeable' onClick={() => Popup.open(items[3])}></span>
              <h5>Consumidores de un solo medio</h5>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Desde allí es posible la creación de una cultura colaborativa en la que el internet ha
            facilitado la convivencia de universos transmedia completos en un mismo medio, al
            partir del hecho de que es un medio que soporta diferentes  formatos con una alta
            capacidad de participación, como lo explica la siguiente figura:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '900px' }}>
              <img src='./assets/img/M05_IMG33.png' width='100%' />
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
