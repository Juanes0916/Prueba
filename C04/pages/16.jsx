import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  Popup,
  UDScrollbars,
  UDCarousel,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const items = [
  {
    title: <h4>Leyes</h4>,
    content: (
      <div>
        Las emite el poder legislativo.
      </div>
    )
  },
  {
    title: <h4>Decretos</h4>,
    content: (
      <div>
        Los emite el poder ejecutivo. Los decretos reglamentan el hacer cultural.
      </div>
    )
  },
  {
    title: <h4>Políticas</h4>,
    content: (
      <div>
        Son consideradas cajas de herramientas para la gestión cultural. En ellas
        se encuentran consignados las ideas, sueños, proyecciones y lineamientos
        a través de los cuales se ha querido proyectar este país multiétnico y
        pluricultural. Las políticas culturales son intervenciones realizadas por
        el Gobierno, las instituciones civiles y los grupos humanos organizados
        para promover, fomentar y orientar el desarrollo artístico y cultural;
        satisfacer las necesidades culturales de la población y obtener consenso
        para un tipo de orden o transformación social.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Marco legal para promover tu quehacer</h5>

          <div className='unc-row unc-padding-1'>
            Esta sección se concentra en la identificación de las normas y políticas culturales
            vigentes y que han sido pronunciadas por la <strong>UNESCO</strong>, organismos
            supranacionales como la Comunidad Andina de Naciones o por instituciones nacionales
            como el Congreso de la República y el Ministerio de Cultural, y que protegen el objeto
            de tu quehacer e incentivan a la consolidación y fortalecimiento del sector creativo y
            cultural del país.
            <br /><br />

            Tendrás la oportunidad de identificar algunas de <i>las normas que regulan los procesos
            culturales en Colombia</i>, sobre todo, aquellos que guardan una conexión directa con
            los creadores, artistas, editores y productores, al acercarse a los que tratan de
            orientar la gestión cultural, entendida como la labor que permite ser un puente entre
            dos mundos, el de los creadores y su público, aunque en muchos momentos estos papeles
            puedan verse intercambiados por la dinámica viva en la que todos estamos inmersos.
            <br /><br />

            Para comenzar, queremos hablarte de las convenciones internacionales, un sistema de
            gobernanza cultural, que opera en plena conformidad con los instrumentos
            internacionales de derechos humanos y que respeta la diversidad cultural. A pesar de
            haber sido aprobadas en el ámbito internacional, en la práctica, la implementación de
            esas convenciones se realiza por medio de una cooperación estrecha entre las
            comunidades locales y los gobiernos nacionales para garantizar que esta sea inclusiva
            y responda a los diferentes contextos culturales.
            <br /><br />

            Por eso, queremos que las identifiques, por estar relacionadas con el quehacer cultural:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M01_IMG26.jpg',
                label: (
                  <div>
                    Convención para la protección de los bienes culturales en caso de conflicto
                    armado y reglamento para la aplicación de la Convención (1954).
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG26.jpg',
                label: (
                  <div>
                    Convención sobre las medidas que deben adoptarse para prohibir e impedir la
                    importación, la exportación y la transferencia de propiedad ilícitas de
                    bienes culturales (1970).
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG26.jpg',
                label: (
                  <div>
                    Convención para la salvaguardia del patrimonio cultural inmaterial (2003).
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG26.jpg',
                label: (
                  <div>
                    Convención sobre la protección y la promoción de la diversidad de las
                    expresiones culturales (2005).
                  </div>
                )
              }
            ]}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            Una vez mencionado el tema desde el marco internacional, asociado al quehacer creativo
            y cultural, resulta      importante hacer mención que el Derecho Humano a la Cultura
            se inserta en la normativa interna colombiana como un derecho fundamental, por medio
            la Constitución Política y algunas leyes.
          </div>

          <DegrantImage url='./assets/img/M01_IMG44.jpg' inverse>
            “La Constitución Política situó en la cultura el fundamento de la nacionalidad
            colombiana. Una nacionalidad que concebimos como un proyecto creativo y como un gran
            acuerdo entre la diversidad que es preciso renovar permanentemente”, dice un estudio
            del Ministerio de Cultura, de 2012.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Aunque son varios los artículos constitucionales que encarnan este espíritu, los
            encargados de establecer el papel de la Cultura en el país son los siguientes:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '780px' }}>
              <img src='./assets/img/M01_IMG52.png' />
            </div>
            <br /><br />

            Ahora, te mostraremos algunas leyes, decretos y políticas asociadas a esta normativa
            internacional y nacional. En cada caso te contaremos su relación con el sector para
            incentivar que explores aquellas que puedan estar alineadas con tu negocio o
            emprendimiento.
            <br /><br />

            Pero primero debes tener en cuenta la diferencia entre leyes, decretos y políticas:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz click sobre cada ícono para más información</small>
          </div>

          <div className='row unc-row-icon-title'>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-107 unc-fill unc-clickeable' onClick={() => Popup.open(items[0])}></span>
              <h5>Leyes</h5>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-104 unc-fill unc-clickeable' onClick={() => Popup.open(items[1])}></span>
              <h5>Decretos</h5>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-109 unc-fill unc-clickeable' onClick={() => Popup.open(items[2])}></span>
              <h5>Políticas</h5>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Adicional a toda la explicación normativa de la que te hemos hablado, te sugerimos leer
            los siguientes esquemas en los que se resumen las leyes, decretos y políticas
            relacionadas con el Sector Creatvo y Cultural.
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz click en cada ícono para descargar información</small>
          </div>

          <div className='unc-row row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='#' target='_blank' className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Leyes</div>
                <div className='unc-prompt-description'>Archivo PDF</div>
                <div className='unc-prompt-autor'>&nbsp;</div>
              </div>
            </div>
          </div>

          <div className='unc-row row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='#' target='_blank' className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Decretos</div>
                <div className='unc-prompt-description'>Archivo PDF</div>
                <div className='unc-prompt-autor'>&nbsp;</div>
              </div>
            </div>
          </div>
          <div className='unc-row row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='#' target='_blank' className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Política</div>
                <div className='unc-prompt-description'>Archivo PDF</div>
                <div className='unc-prompt-autor'>&nbsp;</div>
              </div>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Estas políticas resultan ser el marco legal en el que se desarrolla la cultura y la
            gestión cultural en Colombia. Si leíste el contenido desarrollado hasta aquí te diste
            la oportunidad de acercarte a la normativa que traza los lineamientos jurídicos para
            el quehacer cultural del país.
            <br /><br />

            No sobra decir, que a pesar de lo extensa que parece ser la legislación aún falta mucho
            por recorrer, con los avances en materia de tecnología y con los cambios en el ámbito
            social y político del mundo, estas leyes siempre necesitarán actualizarse.
            <br /><br />

            Avanzar en este camino no es posible sin su conocimiento, difusión e implementación, no
            sólo dentro del escenario de los actores culturales sino en el de los ciudadanos, pues
            al fin todos somos parte del qué hacer cultural y creativo de la ciudad, del país y del
            mundo.
            <br /><br />

            Como conclusión, queremos que hagas énfasis en la siguiente idea:
          </div>

          <DegrantImage url='./assets/img/M01_IMG45.jpg'>
            El conocimiento es el capital de tu emprendimiento, pero debes identificarlo y
            gestionarlo y esto lo haces por medio de la sistematización y la evaluación continua.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Esa línea te permitirá ser exitoso, diferente y sostenible, pero teniendo en cuenta o
            sabiendo en qué marco normativo de mueves, porque es el que te da la posibilidad de
            fomentar tu quehacer, cumplir con tus objetivos de impacto y proteger tus creaciones.
            <br /><br />

            Mira lo que en este sentido nos cuenta el <strong>Grupo Crea</strong>:
          </div>

          <Video videoId={318951978} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
