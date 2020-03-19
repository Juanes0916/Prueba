import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>La importancia de implicar a tu público</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Como lo indicó a mediados de 2011 la antropóloga mexicana Lucina Jiménez “hoy se
            reconoce cada vez más que los públicos forman parte del hecho artístico y que
            su presencia depende de una gran diversidad de factores que es necesario
            identificar y explorar, con el fin de poder establecer políticas culturales y
            estrategias de gestión contemporáneas que los pongan en el centro”.
            <br /><br />

            En este sentido, al momento de gestionar la experiencia del público y desde allí
            posibilitar su captación y fidelización, es de gran ayuda desarrollar estrategias
            de implicación.
          </div>

          <DegrantImage url='./assets/img/M04_IMG11.jpg' inverse>
            Implicar a gran escala es estratégico para la salud del sector y para la vitalidad
            cultural de las comunidades.
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
