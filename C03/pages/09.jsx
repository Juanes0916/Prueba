import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  Video,
  Popup,
  AudioList,
  ListSection,
  ListItem
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const popup = (file) => {
  Popup.open({
    content: (
      <AudioList headerImageScr='./assets/img/M03_IMG26.jpg'>
        <ListSection
          file={file}
          title='¿Big data y House of Cards?'
        >
          <ListItem
            title='House of Cards'
            start={0}
            end={30}
          />
          <ListItem
            title=''
            start={0}
            end={0}
          />
        </ListSection>
      </AudioList>
    )
  });
};

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Utilizar las nuevas tecnologías para el conocimiento del cliente: Big Data</h5>

          <div className='unc-row unc-padding-1'>
            Es evidente que, en los últimos años, la investigación de mercados ha ganado
            protagonismo, principalmente, a nivel <i>online</i>, debido a la facilidad de conseguir
            datos a través de canales digitales. Por ejemplo, las encuestas han pasado a ser una
            metodología digital, por la facilidad que implica y los pocos costos añadidos que
            supone. Sin embargo, es obligatorio destacar que el consumidor creativo o cultural
            tiene interrelaciones tanto <i>online</i> como <i>offline</i> y que no percibe la
            diferencia entre ambas. Hay consumidores que buscan productos y servicios en internet
            pero los disfrutan en el mundo <i>offline</i> o que se compra productos por internet
            que se prueba en tiendas físicas. Esto implica la necesidad de interrelacionar la
            investigación tradicional con la digital, y exige contar con herramientas y
            metodologías que permitan recoger y procesar volúmenes amplios de datos.
            <br /><br />

            Ahora bien, las nuevas tecnologías te brindarán otras opciones. Aquí nos concentraremos
            en una muy importante que,  complementada, con el ejemplo que ilustraremos, podrías
            explorar para conocer tu público. Hablamos de <i>Big Data</i>, una herramienta
            utilizada por <i>Netflix</i> para el diseño y creación de su serie <i>House of
            cards</i>.
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='unc-row-title-top'>
              <div className='unc-title'>
                <h5>Big data</h5>
              </div>
              <div className='unc-text'>
                <ul>
                  <li>
                    Bueno, primero necesitamos saber qué datos hay. Los datos son información.
                    Es la materia prima del conocimiento. Las unidades de datos recopilados,
                    organizados y analizados nos ayudan a comprender nuestro mundo.
                  </li>

                  <li>
                    Cuando hablamos de la cantidad de datos que las personas están creando ahora,
                    necesitamos hablar exabytes.
                  </li>

                  <li>Todas las palabras habladas por los seres humanos = 1 exabyte.</li>

                  <li>
                    Ahora estamos creando un exabyte de datos cada seis horas. Eso es Big Data.
                  </li>

                  <li>
                    Enterrado en esta avalancha de datos, se encuentra información valiosa sobre
                    salud, negocios, educación, comportamiento del consumidor y cultura
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            El papel del científico de datos es explotar este enorme recurso y encontrar respuestas
            a las preguntas más importantes de la sociedad.
            <br /><br />

            <i>Big Data</i> es el aumento exponencial y la disponibilidad de datos en nuestro
            mundo, casi todos circulando por la nube, es decir, por la Internet.
            <br /><br />

            Conoce cómo utilizaron <strong>Big Data</strong> para realizar una serie como
            <strong> House of Cards</strong> con el siguiente recurso:
          </div>

          <div className='text-center'>
            <button className='unc-button' onClick={() => popup('./assets/media/m02_05.mp3')}>
              <span className='btn-label'><i className='icon-volume-2'></i></span>
              ¿Big data y House of Cards?
            </button>
          </div>

          <div className='unc-row unc-padding-1'>
            Respecto del ejemplo de Netflix, Raúl se refiere al poder de los datos y las nuevas
            tecnologías en la oferta creativa y cultural:
          </div>

          <Video videoId={315164778} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
