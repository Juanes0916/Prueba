import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Del conocimiento del cliente al desarrollo de la oferta</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Luego de conocer el cliente a través de las herramientas antes mencionadas, u otras,
            viene la creación de la experiencia y recorrer el camino hasta llevarla al mercado.
            Hay varias metodologías que van desde el diseño de la oferta, la mejora de una
            existente y hasta su puesta en el mercado. Aquí te presentaremos algunas que tienen una
            característica común y es que son centradas en el usuario, además, te compartiremos
            casos de quiénes las han utilizado.
          </div>

          <DegrantImage url='./assets/img/M02_IMG10.jpg' inverse>
            Te invitamos a explorar más sobre ellas, en la sección “Recursos de profundización”
            encontrarás nuestras sugerencias.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Te mostraremos una metodología para diseñar o mejorar una oferta (<i>Design
            Thinking</i>); para hacer aumentar participación en el mercado desde la redefinición
            de la oferta (<i>Growth Hacking</i>), para llevarla al mercado (<i>Lean
            Startup</i>) y para hacer ajustes rápidos (<i>Agile</i>).
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
