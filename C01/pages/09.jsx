import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Popup } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>Corporación Cultural Nuestra Gente</h4>),
    content: (
      <div>
        <i>Una marca Española de moda sostenible</i>
        <br />
        (<a href=' http://www.ecoalf.com' target='_blank'>http://www.ecoalf.com</a>)
        <br /><br />

        <strong>Impacto social</strong>: Su fin es reducir el impacto negativo que genera
        la industria de la moda y el uso indiscriminado de los recursos naturales. Ha sido
        catalogada como una de las mejores empresas del mundo por su compromiso y calidad. A
        través de la tecnología y el I+D, revoluciona la idea de materia prima creando una nueva
        generación de productos sostenibles de la más alta calidad, demostrando que no es
        necesario seguir abusando de los recursos naturales del planeta. Además de su impacto
        ambiental positivo, Ecoalf tiene unos principios de compromiso social que transmite a sus
        proveedores, los cuales deben contar con certificaciones de responsabilidad social como
        BSCI o SA8000. De igual modo, se ha comprometido con los derechos humanos y laborales
        de sus empleados.
        <br /><br />

        <strong>Producto final</strong>: chaquetas con botellas de plástico desechadas
      </div>
    )
  },
  {
    title: (<h4>Corporación Cultural Nuestra Gente</h4>),
    content: (
      <div>
        <i>Lleva 30 años ejecutando de forma permanente procesos que contribuyen al desarrollo
        local de la comuna 2 (Santa Cruz), es ejemplo de trabajo comunitario, humano y social,
        porque se ha convertido en una opción de vida para niñas, niños, jóvenes, adultos y
        adultos mayores de ese sector del nororiente de Medellín.</i>
        <br />

        (<a href=' http://www.nuestragente.com.co' target='_blank'>http://www.nuestragente.com.co</a>)
        <br /><br />

        La Corporación ha ampliado en la gente el sentido de lo bello, del ser, del sentir y del
        estar juntos de manera respetuosa, mediante propuestas artísticas de teatro, música,
        danza, literatura, de comunicación, planeación del territorio, activación y recuperación
        de la memoria viva y valoración del patrimonio cultural.
        <br /><br />

        <strong>Impacto social</strong>: La promoción y fomento de los valores artísticos y
        creativos de la comunidad y la promoción de espacios de convivencia pacífica y de respeto,
        la valoración de la diversidad y el diálogo intercultural y social.
        <br /><br />

        <strong>Producto final</strong>: Para lograr esos objetivos se basa en estrategias como
        intercambios, seminarios, foros, muestras, actos de la memoria, barricadas de historias,
        jornadas amarillas, comparsas, festivales y encuentros artísticos.
      </div>
    )
  },
  {
    title: (<h4>4YOU2</h4>),
    content: (
      <div>
        <i>Escuela de inglés que actúa en asociación con organizaciones no gubernamentales en
        regiones periféricas de Brasil y utiliza una estrategia sencilla: paga un alquiler a las
        ONG-sede, por el uso de espacios ociosos, lo que genera una fuente de ingresos para esas
        entidades que viven de donaciones y aporta profesores extranjeros que vienen de todo el
        mundo a enseñar inglés, como parte de un intercambio social y voluntario.</i>
        <br />

        (<a href=' http://www.4Y2.org' target='_blank'>http://www.4Y2.org</a>)
        <br /><br />

        Ellos viven de la comunidad y aprenden sobre el espíritu empresarial. A los alumnos
        les ofrecen el curso a menor costo y cerca de su residencia.
        <br /><br />

        <strong>Impacto social</strong>: Contribución con ONGs y acceso a la educación de
        calidad.
        <br /><br />

        <strong>Producto final</strong>: Formación en ingles e intercambio social.
      </div>
    )
  },
  {
    title: (<h4>Pasolini</h4>),
    content: (
      <div>
        <i>Organización que combina la antropología compartida, la etnografía visual, el cine
        de poesía y la comunicación para el cambio social, con el propósito de promover el uso
        de la narración, la creatividad y el diálogo como herramientas para la transformación
        personal y social. A lo largo de más de ochenta producciones ha consolidado diferentes
        líneas de reflexión conceptual y estética, en las que se destacan paisajes y sujetos
        de los barrios populares de la ciudad, trabajos en torno del patrimonio, construcción
        de las memorias del conflicto armado; juventud, músicas urbanas, presencia
        afrodescendiente, género y sexualidades.</i>
        <br />

        (<a href=' http://pasolinienmedellin.org' target='_blank'>http://pasolinienmedellin.org</a>)
        <br /><br />

        <strong>Impacto social</strong>: Fortalecer propuestas que tiendan a la construcción de
        ciudadanías críticas, a la recuperación de la memoria, al fomento de narrativas locales,
        al encuentro intergeneracional e intercultural, la exploración de estéticas emergentes
        y el empoderamiento de las comunidades.
        <br /><br />

        <strong>Producto final</strong>: Documentales.
      </div>
    )
  }
];


const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Cómo han capitalizado el impacto social empresas del sector creativo y cultural?</h5>

          <div className='unc-row unc-padding-1'>
            Para finalizar, te mostraremos ejemplos locales e internacionales de empresas creativas
            y culturales que han logrado permanecer en el mercado y en las que el impacto social no
            solo es un aspecto fundamental para ellas sino desde el cual son reconocidas en el
            mercado:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>
              Haz clic en los componentes del mapa interactivo para conocer más sobre impacto
              social
            </small>
          </div>

          <div
            className='unc-row unc-row-bgfull unc-row-list unc-padding-1'
            style={{ backgroundImage: 'url(./assets/img/M00_IMG14.jpg)' }}
          >
            <div className='unc-list-border'>
              <div className='row'>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[0])}>1</span>
                  <h5>Ecoalf</h5>
                </div>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[1])}>2</span>
                  <h5>Corporación Cultural Nuestra Gente</h5>
                </div>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[2])}>3</span>
                  <h5>4YOU2</h5>
                </div>
                <div className='col-sm-3'>
                  <span onClick={() => Popup.open(items[3])}>4</span>
                  <h5>Pasolini</h5>
                </div>
              </div>
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
