import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCollapse,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const panels = [
  {
    title: 'La sistematización',
    content: (
      <div className='unc-padding-1'>
        Te permitirá reconocer el conocimiento que tienes tu organización.
      </div>
    )
  },
  {
    title: 'La evaluación',
    content: (
      <div className='unc-padding-1'>
        Te permitirá identificar las posibilidades de capitalización de tu
        conocimiento o de su transformación.
      </div>
    )
  },
  {
    title: 'El marco normativo',
    content: (
      <div className='unc-padding-1'>
        Te permitirá promover el quehacer de tu emprendimiento y proteger tus
        activos, sobre todo, si deseas realizar una explotación económica de ellos.
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
            <h4>Hablemos de la gestión de activos que se soportan en conocimiento</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            El conocimiento y su aplicación en empresas del sector creativo y cultural aportan a
            su sostenibilidad económica, es decir, a las condiciones financieras que permiten a
            una empresa mantenerse a lo largo del tiempo. Sin embargo, la sostenibilidad de las
            empresas también está dada por las condiciones que ellas mismas interaccionan con el
            fin de ser respetuosas y reflexivas con el uso de los recursos.
          </div>

          <DegrantImage url='./assets/img/M01_IMG28.jpg'>
            El conocimiento no es solo un capital activo para el diseño. Es también parte activa
            del propósito de las empresas culturales. Su uso, gestión y desarrollo aseguran la
            sostenibilidad, tanto para la empresa como para los procesos, motivaciones e
            intencionalidades de su hacer.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Por lo anterior, es importante que gestiones los activos de tu emprendimiento asociados
            con el conocimiento, es decir, que la industria cultural y creativa tenga sus propias
            formas de dar a conocer y administrar las actividades relacionadas con el conocimiento.
            <br /><br />

            Según el <strong>PNUD</strong>, esas actividades son: creación, captura, transformación
            y uso y, con base en ellas, te proponemos varias herramientas que puedes utilizar para
            la gestión de tus activos:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module03' panels={panels} />
          </div>

          <br />
          <div className='unc-row unc-padding-1'>
            Para iniciar hablemos de sistematización y evaluación, pero para hacerlo, qué mejor
            manera que en las palabras del experto Juan Felipe Aramburo, de la Fundación
            Proantioquia, quien nos dice la importancia de sistematizar y evaluar:
          </div>

          <Video videoId={315150515} />

          <div className='unc-row unc-padding-1'>
            La sistematización es pues un factor clave en la gestión y transferencia del
            conocimiento y permite la reflexión e interpretación analítica del hacer,
            para su producción y difusión.
            <br /><br />

            Y la evaluación es un momento que transversaliza todo el proceso, proyecto o práctica,
            con el fin de direccionar el hacer, posibilitar la toma de decisiones y el
            fortalecimiento empresarial.
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
