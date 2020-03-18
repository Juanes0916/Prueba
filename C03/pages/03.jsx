import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>El reto: el proyecto en términos de valor</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Luego de tener un objetivo de desarrollo de negocio en el sector creativo y cultural,
            al cual es posible que no solo tengas asociados objetivos de negocio sino de impacto y
            de intereses personales, a menudo nos enfrentamos con el reto de lograr que nuestra
            oferta tenga un impacto positivo en el mercado, lo cual se traduce en que sea demandada
            por este último, asunto clave en la sostenibilidad económica de un negocio.
            <br /><br />

            En este sentido, Alberto Fasser el director de La Fábrica, una organización del sector
            creativo y cultural que lleva más de 20 años entregando su oferta al público y logrando
            su acogida, sugiere que debemos pensar nuestro proyecto en términos de valor. Veamos
            a qué se refiere.
          </div>

          <Video videoId={315156381} />

          <div className='unc-row unc-padding-1'>
            Este es uno de los retos que enfrentamos en la consolidación de un emprendimiento y, en
            especial, en los asociados al sector creativo y cultural, pues debemos encontrar la
            conexión entre nuestra creación y propuesta creativa y cultural con el público, con
            miras a que ello nos permita no solo la atracción del público sino también su
            fidelización; por eso, para superar este reto, lo primero que debes hacer es conocer
            bien el público al que está dirigida tu oferta.
            <br /><br />

            A la comprensión del cliente se suma un asunto importante: en el sector creativo y
            cultural no solo hablamos de productos y servicios sino de
            <strong> experiencias</strong>; por lo tanto, enfrentamos otro reto que incide sobre
            el logro del antes planteado, y es: <i><strong>crear experiencias relevantes para los
            usuarios y que, a su vez, generen relaciones de valor con ellos</strong></i>.
          </div>

          <DegrantImage url='./assets/img/M02_IMG05.jpg' inverse>
            Más que productos culturales y creativos hay que diseñar experiencias, algo que la
            gente quiera compartir con otros y que se involucren emocionalmente en la construcción
            y divulgación de una propuesta.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            En este módulo te compartiremos no solo desde la teoría sino desde la experiencia de
            diferentes actores, aspectos que puedes tener en cuenta para enfrentar estos dos retos.
            Primero hablaremos de la creación de experiencias y luego de la comprensión del
            cliente. Esperamos que trabajar de manera articulada en ambos retos sea clave para la
            consolidación y éxito de tu negocio en el sector creativo y cultural.
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
