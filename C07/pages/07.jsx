import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';
import DegrantImage from '../../components/DegrantImage';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>El desarrollo sostenible</h5>

          <div className='unc-row unc-padding-1'>
            Para cerrar, una última tendencia que es fundamental para el sector creativo y cultural
            es la de la sostenibilidad. Estamos viviendo un momento de transición acelerada y los
            recursos para nuestro futuro próximo están en riesgo. Esto toca a todos los sectores de
            la solidaridad, de la economía, de la educación, etc.
          </div>

          <DegrantImage url='./assets/img/M06_IMG26.jpg' inverse>
            La ONU ha establecido unas metas de desarrollo sostenible que se implantan como eje
            transversal para la orientación de recursos y la toma de decisiones de muchos
            organismos a nivel mundial, y los esfuerzos de la UNESCO se orientan a la comprensión
            de la cultura como pilar de ese desarrollo sostenible que se fomente desde las
            localidades desde varios flancos, incluido el emprendimiento cultural y creativo
            (UNESCO, 2013)
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            En ese sentido, debemos entender que las problemáticas que enfrentamos como planeta
            en esta entrada al siglo XXI deben tomarse como lineamiento para la toma de
            decisiones en nuestra cadena de valor, en nuestros productos y servicios y en nuestros
            factores diferenciadores. Pensar en proyectos que respondan a preguntas relacionadas a
            las metas de sostenibilidad es una directriz. Y va de la mano con la implementación de
            nuevas tecnologías y con los movimientos creativos ciudadanos que buscan solucionar
            problemáticas locales desde una base creativa e innovadora.
            <br /><br />

            Esto va de la mano con muchas decisiones y puntos de vista de las personas que pueden
            llegar a ser relevantes para nuestros emprendimientos. Hay tendencias globales a la
            búsqueda de consumir más responsablemente, y los mercados locales están cobrando
            importancia. Las personas se están acercando a lo pequeño y todo esto está generando
            valor (Backhaus, Breukers, Paukovic, Mourik, & Mont, 2011; Cipolla, 2009; Manzini,
            2006; Nurse, 2006).
            <br /><br />

            A partir de esto, conceptos como consumo lento, desperdicio cero, consumo local,
            consumo colaborativo, economías circulares, nuevas monedas, jardines comunitarios,
            servicios colaborativos o el co-diseño y la co-producción, aparecen como factores
            que cambian las formas de consumir bienes y servicios, incluidos los culturales.
            Propuestas como actuar local y pensar global, entendiéndonos como un sistema lleno
            de nodos con posibilidades de acción y cambio, son promovidas por los teóricos de
            la gestión cultural, como el profesor Alberto Ramírez Martinell, de la
            Universidad Veracruzana, de México.
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M06_IMG21.jpg',
                label: (
                  <div>
                    Construir modelos de negocios sostenibles que potencien estas u otras
                    prácticas de consumo no solo tienen potencial económico, pues hay
                    audiencia, sino que nos brinda la posibilidad de alinearnos con
                    esta importante tendencia/lineamiento.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M06_IMG21.jpg',
                label: (
                  <div>
                    En diseño, emprendimientos como
                    <a href='https://packagefreeshop.com/' target='_blank'> Package Free</a>
                    buscan proveer alternativas para el uso desechable del plástico, vendiendo
                    objetos de marcas que quieran disminuir el impacto ambiental al innovar
                    en el ciclo de vida de sus productos. El envío de las compras se hace en
                    cajas reutilizadas del barrio, de donaciones de amigos, etc.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M06_IMG21.jpg',
                label: (
                  <div>
                    En el cine, la reciente producción francesa
                    <a href='https://www.demain-lefilm.com/en/solutions'
                      target='_blank'>Mañana</a> de Mélanie Laurent y Cyril Dion, aborda
                    temas cruciales relacionados con este tema. Si una persona quiere proyectar
                    la película en su comunidad, puede contactar a la producción
                    para organizar el evento.
                  </div>
                )
              }
            ]}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            El tema de la sostenibilidad es pues una discusión de hace ya algunos años y que
            guiará los próximos. Los emprendimientos culturales y creativos trabajamos con valores
            simbólicos que tienen la posibilidad de generar conciencia o cambios en el
            comportamiento de las personas. Hay allí también posibilidades amplias de mercado,
            financiación e inclusión de proyectos en programas locales, regionales y hasta
            internacionales. En Colombia, el tema del post-conflicto está en boga, y está alineado
            con el tema de sostenibilidad social, ambiental y cultural, por todos sus flancos.
            Esta es pues, una tendencia llena de retos y oportunidades en la que las propuestas
            desde el sector creativo y cultural no se pueden hacer esperar.
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
