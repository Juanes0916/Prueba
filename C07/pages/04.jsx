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
            <h4>Macrotendencias relacionadas por WGSN</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            La empresa <a href='https://lp.wgsn.com'>WGSN</a> es un proveedor líder de información
            estratégica. Lo que hace es estudiar las macrotendencias sociales, políticas,
            económicas y de moda, para determinar qué temas (o estados mentales, como le llaman
            ellos) predominarán en los próximos años. Investiga pensando en los próximos dos, cinco
            y diez años e incluye datos duros -el famoso <i>big data</i>– y una cuestión más
            “anímica” de la sociedad.
            <br /><br />

            Fue fundada en 1998, en Londres, Inglaterra, por los hermanos Julian y Marc Worth,
            aunque en 2005 una empresa de exposiciones se las compró por 140 millones de libras.
            <br /><br />

            En la actualidad, WGSN anticipa así cuatro grandes estados mentales o macrotendencias:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce cuatro estados mentales o
            macrotendencias.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            {/* TODO: D3 */}
            <div className='text-center'>
              <svg id='unc-macrotendencias-pie'></svg>
            </div>
          </div>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page >
);

export default CustomPage;
