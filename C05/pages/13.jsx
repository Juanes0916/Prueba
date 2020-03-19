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
            <h4>Reflexionemos sobre transmedialidad</h4>
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M05_IMG23.jpg',
                label: (
                  <div>
                    Esa obsesión por hacer las cosas bien, por hacerlas cada día mejor y
                    por vincular a más públicos, le han permitido a La Fábrica, el ejemplo
                    con el que iniciamos este módulo, ir a la vanguardia de la madre de todas
                    sus batallas: mantenerse vigente en un mercado cada vez más exigente y
                    diversificado.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M05_IMG04.jpg',
                label: (
                  <div>
                    Recuerda, en el mundo creativo y cultural la transmedia abre universo de
                    posibilidades en las que se puede llevar al público no solo un producto sino
                    todas aquellas creaciones que surgen antes durante y después de la entrega de
                    tu oferta al público. Que además pueden ser entregados en diferentes
                    formatos, lo cual posibilita que al final se llegue a más públicos.
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
