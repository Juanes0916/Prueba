import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: 'Implicación mediante tecnologías',
    content: (
      <div className='unc-padding-1'>
        No debe sorprendernos que gran parte del trabajo actual para
        implicar a las audiencias gire en torno del uso creativo de la
        tecnología. La mayoría de las organizaciones se han subido al
        carro de Facebook y Twitter® y muchas de ellas tienen un blog
        y una plataforma de YouTube. Algunas están desarrollando
        sofisticadas estrategias de implicación <i>online</i>. Por
        ejemplo, retransmitir obras en directo y etiquetar piezas de
        exposiciones en internet, por usuarios, permite construir una
        comunidad y prolongar la experiencia artística (como con las
        críticas de usuarios en YouTube).
        <br /><br />

        En este asunto tenemos aún muchos retos, pues mientras surge
        un acervo de prácticas ejemplares cada vez mayor, sigue
        habiendo muchas organizaciones que tienen dificultades para
        conseguir que la experiencia <i>online</i> sea más una
        interacción que un monólogo unidireccional.
      </div>
    )
  },
  {
    title: 'Colaboraciones y partenariados',
    content: (
      <div className='unc-padding-1'>
        Las barreras más citadas por las organizaciones para realizar
        un mayor número de actividades de implicación son “el tiempo,
        el personal y el dinero”. Ellas buscan cada vez con mayor
        frecuencia socios para superar estos desafíos. Las
        colaboraciones permiten a las organizaciones y al socio local
        compartir recursos, llegar a poblaciones de interés y hacer
        hincapié en cuestiones cívicas de interés para ambas partes.
      </div>
    )
  },
  {
    title: 'Experimentación con el entorno',
    content: (
      <div className='unc-padding-1'>
        Otro ámbito de actividad para la implicación se centra en el
        uso y reutilización creativa de entornos y espacios. Bajo este
        estilo existe una mayor claridad, porque la experiencia
        comienza en el mismo instante en el que alguien cruza el
        umbral de la sala, siempre que el entorno juegue un papel en
        la definición de la experiencia.
        <br /><br />

        Los museos, las compañías teatrales y los centros de artes
        escénicas están replanteándose sus zonas de vestíbulo y otros
        espacios, y están experimentando con otros usos. Shotgun
        Players (un grupo de teatro de California, Estados Unidos), ha
        utilizado sus instalaciones en el vestíbulo para reflejar la
        época y estilo de sus producciones actuales. En los museos,
        los conservadores están diseñados como espacios informales de
        descanso y encuentro donde los visitantes puedan leer libros y
        catálogos, conversar con docentes y socializar entre ellos.
        Esta experimentación se extiende a otros espacios, como bares,
        restaurantes o domicilios particulares, donde se invita al
        público para alternar, antes y después del evento.
      </div>
    )
  },
  {
    title: 'Implicación participativa',
    content: (
      <div className='unc-padding-1'>
        Las organizaciones están experimentando con formas más
        participativas de implicarse más a menudo, por medio de alguna
        expresión física o creativa. Y los ejemplos abundan:
        organizaciones del mundo de la danza, como STEB, invitan a los
        miembros del público a quedarse tras la función para aprender
        un poco sobre coreografía o movimientos acrobáticos. Algunos
        museos desarrollan y prueban nuevos puntos interactivos de
        interpretación para exposiciones concretas, como la Focus
        Area, de Daniel Sprick, del Museo de Arte de Denver. Incluso
        algunas orquestas empiezan a introducirse en este entorno, con
        actividades para la audiencia como juegos durante los
        intermedios y tweetcerts -o conciertos tuiteados-, durante los
        cuales el público recibe comentarios sobre el concierto a
        través de esta red social.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Qué formas de implicación del público puedes considerar?</h5>

          <div className='unc-row unc-padding-1'>
            Ahora, debes explorar diferentes formas para propiciar la implicación de
            tu público, debido a la diversidad de preferencias que hay en él. Este
            es un momento emocionante para las organizaciones que se abren al
            conjunto creciente de posibilidades. A medida que el sector creativo y
            cultural vaya aprendiendo cómo dar servicio a las distintas tipologías
            de personas implicadas, deberán evaluarse y difundirse con alcance y
            rapidez nuevos y refinados programas y actividades.
            <br /><br />

            Ofrecer una gama de actividades para implicar al público es una forma en
            la que las organizaciones culturales y creativas están respondiendo a la
            demanda de una mayor diversidad de experiencias.
            <br /><br />

            Aquí queremos mostrarte algunas que puedes considerar:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module05' panels={panels} />
          </div>

          <div className='unc-row unc-padding-1'>
            <p>
              En este sentido hay diferentes aspectos considerados por expertos
              sobre las variables a considerar.
            </p>
            <p>
              Si quieres saber más puedes visitar:
              <a href='engageaudiences.eu'>engageaudiences.eu</a>
            </p>
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
