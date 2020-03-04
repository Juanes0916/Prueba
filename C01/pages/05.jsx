import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Impacto social en negocios del sector creativo y cultural</h5>

          <div className='unc-row unc-padding-1'>
            Para poner en contexto este asunto es bueno mostrarlo con ejemplos y, para el caso, hay
            uno muy claro: <a href='http://lacasadecarlota.com' target='_blank'>
              La Casa de Carlota</a>.
            <br /><br />

            Se trata de una extraordinaria combinación de talentos diferentes y, a la vez,
            complementarios, que permite ofrecer a clientes soluciones de diseño innovadoras,
            frescas y distintas, al punto que esta idea se ha convertido en un referente de
            innovación e impacto social en el ámbito mundial.
            <br /><br />

            El impacto social de <strong>La Casa de Carlota</strong> se mide en la inclusión,
            representada en un equipo de trabajo, conformado por diseñadores y creativos que, en
            situaciones habituales, podrían sufrir una discriminación laboral, pero que en este
            caso entregan con su talento un producto final de calidad, consistente en campañas
            publicitarias y diseños gráficos profesionales, como lo expresa en el siguiente
            videoclip Nelson Correa, uno de los ejecutivos de Medellín:
          </div>

          <Video videoId={315327561} />

          <div className='unc-row unc-padding-1'>
            ¿Qué representa para uno de sus creativos trabajar en La Casa de Carlota? Esta es la
            opinión de Manuela Mejía:
          </div>

          <Video videoId={315329382} />

          <div className='unc-row unc-padding-1'>
            La idea de reunir talentos diferentes, con mentes diferentes -no discapacitadas- nació
            como un experimento que, poco a poco, se convirtió en todo un acontecimiento, como dice
            Joan Teixidó, director creativo de La Casa de Carlota, España:
          </div>

          <Video videoId={315267349} />

          <div className='unc-row unc-padding-1'>
            En muchos escenarios, como el que plantea la Casa de Carlota, este tipo de empresas,
            con este impacto social, cobran mayor relevancia que las instituciones estatales porque
            no solo son sostenibles sino que son relevantes.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
