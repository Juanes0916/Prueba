import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Conocer el público</h4>
          </div>

          <h5>Conocer el público para el diseño de experiencias significativas</h5>

          <div className='unc-row unc-padding-1'>
            En este punto es necesario conseguir las herramientas para llegar y comprender a tu
            público, como lo menciona Raúl Ramos, socio director de
            <a href='http://asimetrica.org' target='_blank'> Asimétrica</a>, una consultora española
            que ayuda a las empresas creativas y culturales a tener una mejor relación con sus
            públicos. Raúl, con vasta experiencia en el asesoramiento de empresas creativas y
            culturales españolas, advierte que, para conocer tu público, primero debes acercarte
            a él.
          </div>

          <Video videoId={315158567} />

          <div className='unc-row unc-padding-1'>
            Esa comprensión y ese conocimiento son esenciales para que las empresas mejoren de
            forma continua su oferta y la conexión de ella con el público. Logrando, como lo
            mencionamos antes, no solo atraer nuevo público sino fidelizar aquel con el que su
            oferta tenga contacto al cumplir sus deseos y expectativas.
            <br /><br />

            Raúl incluso resalta que no basta con comprender y conocer el público, sino que debemos
            innovar, de forma constante, en herramientas para escucharlo.
          </div>

          <Video videoId={315160388} />

          <div className='unc-row unc-padding-1'>
            <h4>Asuntos clave para conocer el público</h4>

            Como ves, el punto de partida es conocer el cliente. Para hacerlo es necesario explorar
            aquella forma que sea más pertinente para tu emprendimiento y cliente. En esta unidad
            te mostraremos algunos asuntos clave que puedes tener en cuenta:

            <ul>
              <li><strong>Tener claridad del público.</strong></li>
              <li><strong>Estudiar el mercado.</strong></li>
              <li><strong>Utilizar las nuevas tecnologías para conocer el cliente.</strong></li>
            </ul>

            Explora estos asuntos a continuación, en esta unidad.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
