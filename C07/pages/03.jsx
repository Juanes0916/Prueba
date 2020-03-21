import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Qué es una tendencia?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Aunque hablar de tendencias es un poco complejo porque puede haber tantas como
            opiniones sobre el tema, en este módulo te hablaremos de algunas que te invitamos a
            conocer, explorar y considerarlas al momento de desarrollar negocios en el sector
            creativo y cultural.
            <br /><br />

            El final del siglo XX e inicios del XXI ha estado marcado por grandes transiciones
            en poco tiempo. Es probable que a algunos de nuestros abuelos les impactara con fuerza
            la llegada de la televisión, de la electricidad o del correo postal.
            <br /><br />

            La adopción de estas tecnologías tardó mucho tiempo, pero a las personas que hemos
            vivido en las últimas décadas nos ha tocado ver al disquete sustituido por el CD, al
            CD sustituido por las memorias USB y estas memorias sustituidas por “la nube”.
            También hemos visto la evolución del celular de un solo color al de pantalla
            policromática y al nacimiento y posicionamiento arrasador de los <i>smartphone</i>.
          </div>

          <DegrantImage url='./assets/img/M06_IMG13.jpg' inverse>
            Estos cambios tecnológicos marcan un momento de transición que han visto surgir
            nuevos formatos en las industrias creativas y culturales, nuevas temáticas y nuevos
            consumidores. Son tendencias que se conectarán entre ellas en los años venideros e
            influirán con fuerza en este sector.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Los emprendedores culturales debemos ser sensibles a los cambios y una mirada macro
            debe darnos los elementos para tomar decisiones de manera rápida, pues todo está
            sucediendo en un entorno de inmediatez y transitoriedad. De allí que sea importante
            que conozcamos estas tendencias. Si Blockbuster hubiera pensado en ser el próximo
            Netflix, o Tower Records el próximo ITunes, tal vez todavía serían emprendimientos
            exitosos (Buitrago & Duque, 2013).
            <br /><br />

            Las tecnologías están cambiando nuestra forma de acceder a las artes, a la cultura y a
            la oferta cultural; es decir, está cambiando la forma de conectar a nuestras
            audiencias, de expresar nuestras ideas, de pensar en la escala de nuestros proyectos y
            de producir nuestros bienes, servicios y otros elementos de nuestra cadena de valor.
            <br /><br />

            Acción Cultural Española, una organización experta en el tema, publicó un
            <a href='https://www.accioncultural.es/es/anuario2017' target='_blank'> análisis de
            tendencias digitales en el sector cultural</a>, que te recomendamos descargar y
            estudiar las tendencias digitales en el sector cultural.
          </div>

          <DegrantImage url='./assets/img/M06_IMG17.jpg' inverse>
            Se considera que una tendencia es una corriente o una preferencia generalizada por
            la cual las personas se inclinan a preferir determinados fines o determinados medios
            por sobre otros.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Paula Rivera, fundadora de 360 TrendLab, nos habla en el siguiente videoclip de la
            relación del arte con las tendencias:
          </div>

          <Video videoId={315055868} />

          <div className='unc-row unc-padding-1'>
            Luego de aproximarte al término y conocer una empresa dedicada a ello y con foco en
            el sector, queremos compartirte algunas corrientes o tendencias que vale la pena
            considerar si deseas emprender en el sector creativo y cultural, pues identificarlas
            y gestionarlas puede representar una oportunidad. Estas son las que Paula Riveros
            nos comparte desde su experiencia:
          </div>

          <Video videoId={315058247} />

          <div className='unc-row unc-padding-1'>
            Como vimos, Paula se refiere a una tendencia muy transversal y amplia, la que nos
            ofrece la era digital o las nuevas tecnologías, cuya fortaleza se basa en la
            conectividad. Pero también nos habla de otras tendencias que puedes considerar para
            definir cómo crear y entregar al público tu oferta creativa y cultural. Este fue el
            primer grupo de tendencias que queremos compartirte.
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
