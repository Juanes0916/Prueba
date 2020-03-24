import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';
import * as d3 from 'd3';

import Header from '../components/Header';
import PieButtons from '../../components/PieButtons';

const popups = [
  {
    title: (<h4>Futuro Pausado</h4>),
    content: (
      <div>
        Se trata de recordar el pasado para imaginar el futuro. Este tema o estado mental
        se enfoca en lo que será el futuro de la humanidad que, sin duda, está volviendo a
        valorar los tiempos del pasado en los que las pausas, la tranquilidad y hasta el
        aburrimiento eran vitales. En un momento en el que las redes sociales parecen ocupar
        cada hueco de nuestro tiempo libre, la información nos satura y el consumo es abundante,
        por eso, WGSN anticipa que la sociedad se decantará por un modo de vida minimalista,
        sencillo y despojado.
      </div>
    )
  },
  {
    title: (<h4>Afinidad</h4>),
    content: (
      <div>
        Trata sobre culturas y colectivos, tanto reales como virtuales, que forjan un mayor
        sentido de comunidad. Así como en reacción al presente consumista nos imaginamos un
        futuro minimalista, la hiperconectividad se transformará en una revalorización de las
        culturas, los grupos y el contacto one-on-one. También, como lo indica el nombre, es
        un tema asociado a los sentimientos, la sensibilidad y la expresión de individualidad.
      </div>
    )
  },
  {
    title: (<h4>Psicotropical</h4>),
    content: (
      <div>
        Explora una naturaleza idealizada para el futuro. Ya lo estamos viendo, porque hay
        una tendencia de búsqueda de lo natural. Desde la comida, en la que cada vez se hace
        más hincapié en que sea farm-to-table (de la granja a la mesa) hasta nuestro tiempo
        libre, en el que tendemos a ir a espacios abiertos y en conexión con la naturaleza.
        Como explica WGSN, se combinan los orígenes relacionados con la naturaleza y
        con elementos futuristas, psicodélicos y abstractos.
      </div>
    )
  },
  {
    title: (<h4>Energía Juvenil</h4>),
    content: (
      <div>
        Analiza la cultura juvenil que influye en cada área del mercado con una rebeldía
        ecléctica y un fuerte sentido de la personalidad. Las fronteras entre generaciones
        X, Z y Millennials irá borrándose y la juventud será más una cuestión mental que
        práctica: a nadie le importará cuándo naciste. El tema de “energía juvenil” apunta a
        que cada uno pueda demostrar su individualidad y personalidad a través de un
        estilo único, sin importar su edad. Por otro lado, elementos icónicos de juventudes
        pasadas vuelven a tomar vida, como las prendas usadas por los chicos de los años
        ochenta (PINTOS, 2017).
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo06')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Macrotendencias relacionadas por WGSN</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            La empresa <a href='https://lp.wgsn.com'>WGSN</a> es un proveedor líder de información
            estratégica. Lo que hace es estudiar las macrotendencias sociales, políticas,
            económicas y de moda, para determinar qué temas (o estados mentales, como le llaman
            ellos) predominarán en los próximos años. Investiga pensando en los próximos dos, cinco
            y diez años e incluye datos duros -el famoso <i>big data</i>– y una cuestión más
            “anímica” de la sociedad.
            <br /><br />

            Fue fundada en 1998, en Londres, Inglaterra, por los hermanos Julian y Marc Worth,
            aunque en 2005 una empresa de exposiciones se las compró por 140 millones de libras.
            <br /><br />

            En la actualidad, WGSN anticipa así cuatro grandes estados mentales o macrotendencias:
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce cuatro estados mentales o
            macrotendencias.</small>
          </div>

          <div className='unc-row unc-padding-1'>
            <div className='unc-row text-center'>
              <PieButtons
                textData={[
                  ['Futuro pausado'],
                  ['Afinidad'],
                  ['Psicotropical'],
                  ['Energía Juvenil']
                ]}
                color={d3.scaleOrdinal(['#0b7c6e', '#2db9a8', '#2b6f67', '#2db9a8'])}
                popups={popups}
              />
            </div>
          </div>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page >
);

export default CustomPage;
