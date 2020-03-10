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
          <h5>E-mail 3.0</h5>

          <div className='unc-row unc-padding-1'>
            El E-mail continúa siendo la forma de comunicación preferida por los consumidores,
            sumado al complejo escenario de la publicidad digital, vemos como tendencia para este
            2018, un crecimiento en la creación de comunidades por parte de las marcas, sumado a
            mensajes mucho más inteligentes basados en el comportamiento de los usuarios tanto
            offline como online. Para esto, las marcas comenzarán dando sus primeros pasos con
            herramientas de machine learning (aprendizaje automático), generando e-mails
            personalizados y totalmente automatizados.
        </div>

          <div className='unc-row unc-row-border unc-padding-2'>
            Por lo tanto, sugiere establecer:
          <br /><br />

            <ul>
              <li>Segmentación de bases de datos. Una tendencia es segmentar por generaciones.</li>
              <li>Generar Small Data (quién es nuestra base de datos), antes de pasar al <i>Big
              Data</i> (conocer sus gustos, qué ven, a qué le dan clic, cómo lo hacen, dónde lo
                hacen).
            </li>
              <li>No hacer bulk mail (envíos masivos), hay que enviar los e-mails basados en las
                interacciones de cada grupo de usuarios
            </li>
            </ul>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
