import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Tendencias que marcan el curso de 2017 – 2018</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            A continuación, relacionaremos las tendencias que las más importantes agencias
            digitales de marketing establecieron para el 2017 y 2018:
          </div>

          <div className='unc-row'>
            <div id='Collapse_4' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_4' href='#Collapse_4One'
                      aria-expanded='true' aria-controls='Collapse_4One'>
                      Economía de plataformas
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_4One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Los ecommerce y las tiendas online cada vez son más populares, porque lo que
                      conocemos como ventas por internet hacen que esta tendencia se posicione cada
                      vez más y con mayor frecuencia, gracias a sus facilidades de compra,
                      múltiples opciones de pago y entregas relámpago.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Two' aria-expanded='false' aria-controls='Collapse_4Two'>
                      Súper contenidos
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_4Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      En esta tendencia aplica la ley “mayor calidad, menor cantidad”, porque el
                      marketing de contenidos de las marcas está alineado con los temas de
                      conversación de los usuarios de esas marcas, al hacer de ese marketing un
                      lugar en redes sociales donde el contenido web demostrará su eficacia por
                      medio del análisis de data, gracias al comportamiento de los usuarios.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Three' aria-expanded='false' aria-controls='Collapse_4Three'>
                      El boom del comercio social y móvil
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_4Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Una vez más somos testigos de cómo el comercio electrónico se posiciona día
                      a día en nuestra cotidianidad. Los pagos con el móvil, las compras online y
                      por internet van consolidando sistemas y comunidades en las que los usuarios
                      pueden interactuar, hacer transferencia, consumir contenido e
                      intercambiar experiencias.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Four' aria-expanded='false' aria-controls='Collapse_4Four'>
                      Inteligencia artificial
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_4Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Más cerca de lo que imaginamos, la inteligencia artificial está presente en
                      muchas de nuestras actividades diarias revolucionando y generando nuevos
                      sistemas que permitan procesar la información mucho más rápido, si aún no lo
                      crees, pregúntale a Siri.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
