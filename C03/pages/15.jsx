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
          <h5>Art Thinking</h5>

          <div className='unc-row unc-padding-1'>
            Por último, te hablaremos de <strong><i>Art Thinking</i></strong>, un marco de acción
            pensado para la educación, aunque sí se sabe leer se puede adaptar o, mejor dicho,
            mutar a otro tipo de experiencias.
          </div>

          <DegrantImage url='./assets/img/M02_IMG21.jpg' inverse>
            Para aplicar <i>Art tinking</i> lo primero que debes entender es que te sirve para
            evidenciar que la creación no es un proceso lineal sino rizomático. Las fases se
            suceden dependiendo de la necesidad de cada momento y van abriendo nuevos caminos
            para ir y volver.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Se parte del arte contemporáneo que, por su naturaleza, brinda oportunidades de
            múltiple conexión, al mostrar narrativas particulares y preguntas que durante mucho
            tiempo se escondieron en otros momentos del mundo; es decir, <i>Art Thinking</i> es
            un proceso completamente político, incluyente y disruptivo, con unas fases muy claras:
            <br /><br />

            Pero, <i>¿cuáles son sus fases?</i>
            <br /><br />

            Estas fases no son lineales, como pasa con muchos de los procesos que vienen de la
            creatividad y el arte, porque están abiertas a que las puedas abordar en cualquier
            momento del proceso. Ahora, enumeremos algunas de esas fases:
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_3' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_3' href='#Collapse_3One'
                      aria-expanded='true' aria-controls='Collapse_3One'>
                      Nombrar
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_3One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Debes seleccionar el tema que te parece importante abordar, dándole un
                      nombre. Como todas las fases,   debes seguir unos principios y acciones, por
                      ejemplo, para nombrar es importante tener en cuenta la relevancia, la
                      democracia y el respeto y la transformación social. A la hora de las acciones
                      es vital llenarse de argumentos y entender el nombrar un proceso en sí mismo
                      que abarca un acto político, uno de extrañamiento (detonador) y un
                       descriptivo.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Two' aria-expanded='false' aria-controls='Collapse_3Two'>
                      Alimentarse
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Investigar qué otros conocimientos existen sobre el tema. Acá se vale por
                      ejemplo el remix, la copia creativa, la metodología disruptiva, porque los
                      procesos de creación contemporáneos provienen de la contaminación con los
                      demás; es decir, nacen de la comunicación y no del aislamiento.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Three' aria-expanded='false' aria-controls='Collapse_3Three'>
                      Experimentar
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_3Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      La pregunta base es ¿cómo formalizo los contenidos en una secuencia práctica?
                      y es que al final es importante entender que todos los productos, servicios,
                      eventos creativos y culturales deben encerrar en sí mismos una narrativa y
                      esta se le debe acercar al usuario, al público.
                      <br /><br />

                      Esta fase se centra en la generación de conocimiento desde el arte, puede ser
                      útil para quiénes están participando de actividades educativas, dentro y
                      fuera de la escuela y, en el caso de los negocios, es válido que cada quién
                      investigue las figuras retóricas que se postulan desde el Art Thinking,
                      ¿por qué?, pues la finalidad de estas figuras es crear un estilo más original
                      de transmisión, de generación de saber. En el caso del sector creativo y
                      cultural estas figuras pueden aportar soporte conceptual, originalidad y,
                      sobre todo, al aplicarlas a uno mismo, expandir las ideas sobre los proyectos
                      que se tienen
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Four'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Four' aria-expanded='false' aria-controls='Collapse_3Four'>
                      Preguntarse
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Four' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Four'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Una fase que se piensa transversal y que su finalidad es provocarnos a ser
                      críticos, dado que su pilar estructural está en mirar con nuevos ojos la
                      realidad, interrogarla y cambiarla.
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_3Five'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_3'
                      href='#Collapse_3Five' aria-expanded='false' aria-controls='Collapse_3Five'>
                      Compartir
                    </a>
                  </h5>
                </div>
                <div id='Collapse_3Five' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_3Five'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Contribuir a que otros, por medio de nuestro trabajo, construyan el suyo,
                      además, porque al compartir puedes cambiar los paradigmas y, sobre todo,
                      mostrar lo que está pasando en los diferentes sectores.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Te hemos presentado algunas metodologías que te invitamos a explorar e identificar si
            alguna de ellas, partes de ellas o adaptaciones entre ellas pueden ser pertinentes para
            el momento actual de tu negocio o emprendimiento, recuerda que, si el objetivo es
            llevar tu oferta creativa y cultural al mercado, es de vital importancia conocer a
            tu usuario y sus necesidades para alinear tu oferta con esas expectativas, como lo
            plantea Raúl Ramos, de Asimétrica, el experto citado en este módulo:
          </div>

          <Video videoId={315170635} />

          <div className='unc-row unc-padding-1'>
            Pero también recuerda, como lo dice la <strong>WGSN</strong> (autoridad global en
            tendencias) que una de las            tendencias de mercado en el mundo es consumir
            con una posición política, que clama transparencia, en la que los usuarios quieren ser
            escuchados y sentirse parte de una causa.
          </div>

          <DegrantImage url='./assets/img/M02_IMG24.jpg'>
            ¿No sería muy interesante aprovechar las metodologías que te hemos compartido para
            diseñar en pro de las nuevas tendencias y deseos del cliente?
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
