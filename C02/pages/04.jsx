import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Ahora hablemos de innovación</h4>
          </div>

          <h5>Qué es innovación</h5>

          <div className='unc-row unc-padding-1'>
            Lo primero que debes saber es que, aunque entre los siglos XVI y XIX la innovación
            tuvo, en algunos casos, una connotación negativa, solo empezó a tener una connotación
            positiva en 1935 cuando el economista austriaco Joseph Schumpeter (1883-1950)
            plantearía que todo proceso de producción debería llevar implícito otro proceso de
            innovación que le permitiera diferenciarse y competir en el mercado.
            <br /><br />
            Además, es un término que ha sido definido por diferentes autores y sobre el cual
            puedes explorar más en dos manuales: el de Frascati y el de Oslo. El primero, de 1963,
            actualizado en 2002, contiene definiciones básicas y categorías de actividades
            consideradas por la comunidad científica como de Investigación y Desarrollo.
            <br /><br />
            Y el de Oslo es una guía para la realización de mediciones y estudios de actividades
            científicas y tecnológicas que definen conceptos y clarifican las actividades
            consideradas innovadoras.
          </div>

          <DegrantImage url='./assets/img/M03_IMG05.png'>
            La innovación puede ser entendida como la capacidad de “estructurar una idea y
            traducirla en un producto o servicio, que tenga impacto positivo en el mercado”, como
            lo dice un estudio de la Universidad de Antioquia, de 2012, en el que esta concepción
            asume que, si no hay una aceptación en un mercado, no hay innovación, por más
            novedosas y originales que sean las soluciones que genera.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Esto está muy alineado con la concepción de <i>Schumpeter</i>, de que un buen
            empresario no es quien monta una empresa ni es el capitalista dueño del dinero, ni un
            técnico, sino aquel que tiene capacidad e iniciativa para proponer y realizar nuevas
            combinaciones de medios de producción; es decir, la persona con capacidad para generar
            y gestionar innovaciones dentro de las organizaciones o fuera de ellas.
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
