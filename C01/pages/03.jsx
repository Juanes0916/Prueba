import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>El impacto social es el mayor aporte de las empresas creativas y culturales</h4>
          </div>

          <h5>Economía creativa y transformación social</h5>

          <div className='unc-row unc-padding-1'>
            Hace décadas asistimos a grandes cambios en las concepciones y paradigmas sociales. En
            este sentido, la cultura ha jugado dos papeles fundamentales: por un lado, es la base
            del entendimiento por la cual se rigen nuestras nociones mentales y, por el otro, tiene
            un carácter dinámico que, en general, estructura lo que conocemos como sociedad, al
            influir en nuestros hábitos y en la manera en que entendemos y nos relacionamos con el
            mundo. Conoce cómo se relacionan los conceptos de cultura y economía creativa con el
            siguiente recurso gráfico.
            <br />

            <div className='text-center'>
              <img src='./assets/img/M01_IMG50.jpg' alt='Cultura y economía creativa' />
            </div>
            <br />

            Ahora bien, sobre lo antes expuesto debemos tener en cuenta dos cosas. Primero, que el
            ser y el hacer de las empresas creativas y culturales que podemos decir participan en
            lo que John Howkins denominó economía creativa, va más allá de las ventas, los ingresos
            y las utilidades económicas en beneficio de la sostenibilidad de sus propietarios, su
            objetivo principal es dar respuesta a las necesidades de transformación social o
            mitigar los daños de esas mismas transformaciones; esto es, generar impacto social.
            <br /><br />

            Segundo, que la industria y las empresas creativas y culturales, cuentan con una
            herramienta expedita para generar impacto en la sociedad, es decir, para influir,
            mitigar o cambiar esa cultura: el conocimiento. Por eso, para el sector creativo y
            cultural, está en juego siempre la generación de conocimiento, según plantea Juan
            Felipe Aramburo, coordinador de la Línea de Formación Educativa, de la Fundación
            Proantioquia.
          </div>

          <DegrantImage url='./assets/img/M00_IMG11.jpg' inverse>
            En esta unidad profundizaremos más sobre el primer punto; el impacto social en las
            empresas creativas y culturales. El segundo punto y aspectos relacionados con su
            gestión y protección podrás explorarlo en el módulo
            <a href='/mis-contenidos/portada/52' target='_blank'>“Gestionar los intangibles, un
            asunto clave para la sostenibilidad económica de tu emprendimiento”</a>.
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
