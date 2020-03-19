import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Aspectos a resaltar para hacer innovación</h4>
          </div>

          <h5>Conociendo tu negocio desde la cadena de valor sectorial</h5>

          <div className='unc-row unc-padding-1'>
            Ahora bien, dado que los casos presentados tienen en común como punto de partida el
            conocimiento del negocio desde su funcionamiento y las expectativas o necesidades del
            consumidor, queremos, para finalizar este módulo, contarte un poco sobre la cadena de
            valor sectorial y empresarial, así como darte información específica sobre el
            funcionamiento de esta cadena en el sector creativo y cultural. Si no la conoces,
            hacerlo puede posibilitar que veas opciones de innovación desde lo planteado por Keeley
            u otros autores de tu preferencia.
            <br /><br />
            Lo primero que debes saber sobre la cadena de valor sectorial del sector creativo y
            cultural es que mediante ella los contenidos se transforman en bienes y servicios y
            muestran el camino de la oferta a la demanda; es decir, proporcionan una relación
            estratégica entre los actores para satisfacer las demandas del mercado específicas del
            sector, según la definición del Ministerio de Cultura de Colombia.
          </div>

          <div className='unc-row unc-row-border unc-padding-2'>
            En 2006 la UNESCO propuso que esa cadena de valor tendría los siguientes eslabones:
            creación, producción, distribución, comercialización y consumo, acompañadas de manera
            transversal por educación y conservación del patrimonio.
          </div>

          <div className='unc-row unc-padding-1'>
            Ahora bien, en 1985, Michael Porter, en su publicación Competitive Advantage propuso la
            cadena de valor empresarial indicando que debe servir a cada emprendimiento para
            diferenciarse de otro; es decir, la propuesta de valor recae en el producto o servicio
            ofrecidos, pero todas las actividades y procesos que se ejecutan le agregan
            o le quitan valor a estas iniciativas.
            <br /><br />

            La cadena de valor empresarial se compone de actividades primarias y actividades de
            apoyo. Las primarias están relacionadas con la producción y comercialización de los
            bienes o servicios ofrecidos. Las de apoyo son transversales y apuntalan a las
            ejecuciones de actividades primarias, como lo muestra el esquema de la siguiente
            gráfica:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '850px' }}>
              <img src='./assets/img/M03_IMG20.png' width='100%' />
            </div>
            <br /><br />

            A continuación, se muestra un ejemplo de cadena de valor empresarial de un
            emprendimiento cultural dedicado a la producción de bienes artesanales:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '750px' }}>
              <img src='./assets/img/M03_IMG21.png' width='100%' />
            </div>
            <br /><br />

            Ambos conceptos plantean dos cadenas de valor, la sectorial y la empresarial y
            especifican las actividades particulares de cada una, lo cual posibilita la
            visualización de los actores que intervienen en cada una. Conocer la cadena de valor
            del sector al que pertenece tu emprendimiento y tener una cadena de valor empresarial
            clara te permite saber dónde hay fortalezas y debilidades y evaluar qué se debe quitar,
            mantener o mejorar, además de identificar oportunidades de articulación y trabajo con
            otros actores del sector, para potenciar tu negocio.
            <br /><br />

            En este sentido, si tienes un emprendimiento en el sector creativo y cultural es
            recomendable que reconozcas en la cadena de valor empresarial que cada eslabón debe
            aportar valor al producto o servicio final prestado y ese valor
            debe ser percibido por el usuario o consumidor.
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
