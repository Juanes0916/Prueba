import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Características de la narrativa transmedia</h5>

          <div className='unc-row unc-padding-1'>
            Ahora bien, para hacer mundos o universos transmediales debes saber que estos tienen
            unas características, según lo exponen las expertas en el tema Lisbeth Klastrup y
            Susana Pajares Tosca Klastrup:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='TmCollpase' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='TmHeadingOne'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#TmCollpase' href='#TmCollapseOne'
                      aria-expanded='true' aria-controls='TmCollapseOne'>
                      Mythos
                    </a>
                  </h5>
                </div>
                <div id='TmCollapseOne' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='TmHeadingOne'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Describe la historia como es; esto es, los conflictos, batallas, personajes,
                      criaturas, hechos y rumores. Es la base para generar la interacción en el
                      escenario. Ejemplo: conflicto de Superman con sujeto de otro planeta, poder:
                      vuelo, velocidad y fuerza. Salva el mundo.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='TmHeadingTwo'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#TmCollpase'
                      href='#TmCollapseTwo' aria-expanded='false' aria-controls='TmCollapseTwo'>
                      Ethos
                    </a>
                  </h5>
                </div>
                <div id='TmCollapseTwo' className='panel-collapse collapse' role='tabpanel' aria-labelledby='TmHeadingTwo'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Marca los códigos sobre lo que significa el “bien” o el “mal”. Corresponde a
                      la ética explícita e implícita del mundo. Es decir, se refiere a los códigos
                      de comportamiento que los personajes deben seguir. Resulta indispensable para
                      entender cómo comportarse en el mundo ficcionado. Ejemplo: comportamiento de
                      superhéroe, trajes y vestuario con la capacidad de solucionar.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='TmHeadingThree'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#TmCollpase'
                      href='#TmCollapseThree' aria-expanded='false' aria-controls='TmCollapseThree'>
                      Topos
                    </a>
                  </h5>
                </div>
                <div id='TmCollapseThree' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='TmHeadingThree'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Hace alusión al tiempo en el que se presenta la historia (presente, pasado y
                      futuro) y su detallada geografía. Involucra las tradiciones y el lenguaje.
                      Ejemplo: Starwars que tiene planetas, lenguajes y personajes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Es necesario tener en cuenta que el relato no sólo responde a los personajes sino al
            tiempo en el que se desarrolla y al contexto.
            <br /><br />

            Además, no basta con esa unión sino que son necesarios unos detalles adicionales que
            aquí te los explicamos:
            <br /><br />
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce más sobre las características
            de la narrativa transmedia.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            {/* TODO: Popup */}
            <div className='text-center'>
              <svg id='unc-transmedia-pie'></svg>
            </div>
          </div>


        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
