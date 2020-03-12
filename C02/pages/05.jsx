import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Has escuchado hablar de innovación social?</h5>

          <div className='unc-row unc-padding-1'>
            Así como la economía creativa, el tema de la innovación ha tomado gran relevancia en
            las últimas décadas, debido a su posibilidad de aportar al desarrollo en ciencia y
            tecnología, y de paso, al crecimiento económico, como lo plantea un estudio de 2014 de
            las expertas de la Universidad de Santiago de Compostela, España, Ana María Porto
            Castro y Maria Josefa Mosteiro García.
            <br /><br />
            En este sentido, algunos subsectores y emprendimientos de la economía creativa han
            logrado ser reconocidos, no solo por generar valor económico y simbólico en sus
            territorios, sino por promover la innovación al impulsar la generación y uso de nuevas
            ideas, herramientas y tecnologías que representan soluciones para necesidades del
            mercado o del entorno social, dice el informe mundial de la UNESCO, de 2013.
            <br /><br />
            Estrechamente relacionado con la creación de soluciones para un entorno social algunos
            teóricos hablan de innovación social, conoce el concepto de innovación social con el
            siguiente recurso gráfico:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del mapa interactivo para conocer más sobre
            innovación social
            </small>
          </div>

          <div className='unc-row text-center'>
            { /* TODO: D3 */}
            <svg id='unc-innovacion-social-pie'></svg>
          </div>

          <div className='unc-row unc-padding-1'>
            A pesar de esto, muchas iniciativas culturales y creativas desconocen o son reacias
            ante procesos de innovación de los que podrían sacar provecho y elevar aún más el valor
            generado para los territorios en los que se desenvuelven y, a veces, están incluso
            innovando sin darse cuenta.
            <br /><br />
            Así es que si tienes un proyecto o emprendimiento en el sector creativo y cultural que
            quieres hacer sostenible en el ámbito económico, te invitamos a evaluar cómo la
            innovación puede permitirte lograrlo.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
