import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Cómo y por qué innovar en las empresas creativas?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            <strong>Mowies</strong> es un claro ejemplo de cómo y por qué innovar en las empresas
            creativas y culturales y cómo esa innovación no solo está alineada con el propósito de
            impacto de la empresa, en este caso la posibilidad de que los creadores puedan mostrar
            sus obras y difundirlas generando ingresos para ellos.
            <br /><br />

            <strong>Mowies</strong> nació de la obsesión de Alejandro por contar historias y, a la
            vez, producir recursos que garanticen la sostenibilidad económica de la empresa:
          </div>

          <Video videoId={315255340} />

          <div className='unc-row unc-padding-1'>
            Esta idea está alineada con la doble naturaleza de los emprendimientos creativos y
            culturales: económica (deben generar riqueza y empleo, o sea, valor cuantitativo), y
            cultural (deben generar valores, sentido e identidades, o sea, tienen un valor
            simbólico).
            <br /><br />
            Ahora, la clave aquí es que este ejemplo sirva como referente para quienes están en el
            sector y deseen explorar con la innovación como fuente de sostenibilidad económica de
            su emprendimiento. Para ello, a través de este caso haremos una aproximación sobre qué
            es innovación, para qué innovar y en qué aspectos puede hacerse una innovación
            desde un emprendimiento.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
