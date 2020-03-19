import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCollapse } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const panels = [
  {
    title: 'Precios segmentados',
    content: (
      <div className='unc-padding-1'>
        Es una manera de capturar todo el mercado posible por medio de fijar precios
        diferenciados, según el valor del producto. Algo que siempre ha hecho Apple,
        al crear productos de valor que complementen al Premium (por ejemplo el
        IPhone 6C y 6S respectivamente) o en función de la capacidad de sus equipos.
      </div>
    )
  },
  {
    title: 'Precios máximos',
    content: (
      <div className='unc-padding-1'>
        Las empresas aprovechan la fluctuación de la demanda para modificar los
        precios o cuando los competidores tienen un inventario bajo. Por ejemplo,
        en momentos vacacionales o cuando hay un evento especial (deportivo o
        cultural) se permite subir los precios de productos y servicios asociados
        al evento.
      </div>
    )
  },
  {
    title: 'Tarifas reducidas en servicios perecederos',
    content: (
      <div className='unc-padding-1'>
        Es la clave entre las líneas aéreas, hoteles, cruceros e, inclusive,
        espectáculos culturales y deportivos. Para evitar que la capacidad se
        quede sin ocupar se ponen en marcha estrategias de Revenue Management.
      </div>
    )
  },
  {
    title: 'Precios basados en el tiempo',
    content: (
      <div className='unc-padding-1'>
        Se fijan los precios en función de la hora del día o la duración de un
        producto en el mercado. Son las ofertas de hora feliz, en momentos de
        poca afluencia en establecimientos, o la bajada de precios en productos
        antiguos cuando se lanza uno nuevo. Por ejemplo, cuando salió la nueva
        XBoxOne se redujo en 100 dólares el precio de la Xbox 360.
      </div>
    )
  },
  {
    title: 'Precio según localización',
    content: (
      <div className='unc-padding-1'>
        El precio varía en función de su distribución y dependiendo del lugar
        desde donde se hace la compra <i>online</i> (error que pagó caro
        Amazon, que incrementó los precios para habitantes de algunas zonas
        geográficas).
      </div>
    )
  },
  {
    title: 'Precio de penetración',
    content: (
      <div className='unc-padding-1'>
        A veces se fija un precio más bajo que el precio de mercado final cuando
        se quiere introducir un nuevo producto en el mercado y así persuadir a
        los clientes a probarlo. Los precios dinámicos pueden implementarse para
        observar elasticidades entre la demanda antes de encontrar el precio de
        mercado óptimo.
      </div>
    )
  },
  {
    title: 'Estrategia de descremado',
    content: (
      <div className='unc-padding-1'>
        En el lanzamiento de un nuevo producto con un nicho de mercado muy definido
        se parte de un precio alto que se irá reduciendo de forma paulatina. Esto
        sucede mucho en el mercado tecnológico, en el que hay consumidores
        apasionados por las innovaciones dispuestos a pagar para ser los primeros
        en hacerse con el nuevo producto. Los potenciales clientes siempre pueden
        esperar.
      </div>
    )
  },
  {
    title: 'Modificación de precios por volumen',
    content: (
      <div className='unc-padding-1'>
        Está totalmente asumida la discriminación de precios asociada al volumen de
        compra. La gran competencia que existe en el mundo del E-Commerce obliga a
        los retailers a invertir cada vez más en un software de inteligencia de
        precios que permita un seguimiento efectivo y de comparación de precios del
        mercado. Algunos comienzan por rastrear Amazon para miles de productos y lo
        hacen con frecuencia de hasta diez minutos.
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Tácticas de precios dinámicos</h5>

          <div className='unc-row unc-padding-1'>
            Las empresas más orientadas al cliente identifican sus distintas necesidades y
            diseñan la oferta en función de cada segmento. En la medida en que cada producto
            es distinto, la fijación de precios diferentes está justificada. Algunas
            estrategias que favorecen la fijación de precios dinámicos, atendiendo a la
            experiencia del cliente, son:
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module04' panels={panels} />
          </div>

          <div className='unc-row unc-padding-1'>
            En el caso de productos en los que las ventas son sensibles a las variaciones de
            precio (libros, electrónica, videojuegos…) conviene usar <i>dynamic pricing</i> o
            inteligencia aplicada a los precios.
            <br /><br />

            Hay algunas empresas que no se atreven a dar el paso por miedo a perder el control
            sobre los propios precios o sobre los propios clientes o por no poder hacer la
            inversión necesaria. Sin embargo, según datos de Econsultancy, el uso de software
            de optimización de precios mejora los márgenes brutos en un 10 %.
            <br /><br />

            Herramientas como Minderest, Marketshare, Profit2, Vendavo o Boardfy permiten
            monitorizar los precios de los productos de catálogo comparados con los productos
            de la competencia y ver los cambios arriba o abajo para igualarlos o mejorarlos.
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
