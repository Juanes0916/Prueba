import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Captar y fidelizar públicos</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            El conocimiento del público para el cual trabajan las empresas creativas
            y culturales les permite comprender su comportamiento, sus rasgos más
            singulares y sus gustos más personales como punto de partida para
            diseñar y mejorar la oferta que se entrega.
          </div>

          <DegrantImage url='./assets/img/M04_IMG14.jpg' inverse>
            En el módulo Conocimiento del Cliente podrás encontrar más información
            al respecto.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Sin embargo, en el marco de la entrega de nuestra oferta llega el reto
            de captar y fidelizar nuestro público, lo cual implica su satisfacción
            con la oferta entregada y, por lo tanto, incide en la sostenibilidad de
            nuestro negocio.
            <br /><br />

            La situación en la que nos encontramos en el sector creativo y cultural
            es una disyuntiva, porque abre interrogantes sobre cómo convocar a
            nuevos públicos para darles un papel más protagónico e integrar de
            manera concreta a aquellos que solo eran vistos como destinatarios.
            <br /><br />

            ¿Qué debemos hacer para lograrlo?; un asunto importante en este punto es
            gestionar las interacciones que nuestro público tiene con el producto,
            servicio o experiencia.
            <br /><br />

            Y cómo se hace, sencillo, por medio de lo que se conoce como la gestión
            de la experiencia del cliente (Customer Experience Management; a veces,
            denominado como CEM), una propuesta estratégica para superar situaciones
            en las que los productos o servicios son ofrecidos para un público
            determinado.
          </div>

          <DegrantImage url='./assets/img/M04_IMG08.jpg' inverse>
            La compañía estadounidense Gartner, líder en investigación y asesoría
            en esta materia, con más de 40 años de experiencia, explica el CEM
            como “la práctica de crear y reaccionar ante la interacción con el
            cliente para cumplir (o superar) sus expectativas, y, de esta forma,
            incrementar su satisfacción y lealtad”.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Una de las herramientas son los mapas del viaje del usuario. Estos
            permiten visibilizar la experiencia del público con el servicio,
            experiencia cultural o creativa antes, durante y después del consumo y
            así diseñar estrategias de captación, fidelización y retención.
            <br /><br />

            La finalidad es crear un vínculo emocional, conectar con sus emociones,
            y en cierta medida hacer parte de sus vidas. Algo que en cultura, por
            ejemplo, se consigue con facilidad. De esta manera se podrán generar
            contenidos personalizados y de valor para que quiera volver a vivir la
            experiencia que se le ofrece.
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
