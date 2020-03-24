import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>De ciudades creativas y laboratorios de innovación ciudadana</h5>

          <div className='unc-row unc-padding-1'>
            Hay otra corriente que tiene que ver con los famosos laboratorios de innovación,
            que facilitan el acceso masivo a las nuevas tecnologías. Esto ha hecho que las
            personas exploren las posibilidades que estas brindan y las utilicen para experimentar
            en la generación de ideas innovadoras que puedan ser aplicables en sus propios
            contextos. Todo esto hace parte de la aparición de la próxima tendencia; de ciudades
            creativas y laboratorios de innovación ciudadana.
          </div>

          <DegrantImage url='./assets/img/M06_IMG11.jpg' inverse>
            Las ciudades creativas son una concepción nueva, así como el de economía creativa,
            conceptos que se refieren a un “conjunto urbano donde las actividades culturales de
            diferentes tipos son un componente de la economía de la ciudad y (de su)
            funcionamiento social”, dice el informe mundial de la UNESCO, de 2013.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Esta tendencia se basa en que las ciudades y las regiones pueden considerarse terrenos
            privilegiados, gracias a las redes de personas que allí cohabitan, lo cual es un gran
            recurso para enfrentar las transiciones que la globalización traerá para las ciudades
            en sí mismas, agrega esta agencia de las Naciones Unidas.
            <br /><br />

            Las ciudades creativas relacionan su desarrollo con su vida cultural, con la
            creatividad de las personas y con las redes que estas forman, al configurar así un
            capital creativo que lleva a la innovación y, por ende, al crecimiento económico, dicen
            Eli Lloveras, Rubén Martínez, Clara Piazuelo y Jaron Rowan, en su texto Innovación en
            cultura, una introducción crítica a la genealogía y usos del concepto, publicado en
            2009.
            <br /><br />

            Mucho se ha hablado sobre el concepto de ciudades creativas, pero lo cierto es que esta
            tendencia es fuerte en la actualidad y muchas ciudades están proyectándose como
            creativas e innovadoras, Medellín entre ellas. Así, algunas posturas reiteran sobre
            esta visión que es “necesario promover una estructura social de la creatividad que
            favorecerá un ecosistema o hábitat en el que las múltiples formas de creatividad puedan
            florecer”, recuerdan los últimos autores citados.
          </div>

          <DegrantImage url='./assets/img/M06_IMG19.jpg' inverse>
            Esto en vista de que no puede entenderse que las formas de creatividad deban reunirse
            en un solo lugar e instrumentalizarse para fortalecer el crecimiento de la ciudad sino
            que debe fomentarse la diversidad y el encuentro de expresiones que produzcan
            crecimiento en diferentes sectores.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Así, se ha visto en los últimos años el florecimiento de espacios en donde se generan
            o comparten ideas, se desarrollan proyectos y se accede a conocimientos y tecnologías
            desde la comprensión de sus principios básicos para que las personas puedan apropiarse
            de estos y emplearlos en sus vidas diarias, en sus proyectos o emprendimientos.
            <br /><br />

            Esos espacios van muy de la mano con la idea del impulso de la innovación desde el
            accionar de la ciudadanía, lo que logra que se generen impactos en diversas escalas
            sociales y económicas.
          </div>

          <div className='unc-row'>
            <UDCarousel className='unc-filter' steps={[
              {
                bgImage: './assets/img/M06_IMG28.jpg',
                label: (
                  <div>
                    Estos espacios se conocen como laboratorios de innovación ciudadana,
                    laboratorios que pueden representar, en sí mismos, emprendimientos
                    culturales, y los hay en muchas escalas: desde pequeños colectivos, hasta
                    grandes espacios que hacen parte de programas del sector público.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M06_IMG29.jpg',
                label: (
                  <div>
                    Esos laboratorios deben comprenderse como una fábrica de
                    futuro, pues se trata del encuentro de personas de diversos
                    entornos y con distintos conocimientos que discuten y prueban
                    ideas que tienen sentido en contextos específicos, pero que se
                    pueden desarrollar, implementar y replicar gracias a la variedad de
                    disciplinas, experiencias y formas de entender el mundo de quienes se
                    reúnen allí y comparten sus conocimientos de forma abierta.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M06_IMG33.jpg',
                label: (
                  <div>
                    Se convierten en centros de experimentación, formación e intercambio para
                    los emprendedores culturales y creativos, y es importante reconocer que
                    existen y que allí pueden encontrarse múltiples recursos físicos y de
                    posibilidad de generación de redes. Además, son reconocidos por su rol
                    como nodos creativos que conectan iniciativas y procesos donde la cultura
                    local está jugando un papel de formación y cohesión ciudadana importante.
                  </div>
                )
              }
            ]}
            />
          </div>

          <br /><br />

          <div className='unc-row unc-row-border unc-padding-2'>
            Ejemplos de estos laboratorios son el español
            <a href='http://www.medialab-prado.es' target='_blank'> Media Lab Prado</a>, un
            proyecto independiente que se define como laboratorio ciudadano de producción,
            investigación y difusión de proyectos culturales y que explora las formas de
            experimentación y aprendizaje colaborativo, surgidos en redes digitales. El proyecto
            se aproxima al concepto de observatorio de ciudad, de un laboratorio de experimentación
            y de un espacio de aprendizaje y de creación de redes que se ha vuelto un referente
            en el ámbito cultural y ciudadano en el mundo.
            <br /><br />

            En Medellín puede también encontrarse el
            <a href='http://www.parqueexplora.org/laboratorio' target='_blank'> Exploratorio del
            Parque Explora</a>, que abrió sus puertas en 2016 como taller público de
            experimentación ciudadana. Este busca brindarle a la ciudad un espacio público para
            la experimentación y desarrollo de ideas de todo tipo, al hacer accesible la
            información y las metodologías empleadas, y tejiendo una red de hacedores.
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
