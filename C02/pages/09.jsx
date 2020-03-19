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
          <h5>¿CÓMO INNOVAR? <small>Para Luciolé es desde las tendencias</small></h5>

          <div className='unc-row unc-padding-1'>
            Hemos visto el caso de <strong>Mowies</strong> pero queremos compartirte también el caso
            de Luciolé, una tienda virtual de lámparas, en la que la innovación permite que el
            cliente encuentre su lámpara y, para ello, ofrece una gran variedad de productos para
            que el comprador no solo cree su propia unidad sino que elija el cable, el soporte
              y la bombilla.
          </div>

          <Video videoId={315232174} />

          <div className='unc-row unc-padding-1'>
            Ahora bien, la forma en la que <i>Mowies</i> y <i>Luciolé</i> lo han hecho pueden ser
            opciones por considerar en tu emprendimiento. Muestran que al innovar una opción es
            partir de identificar una necesidad no resuelta en el mercado, como es el caso
          de <i>Mowies</i>, o acude a una tendencia, como <i>Luciolé</i>.
          </div>

          <div className='unc-row unc-row-border unc-padding-2'>
            Para conocer más sobre cómo lograr innovación puedes explorar el material sugerido en la
            sección de <a href='#'><strong>Recursos de profundización</strong></a>; los módulos de
            Innovación Para Todos allí sugeridos.
            <br /><br />

            Para conocer más de tendencias puedes explorar el material sugerido en la sección
            de <a href='#'><strong>Recursos de profundización</strong></a>; los módulos de vigilancia
            tecnológica de Innovación Para Todos y los módulos ELPAUER que allí son referidos
          </div>

          <div className='unc-row unc-padding-1'>
            Con ejemplos como este, subsectores y emprendimientos de la economía creativa han
            logrado ser reconocidos no solo por generar valor económico y simbólico sino por
            impulsar la generación y uso de nuevas ideas, herramientas y tecnologías que
            representan soluciones para necesidades del mercado o del entorno social.
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
