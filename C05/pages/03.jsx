import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Qué es la transmedialidad?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Eso que hace La Fábrica, cumplir su misión a través de la entrega de una oferta en
            diferentes formatos, es el uso de lo que se ha denominado lógica transmedia y es
            pionera en ello, un proceso basado en el fraccionamiento intencionado del contenido y
            su diseminación a través múltiples plataformas, soportes y canales, ya sea de forma
            offline u online.
            <br /><br />

            Y los dos primeros productos que incorporó bajo esta lógica fueron la <a
              href='https://clubmatador.com/revista-matador/' target='_blank'> Revista
            Matador</a> y <a
              href='http://www.phe.es/' target='_blank'> Foto España</a>, como lo explica en el
            siguiente video Alberto Fesser, vicepresidente de La Fábrica.
          </div>

          <Video videoId={314996217} />

          <div className='unc-row unc-padding-1'>
            La Fábrica ha logrado que el público encuentre diferentes formas de contacto con
            Matador y Foto España, al permitirle experiencias complementarias, porque recrea un
            universo en el cual la gente puede interactuar y participar de diferentes formas.
            <br /><br />

            Lo logrado por esta experiencia es un ejemplo de transmedialidad, un término con el
            cual nos vamos a familiarizar en este módulo y al que se refiere el experto Mauricio
            Vásquez, profesor y coordinador de la Maestría en Comunicación Transmedia, de la
            Universidad Eafit:
          </div>

          <Video videoId={315093460} />

          <div className='unc-row unc-padding-1'>
            Si bien la transmedialidad ha participado en diferentes campos como el periodismo, la
            política, la publicidad, la educación y las industrias audiovisuales, también lo puede
            hacer en el sector creativo y cultural, por lo que puede convertirse en una oportunidad
            para tu proyecto, como lo recomienda Mauricio Vásquez. El siguiente gráfico muestra la
            diferencia entre cómo funcionan los medios tradicionales y cómo los transmedia.
            <br /><br />

            La narrativa transmedia exige que los usuarios completen esos vacíos de la historia, y
            participen creando nuevos relatos.
            <br /><br />

            <div className='text-center' style={{ maxwidth: '700px' }}>
              <img src='./assets/img/M05_IMG29.png' width='100%' />
            </div>
            <br /><br />

            Como vimos, la lógica transmedia se ha incorporado poco a poco en el sector creativo y
            cultural, al propiciar por medio de múltiples medios y plataformas de comunicación,
            diferentes formas de contacto del público con la creación creativa o cultural, pues una
            parte de los consumidores asume un rol activo en ese proceso de expansión o en ese
            universo de posibilidades de conexión.
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
