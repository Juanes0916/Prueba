import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import ButtonPopup from '../../components/ButtonPopup1';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Importancia del precio</h5>

          <div className='unc-row unc-padding-1'>
            La fijación de los precios tiene su importancia y existen algunas razones para ello,
            que te las describimos a continuación:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre cada ícono para ver más información</small>
          </div>

          <div className='row unc-row-icon-title'>
            <ButtonPopup
              className='col-sm-4 unc-padding-1'
              buttonClassName='pecc-121 unc-fill unc-clickeable'
              popup={{
                title: <h5>El precio es una importante herramienta de comunicación</h5>,
                content: (
                  <div>
                    <strong>Los precios tienen una naturaleza informativa, y resulta habitual
                    que los clientes utilicen este factor como referencia para evaluar la
                    calidad del producto que están considerando adquirir</strong>. De esta
                    manera, cuando el precio de la entrada a un museo, teatro, sala de conciertos,
                    etc. es elevado, o bien cuesta mucho conseguirla (hay colas muy largas,
                    tiempo de espera elevado, etc.), los públicos atribuyen un mayor valor al
                    producto. Obviamente, esta relación no se cumple siempre ni para todos los
                    consumidores, <strong>pero en la medida en que el público no cuenta con
                    información para valorar la bondad del producto que va a adquirir, el precio
                    ejerce una mayor influencia como fuente de información</strong>.
                  </div>
                )
              }}
              downTitle='El precio es una importante herramienta de comunicación'
            />
            <ButtonPopup
              className='col-sm-4 unc-padding-1'
              buttonClassName='pecc-102 unc-fill unc-clickeable'
              popup={{
                title:
                  <h5>
                    El precio es el único instrumento de marketing que proporciona ingresos.
                  </h5>,
                content: (
                  <div>
                    Es importante, por lo tanto, tener presente en qué medida el diseño del precio
                    puede determinar el ámbito financiero de la organización.
                  </div>
                )
              }}
              downTitle='El precio es el único instrumento de marketing que proporciona ingresos.'
            />
            <ButtonPopup
              className='col-sm-4 unc-padding-1'
              buttonClassName='pecc-101 unc-fill unc-clickeable'
              popup={{
                title:
                  <h5>El precio es el instrumento de marketing más flexible y una poderosa
                  herramienta competitiva.
                  </h5>,
                content: (
                  <div>
                    Ciertamente, <strong>alterar el precio de un producto es una decisión fácil de
                    aplicar, pero tanto los incrementos como las disminuciones de precios han de
                    ser comunicadas adecuadamente a los consumidores</strong>. Por ejemplo, una
                    reducción en precio del abono a un teatro puede ser entendido por el consumidor
                    como una disminución de la calidad de los espectáculos, por lo tanto, se tendrá
                    que informar sobre los motivos que generan las decisiones de precios:
                    incremento de patrocinadores, subvenciones, etc.
                  </div>
                )
              }}
              downTitle='El precio es el instrumento de marketing más flexible y una poderosa
              herramienta competitiva.'
            />
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;