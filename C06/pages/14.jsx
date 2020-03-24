import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';
import * as d3 from 'd3';

import Header from '../components/Header';
import PieButtons from '../../components/PieButtons';

const popups = [
  {
    title: (<h4>Relacionados con los beneficios</h4>),
    content: (
      <div>
        Fijar precios bajos con el fin de fomentar el consumo. Aquí, lo importante es que
        más gente acceda a la oferta.

        <ul className='unc-objectives'>
          <li>Beneficios aceptables</li>
          <li>Rendimiento de inversión</li>
          <li>Maximización de beneficios</li>
        </ul>
      </div>
    )
  },
  {
    title: (<h4>Relacionados con las ventas</h4>),
    content: (
      <div>
        Expandir su cuota de mercado a partir de la reducción de precios y, por lo tanto,
        del margen de beneficios, con el fin de capturar un porcentaje de la clientela de
        sus competidores y aumentar las ventas, por tanto, la cuota de mercado. Luego de captar
        esa cuota, por lo general se suele aumentar el precio. Es muy parecida a la anterior,
        sólo que busca ganar una cuota de mercado, fidelizarla y luego aumentar los ingresos.

        <ul className='unc-objectives'>
          <li>Crecimiento de ventas</li>
          <li>Aumento cuota de mercado</li>
        </ul>
      </div>
    )
  },
  {
    title: (<h4>Relacionados con el mantenimiento del equilibrio competitivo</h4>),
    content: (
      <div>
        Los competidores en el mercado alinean sus precios a los del líder y apoyan su
        estrategia en otras variables para mantener la cuota del mercado. Ocurre cuando, por
        ejemplo, en una feria o bazar todos los participantes establecen un precio mínimo del
        cual parten para que no haya competencia sino preferencias de los compradores.

        <ul className='unc-objectives'>
          <li>Equilibrio competitivo</li>
          <li>Menor importancia al precio</li>
        </ul>
      </div>
    )
  },
  {
    title: (<h4>Relacionados con la imagen corporativa</h4>),
    content: (
      <div>
        La organización que desea proyectar una imagen de calidad deberá fijar un precio alto,
        mientras que la que desea proyectar accesibilidad deberán fijar un precio bajo.

        <ul className='unc-objectives'>
          <li>Aumento de calidad</li>
        </ul>
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Fijación de precios</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Sabiendo la importancia del precio, lo que debes tener en consideración a continuación
            es cuánto cobrar.
          </div>

          <h5>Definir el objetivo asociado al precio</h5>

          <div className='unc-row unc-padding-1'>
            Para definir cuánto cobrar se debe considerar cuál es el objetivo principal que quieres
            lograr con el precio y, desde allí, diseñar la estrategia de fijación. En el gráfico
            que verás a continuación puedes ver los objetivos asociados a la fijación de precios:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce más sobre los objetivos
            asociados a la fijación de precios.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='unc-row text-center'>
              <PieButtons
                textData={[
                  ['Relacionados con', 'los beneficios'],
                  ['Relacionados con', 'las ventas'],
                  ['Relacionados con el mantenimiento', 'del equilibrio competitivo'],
                  ['Relacionados con', 'la imagen corporativa'],
                  ['Objetivos sobre', 'los precios']
                ]}
                color={d3.scaleOrdinal(['#35387f', '#666db1', '#9a9bcb', '#666db1'])}
                lastCenter={true}
                popups={popups}
              />
            </div>
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
