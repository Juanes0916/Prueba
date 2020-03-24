import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Reflexionemos sobre la implicación de públicos</h4>
          </div>

          <div className='unc-row'>
            <UDCarousel className='unc-filter' steps={[
              {
                bgImage: './assets/img/M04_IMG33.jpg',
                label: (
                  <div>
                    En sus esfuerzos por atraer y retener al público, cada vez más
                    creadores y organizaciones creativas y culturales están
                    experimentando con numerosas formas innovadoras de captación,
                    formación, fidelización y participación, en lo cual implicar
                    los públicos resulta un elemento clave.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M04_IMG10.jpg',
                label: (
                  <div>
                    Por último, queremos invitarte a no hacer en soledad el
                    desarrollo de tus estrategias de implicación de públicos, pues
                    la experiencia indica que los procesos ganan consistencia en
                    tanto involucran a distintos agentes del mismo ecosistema; es
                    decir, las sinergias son fundamentales para capitalizar esta
                    idea.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M04_IMG10.jpg',
                label: (
                  <div>
                    Muchas de estas estrategias de precio y otras que hemos visto
                    estan basadas en el uso inteligente de los datos desde este
                    programa. Animamos a que todos los proyectos sean
                    respuestuosos con las leyes de protección de datos porque es
                    la mejor forma implicar tus públicos.
                  </div>
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
