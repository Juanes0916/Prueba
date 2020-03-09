import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿Cómo otros han implicado sus públicos?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Aquí te mostramos algunos ejemplos que muestran formas de implicar al público:
            <br /><br />

            El primer ejemplo es el <a href='http://www.counterpulse.org' target='_blank'>
              Programa Comisionado de Artistas Residentes de CounterPULSE</a>
            (ARC por sus siglas en inglés)
            <br /><br />

            <strong>¿Qué es?</strong> Es un programa de desarrollo profesional para artistas y
            compañías emergentes o con cierta trayectoria en el mundo de la danza, de la zona
            de la Bahía de San Francisco, en Estados Unidos. En este programa, la incorporación
            de las opiniones del público al proceso artístico es un componente fundamental.
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_2' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_2' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_2' data-slide-to='1'></li>
                <li data-target='#Carousel_2' data-slide-to='2'></li>
                <li data-target='#Carousel_2' data-slide-to='3'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M04_IMG20.jpg'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Los artistas son seleccionados mediante un procedimiento de solicitud
                      competitivo y están obligados, a lo largo de su residencia, a crear un blog
                      en la página del centro y a publicar con regularidad comentarios, ideas y
                      vídeos sobre su trabajo. También deben presentar tres actuaciones
                      relacionadas con el trabajo que estén desarrollando, con el fin de pedir
                      opinión antes de que hayan finalizado.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Los públicos, por su parte, reciben instrucciones para facilitar sus
                      opiniones mediante el Proceso de Respuesta Crítica (CRP, en sus siglas en
                      inglés), desarrollado por Liz Lerman, un formato de recopilación de
                      comentarios centrado en el artista.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Al final de su período de residencia, los artistas deben ofrecer una
                      última representación pública, seguida por un debate post-evento organizado
                      por el personal de CounterPULSE. El centro envía, además, un correo de
                      seguimiento a su público, en el que se incluye un enlace a la zona de
                      comentarios de su página web, en la que se puede continuar con la
                      conversación a través de internet.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      También registra de manera periódica, mediante flipcams, las reacciones
                      del público al trabajo que van realizando los artistas residentes, cargando
                      después los contenidos en su canal de YouTube.
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_2' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_2' data-slide='next'>
                <span className='ti-angle-right'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/* eslint-enanble */}
          </div>

          <div className='unc-row unc-padding-1'>
            El segundo ejemplo es el
            <a href='https://denverartmuseum.org/' target='_blank'> Museo de Arte de Denver</a>,
            en Colorado, Estados Unidos.
            <br /><br />

            <strong>¿Qué es?</strong> El museo está compuesto por una serie de rectángulos
            entrelazados, por medio de un diseño geométrico de formas agresivas, puras e
            irregulares, de vidrio y titanio que reflejan los picos y cristales de roca de las
            montañas de Colorado, explica el
            <a href='https://es.wikiarquitectura.com' target='_blank'> portal</a>. Es un proyecto
            diseñado como parte de una composición de los espacios públicos, monumentos y pasarelas
            concentrados en ese sector de Denver. El rasgo más sorprendente del museo es la forma
            triangular de una esquina que se dispara hacia afuera de la calle.
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Carousel */}
            <div id='Carousel_3' className='carousel slide filter' data-ride='carousel'>

              <ol className='carousel-indicators'>
                <li data-target='#Carousel_3' data-slide-to='0' className='active'></li>
                <li data-target='#Carousel_3' data-slide-to='1'></li>
                <li data-target='#Carousel_3' data-slide-to='2'></li>
                <li data-target='#Carousel_3' data-slide-to='3'></li>
              </ol>


              <div className='carousel-inner unc-equal-cols unc-row-bgfull' data-url='./assets/img/M04_IMG21.jpg'>
                <div className='item active col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      En el museo se construyó el Área Focal, Daniel Sprick, un reconocido artista
                      estadounidense, en una zona con un entorno estético-interactivo, diseñado
                      para atraer a aquellos visitantes que quieran adquirir un conocimiento y una
                      perspectiva contextual profunda mediante la lectura y visionado materiales
                      relacionados con las pinturas. Estas se muestran colgadas en una alcoba
                      junto a un sofá, en el que se dispone de un cuadernillo, dividido en
                      apartados que abordan cuatro áreas distintas de la pintura.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Cada apartado puede desplegarse para mostrar una serie de fotos que ilustran
                      la pintura en diferentes fases del proceso de Sprick, y que van acompañadas
                      de citas del artista y de leyendas explicativas. También junto al sofá
                      aparecen dos juegos de seis tarjetas con una lista de preguntas frecuentes,
                      colgadas para permitir consultarlas con facilidad. Cada tarjeta contiene una
                      pregunta, formulada en principio por algún visitante, con una respuesta en
                      palabras del propio artista en el reverso.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      A la izquierda de la entrada, en la estancia, muestra un cartel que invita
                      al visitante a “explorar esta pintura desde el punto de vista del artista”
                      y lo dirige a una sala contigua en la que se proyecta un vídeo de forma
                      continua en la pared, junto al que aparecen citas, y cuya transcripción puede
                      leerse en una caja, también en la pared. A la derecha, unos huecos revelan
                      los objetos que sirvieron de inspiración para el cuadro: una mesa envuelta en
                      un mantel, una rosa roja, una calavera, un candelabro y una lata de sopa.
                    </div>
                  </div>
                </div>

                <div className='item col-'>
                  <div className='unc-row-carousel unc-flex-center'>
                    <div>
                      Tres pantallas táctiles muestran, cuando los visitantes las activan en esa
                      misma pared, citas del artista, mientras en otra de las paredes de la sala
                      aparece un autorretrato del artista y otra pantalla táctil con citas del
                      propio Sprick hablando de cómo se utilizó a sí mismo como sujeto.
                    </div>
                  </div>
                </div>
              </div>


              <a className='left carousel-control' href='#Carousel_3' data-slide='prev'>
                <span className='ti-angle-left'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='right carousel-control' href='#Carousel_3' data-slide='next'>
                <span className='ti-angle-right'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/* eslint-enable */}
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
