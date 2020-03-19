import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Conoce aquí los casos más comunes de no protección de creaciones</h5>

          <div className='unc-row unc-padding-1'>
            Las expertas de <strong>Grupo Crea</strong> nos comparten los casos más comunes que
            acompañan en lo que tiene que ver con la protección de creaciones en el sector
            creativo y cultural.
          </div>

          <Video videoId={318945530} />

          <DegrantImage url='./assets/img/M01_IMG09.jpg'>
            El Derecho de la Propiedad Intelectual resulta ser una herramienta vital para la
            gestión cultural, porque ¿cómo sería posible gestionar cultura, sin saber cómo se
            protegen muchos de los bienes inmateriales que la conforman.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Es vital para un gestor cultural, no solo conocer cómo proteger su creación, sino
            difundir, asesorarse y capacitarse en estos temas.
            <br /><br />

            Es necesario considerar el concepto de industria cuando se habla de cultura, pues no
            puede estar ligado ni a la producción en masa ni a efectos puramente de remuneración
            económica. La cultura genera muchos bienes que por sí mismos no son apropiables y,
            por lo tanto, el Derecho de la Propiedad Intelectual no puede predicar de ellos una
            exclusividad en el dominio. Hay bienes culturales que pertenecen a todos y así deben
            identificarse.
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
