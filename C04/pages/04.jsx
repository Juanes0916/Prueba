import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Activos intangibles</h5>

          <div className='unc-row unc-padding-1'>
            Los <i>activos intangibles</i>, son la sumatoria de saberes con las que cuenta una
            organización y que le permiten construir, interactuar y producir su gran capital de
            trabajo; es decir, no son monetarios sino utilizados para el desarrollo de productos
            específicos que, a su vez, aportan al crecimiento económico.  El argentino <i>Horacio
            Krell</i>, director de <i>Ilvem</i>, reúne los activos intangibles en tres grandes
            grupos: <i>el capital humano</i>, <i>el capital estructural</i> y <i>el capital
            relacional</i> y los desarrolla de la siguiente manera:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M01_IMG11.jpg',
                label: (
                  <div>
                    <h5>Capital humano</h5>

                    No le pertenece a la empresa pero es el que cuenta con el conocimiento
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG11.jpg',
                label: (
                  <div>
                    <h5>Capital estructural</h5>

                    Krell hace referencia al conjunto de patentes, Marcas, bases de datos,
                    plataformas tecnológicas u otro tipo de recursos de información con los que
                    cuenta cada empresa. Para el caso del sector creativo y cultural donde se
                    incluye lo social suelen ser las metodologías propias de trabajo que permiten
                    hacer diferentes tipos de intervenciones e interacciones con distintas
                    comunidades.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG11.jpg',
                label: (
                  <div>
                    <h5>Capital relacional</h5>

                    Se refiere a la capacidad de cada organización de establecer relaciones
                    directas y efectivas, con tomadores de decisiones, patrocinadores o posibles
                    socios potenciales que lleven al desarrollo de nuevas iniciativas, proyectos
                    o productos.
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
