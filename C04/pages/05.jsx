import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Activos de conocimiento</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, es importante saber que cuando estos activos intangibles se transforman en un
            producto final y se materializan en elementos concretos, los llamaremos activos de
            conocimiento. Y se podrían definir tantos tipos como industrias o empresas creativas
            haya.
            <br /><br />
            Esos activos de conocimiento tienen unas características, que te las explicaremos a
            continuación:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M01_IMG08.jpg',
                label: (
                  <div>
                    Su realización implica un ejercicio de creación intelectual, es decir, son
                    la materialización de una propuesta conceptual.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG08.jpg',
                label: (
                  <div>
                    Responden a un proceso de realización intencionada y en la medida de lo
                    posible susceptible de ser documentada.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG08.jpg',
                label: (
                  <div>
                    Logran concretar y materializar procesos conceptuales de intangibles en
                    productos con formatos claramente definidos.
                  </div>
                )
              }
            ]}
            />
          </div>
          <br /><br />

          <DegrantImage url='./assets/img/M01_IMG25.jpg' inverse>
            TEN EN CUENTA QUE: En la perspectiva del sector creativo y cultural el valor de los
            emprendimientos está dado por la suma de los activos intangibles, los activos de
            conocimiento y los activos económicos, pero los dos primeros son los que determinan,
            en buena medida, la capacidad de cada organización de mantenerse a lo largo del tiempo.
          </DegrantImage>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
