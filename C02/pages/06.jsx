import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Clasificaciones de innovación</h5>

          <div className='unc-row unc-padding-1'>
            Antes de contarte sobre aspectos en los que puedes innovar desde tu emprendimiento,
            debes saber que hay diferentes clasificaciones de innovación, aquí te aproximamos
            a algunas.
          </div>
          <div className='unc-row unc-row-border unc-padding-2'>
            Puedes ampliar información en los módulos de Innovación Para Todos y demás material
            complementario sugerido en la sección <a href='#'><strong>Recursos de
            profundización</strong></a> o complementarios.
          </div>
          <div className='unc-row unc-padding-1'>
            <br /><br />
            Según su grado de novedad, la innovación ha sido clasificada así:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M04_IMG47.jpg',
                label: (
                  <div>
                    <h5>Innovación incremental</h5>
                    Es la forma más común de innovación, pues propone cambios pequeños a la
                    oferta tradicional que generan valor en los consumidores finales.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M02_IMG09.jpg',
                label: (
                  <div>
                    <h5>Innovación radical</h5>
                    Rompe todos los paradigmas acerca de una actividad, un producto, un servicio
                    y genera un nivel superior en la competencia; por ejemplo, las USB hicieron
                    desaparecer a los diskettes.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M02_IMG07.jpg',
                label: (
                  <div>
                    <h5>Otros tipos de innovación</h5>
                    También se clasifica la innovación por los aspectos en los que ocurre, por
                    ejemplo, es común que se hable de innovación en producto, proceso, modelo
                    organización e, inclusive, hace poco se ha hablado de <strong>Innovación en
                    modelos de negocio</strong>: la forma en la que las empresas generan ingresos
                    y valor. Esta ha sido un tipo de innovación común en las últimas décadas en
                    las que las organizaciones necesitan cada vez más diferenciación y ventaja
                    competitiva.
                  </div>
                )
              }
            ]}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            Hasta aquí, al recapitular, queda claro que hay distintas definiciones de innovación,
            todas incluyentes y/o complementarias, y que al hablar de emprendimientos creativos y
            culturales, la innovación también puede estar presente, siendo un elemento que
            posibilita su diferenciación y ventaja en el mercado, lo cual a su vez permite
            también su sostenibilidad económica.
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
