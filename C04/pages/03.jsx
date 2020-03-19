import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const panels = [
  {
    title: 'El conocimiento es intangible',
    content: (
      <div className='unc-padding-1'>
        Esto significa que no es fácilmente medible o transaccionable, sino que se
        manifiesta de forma no contable.
      </div>
    )
  },
  {
    title: 'El conocimiento genera valor',
    content: (
      <div className='unc-padding-1'>
        Aunque no pueda contarse, el conocimiento genera valor o ayuda a construir
        riqueza.
      </div>
    )
  },
  {
    title: 'El conocimiento connatural al ser humano',
    content: (
      <div className='unc-padding-1'>
        Tanto niveles macro como las grandes construcciones científicas como nivel
        micro desde prácticas ancestrales.
      </div>
    )
  },
  {
    title: 'El conocimiento induce a la acción',
    content: (
      <div className='unc-padding-1'>
        Entre más saber haya existirá mayor claridad para ejecutar acciones concretas.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Los intangibles, el principal recurso de los negocios creativos y culturales</h4>
          </div>

          <h5>El conocimiento como principal capital de las empresas creativas y culturales</h5>

          <div className='unc-row unc-padding-1'>
            En algunas de las empresas convencionales suele ser fácil identificar el “producto” que
            elaboran o fabrican; por ejemplo, una industria de concreto desarrolla productos
            asociados con el cemento, lo que no ocurre con tanta facilidad en el sector creativo y
            cultural, donde las empresas no se dedican a manufacturar sino a crear.
            <br /><br />

            Allí, lo importante es reconocer y gestionar el capital que les permite la creación de
            su oferta; es decir, el conocimiento, porque las empresas culturales y creativas basan
            buena parte de sus acciones en el conocimiento y en la aplicación de distintos tipos de
            saberes, ambos como factores diferenciales.
            <br /><br />

            Para entender más a profundidad esta cuestión nos acercaremos primero a entender qué es
            el conocimiento. Si bien hay varias definiciones, muchas de ellas complejas, para este
            sector lo denominaremos como:
          </div>

          <DegrantImage url='./assets/img/M01_IMG21.jpg' inverse>
            “La mezcla de experiencia, valores, información y saber-hacer (<i>know-how</i>), que
            sirve como marco para la incorporación de nuevas experiencias e información, y es útil
            para la acción”, según lo plantea el Programa de Naciones Unidas para el Desarrollo
            (PNUD).
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Con base en esa definición, es claro que ese conocimiento tiene algunas
            características, pero la principal es que es intangible y veamos por qué:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module03' panels={panels} />
          </div>

          <div className='unc-row unc-row-bgfull unc-bgfull-contain unc-padding-2 text-center'
            data-url='./assets/img/M03_IMG_BG_FULL_V.png'>
            <h5>El conocimiento, como principal capital de las empresas creativas y culturales, da
              lugar a activos intangibles y activos de conocimiento.</h5>
          </div>

          <div className='unc-row unc-padding-1'>
            Por todo esto, el conocimiento da lugar a <strong>activos
            intangibles</strong> y <strong>activos de conocimiento</strong> que son, a su vez, el
            gran capital de las empresas culturales y creativas y de ellos depende su valor como
            organización y su posibilidad de permanecer a lo largo del tiempo.
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
