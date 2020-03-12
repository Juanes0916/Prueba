import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Tener claridad del público</h5>

          <div className='unc-row unc-padding-1'>
            Uno de los aspectos más importantes para el éxito de cualquier proyecto creativo es
            tener <u>claridad del público para el que se crea</u>. Si bien muchos de los proyectos
            y productos creativos nacen de una necesidad expresiva de quién los realiza, es
            fundamental responder la pregunta clave: <strong>¿para quién hago esto?</strong>
            <br /><br />

            Para responder esta pregunta es importante que diferencies entre 5 tipologías de roles
            con los que tu público interactúa con tu oferta. Al momento de construir o mejorar tu
            oferta, es importante tenerlos a todos en cuenta.

            <div className='unc-row unc-row-tip'>
              <small>Haz clic en los componentes del mapa interactivo para conocer más sobre
                los roles</small>
            </div>

            {/* TODO: D3 */}
            <div className='text-center'>
              <svg id='unc-mercado-pie'></svg>
            </div>

            Para ilustrar estas diferencias te hablaremos del caso del <strong><i>Cirque Du
            Soleil</i></strong>. A través del estudio de mercado, ellos lograron entender que no
            vendían espectáculos de circo para niños sino para los padres, que eran los que pagaban
            la entrada. De este modo, se dedicaron a conocer muy bien los gustos de los adultos y a
            orientar su compañía hacia esos gustos. Algunas de las decisiones que tomaron nos
            pueden servir de inspiración:
          </div>

          <DegrantImage url='./assets/img/M04_IMG11.jpg' inverse>
            <ul>
              <li>Eliminaron los animales y los payasos ¿qué elefantes o personajes deberías
                eliminar de tu proyecto cultural o creativo?</li>

              <li>Pasaron de múltiples arenas a un solo escenario ¿a qué le pondrías tu foco
                principal en tu empresa cultural o creativa?</li>

              <li>Agregaron o resaltaron algunos aspectos fundamentales como escenografía
              provocativa, utilización de vídeos, música propia, vestuario atractivo para
              acercarse más a los gustos de los adultos. ¿Cómo puedes personalizar tu producto,
                servicio o experiencia?</li>

              <li>Pusieron un margen de beneficio del 15% en sus espectáculos ¿Tu empresa está
                diseñada para ganar?</li>
            </ul>
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Para resumir el caso del <i><strong>Cirque du Soleil</strong></i> podemos ver cuáles
            son los roles de público con el que interactúan con el siguiente recurso:

            <div className='unc-row unc-row-tip'>
              <small>Haz clic en los componentes del mapa interactivo para conocer más sobre los
                roles</small>
            </div>

            {/* TODO: D3 */}
            <div className='text-center'>
              <svg id='unc-mercado-pie-2'></svg>
            </div>

            Una vez tienes bien identificados tus públicos podrás:

            <ul>
              <li>Diseñar o mejorar la oferta que tienes para ellos.</li>
              <li>Diseñar diferentes estrategias que te permitan establecer relaciones fuertes,
                estimulantes y duraderas con cada uno de ellos.</li>
            </ul>
          </div>

          <DegrantImage url='./assets/img/M02_IMG25.jpg'>
            Esto último podrás explorarlo en los insumos que verás referenciados en la sección
            Recursos de profundización que encontrarás al finalizar este módulo.
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
