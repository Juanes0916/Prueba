import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>¿En que aspectos se puede innovar?</h4>
          </div>

          <h5>En qué aspectos se puede innovar en el sector creativo y cultural</h5>

          <div className='unc-row unc-padding-1'>
            Aunque existen diferentes propuestas sobre en qué aspectos específicos se puede
            innovar, aquí te contamos el caso de Mowies y de otras propuestas del sector creativo
            y cultural, a la luz de lo propuesto por Larry Keeley, cofundador y encargado de
            liderazgo del cliente en Doblin, una firma dedicada a la innovación, quién en el libro
            10 Types of Innovation, menciona los aspectos específicos en que se puede innovar y
            advierte que las organizaciones fallan en innovación cuando “están enfocadas en lo
            incorrecto. Creen que se trata de creatividad, cuando en realidad se trata
            de disciplina”.
            <br /><br />

            Keeley enumera diez elementos diferentes dentro de las organizaciones en los que puede
            aumentarse el valor gracias a la innovación, y los clasifica en tres categorías:
            la <strong>Configuración Interna</strong> del emprendimiento, la <strong>Oferta</strong>
            (producto o servicio ofrecido), y la <strong>Experiencia</strong> vivida por el usuario
            o consumidor, procedimiento que también aplica para emprendimientos culturales y
            creativos, como lo muestra el siguiente esquema:
            <br /><br />

            Escucha en que consisten y algunos ejemplos de cómo estos aspectos se ven en propuestas
            del sector creativo y cultural.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Escucha haciendo clic sobre los recuadros, en que consisten y algunos ejemplos
              de cómo estos aspectos se ven en propuestas del sector creativo y cultural.</small>
          </div>

          <div className='unc-row unc-padding-1 unc-row-scalable' data-width='1300'>
            {/* eslint-disable */}
            {/* TODO: Audio */}
            <div id='obj-innovar' className='unc-scalable'>
              <div className='unc-line configuracion'>
                <span>Configuración</span>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_A' data-audio='m03_01.mp3'
                  data-second='0' data-end='51'>
                  <span className='unc-title'>Modelo de ingresos</span>
                  <span className='unc-number'>1</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_A' data-audio='m03_01.mp3'
                  data-second='52' data-end='96'>
                  <span className='unc-title'>Redes</span>
                  <span className='unc-number'>2</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_A' data-audio='m03_01.mp3'
                  data-second='97' data-end='119'>
                  <span className='unc-title'>Estructura interna</span>
                  <span className='unc-number'>3</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_A' data-audio='m03_01.mp3'
                  data-second='120'>
                  <span className='unc-title'>Proceso</span>
                  <span className='unc-number'>4</span>
                </div>
              </div>
              <div className='unc-line oferta'>
                <span>Oferta</span>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_B' data-audio='m03_02.mp3'
                  data-second='0' data-end='21'>
                  <span className='unc-title'>Desempeño del producto</span>
                  <span className='unc-number'>5</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_B' data-audio='m03_02.mp3'
                  data-second='22' data-end=''>
                  <span className='unc-title'>Sistema del producto</span>
                  <span className='unc-number'>6</span>
                </div>
              </div>
              <div className='unc-line experiencia'>
                <span>Experiencia</span>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_C' data-audio='m03_03.mp3'
                  data-second='0' data-end='23'>
                  <span className='unc-title'>Servicio</span>
                  <span className='unc-number'>7</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_C' data-audio='m03_03.mp3'
                  data-second='24' data-end='82'>
                  <span className='unc-title'>Canal</span>
                  <span className='unc-number'>8</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_C' data-audio='m03_03.mp3'
                  data-second='83' data-end='117'>
                  <span className='unc-title'>Marca</span>
                  <span className='unc-number'>9</span>
                </div>
                <div className='unc-clickeable' data-toggle='modal' data-target='#innovarMdl_C' data-audio='m03_03.mp3'
                  data-second='118' data-end=''>
                  <span className='unc-title'>Participación del cliente</span>
                  <span className='unc-number'>10</span>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Estos aspectos seguro variarán de acuerdo a cada emprendimiento, con su tamaño y con el
            tipo de bienes o servicios que ofrece, pero representan un buen lineamiento.
            <br /><br />
            Luego de ver estas opciones presentadas por Keeley, ¿Dónde crees que se encuentra la
            innovación de <strong>Mowies</strong>? Antes de responder conoce un poco más sobre
            su modelo:
          </div>

          <Video videoId={315267198} />

          <div className='unc-row unc-padding-1'>
            Como lo vemos, <strong>Mowies</strong> hizo innovación al menos desde la configuración
            interna del negocio y, en especial, desde las redes. Como conclusión el método, el
            proceso y no solo la plataforma son las herramientas que demuestran su innovación.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
