import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Métodos para fijar el precio</h5>

          <div className='unc-row unc-padding-1'>
            Lo que sigue a continuación es la definición del método para fijar el precio y,
            para este efecto, podemos considerar tres básicos que te compartimos, pero primero
            debes saber que independiente del método, deben considerarse los costos totales en
            los que se incurre con la fabricación o realización de un producto creativo.
            <br /><br />

            <strong>Tradicionalmente los métodos utilizados para fijar precios son:</strong>
          </div>

          <div className='unc-row'>
            {/* eslint-disable */}
            {/* TODO: Collapse */}
            <div id='Collapse_4' className='panel-group' role='tablist' aria-multiselectable='true'>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4One'>
                  <h5 className='panel-title'>
                    <a role='button' data-toggle='collapse' data-parent='#Collapse_4' href='#Collapse_4One'
                      aria-expanded='true' aria-controls='Collapse_4One'>
                      Basado en el mercado o la demanda
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4One' className='panel-collapse collapse in' role='tabpanel' aria-labelledby='Heading_4One'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Fijar el precio por debajo de lo que el consumidor está dispuesto a pagar
                      significa perder beneficios potenciales y, fijarlo por encima, puede implicar
                      pérdida de ventas. La forma más fiable es preguntarle al cliente o
                      consumidor, aunque los precios fijados por la competencia limitan la libertad
                      de un proyecto o empresa con este método.
                      <br /><br />

                      <div className='unc-row unc-row-border unc-padding-2'>
                        Un ejemplo de este método lo utiliza la Corporación Arca de N.O.E., entidad
                        radicada en Medellín y dedicada a la narración oral escénica, que en
                        principio estableció sus tarifas para las funciones con base en las
                        solicitudes de organizaciones y empresas. Cobraba relativamente económico
                        por las funciones y tenían buena acogida, a razón de 3 funciones semanales,
                        pero aparecieron nuevos proyectos y solicitudes que empezaron a demandar
                        más tiempo de los integrantes y, entonces, vinieron las dificultades para
                        programar y, por ende, los incumplimientos. El Arca decidió subir el
                        precio de las funciones y cobrar un 50 % más caro y, aunque en principio la
                        demanda bajó, aún así obtuvo más ingresos, haciendo menos presentaciones.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Two'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Two' aria-expanded='false' aria-controls='Collapse_4Two'>
                      Basado en la competencia
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Two' className='panel-collapse collapse' role='tabpanel' aria-labelledby='Heading_4Two'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      El método más utilizado en el medio para la fijación de precios es preguntar
                      cuánto cobran los otros por hacer lo mismo. Al optar por este método se fijan
                      los precios de acuerdo con los competidores, con el agravante de que las
                      características distintivas del producto o servicio son ignoradas, pues otros
                      deciden el precio. En el caso del teatro, esta es una práctica muy extendida.
                      En 2006, Acción Impro abrió la primera de sus salas en El Poblado, a una
                      cuadra del parque y fijó el precio de las entradas igual a como cobraban las
                      salas del Centro de Medellín, pero casi nunca la llenó y el promedio de
                      ocupación fue inferior al 60%.
                      <br /><br />

                      <div className='unc-row unc-row-border unc-padding-2'>
                        Acción Impro contrató un administrador que luego de indagar y preguntar a
                        los asistentes y en otros locales del sector, tomó la decisión de duplicar
                        los valores de las entradas (Conocieron el cliente). Esta compañía
                        comprendió que la ubicación afectaba la percepción de los espectadores,
                        quienes consideraban que la tarifa era muy baja para la zona y que, por
                        eso, a lo mejor las obras no eran de buena calidad. Al duplicar los precios
                        no sólo tuvo mayor asistencia sino más ingresos. Por eso, al fijar precios
                        es importante considerar otros aspectos, más allá de la competencia.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id='Heading_4Three'>
                  <h5 className='panel-title'>
                    <a className='collapsed' role='button' data-toggle='collapse' data-parent='#Collapse_4'
                      href='#Collapse_4Three' aria-expanded='false' aria-controls='Collapse_4Three'>
                      Basado en costos
                    </a>
                  </h5>
                </div>
                <div id='Collapse_4Three' className='panel-collapse collapse' role='tabpanel'
                  aria-labelledby='Heading_4Three'>
                  <div className='panel-body'>
                    <div className='unc-padding-1'>
                      Es crucial considerar los costos de producción para asegurar la recuperación
                      económica de lo invertido en materiales y en la realización. Por eso,
                      lo primero que debes hacer es identificar esos costos, los cuales se
                      clasifican en fijos y variables.
                      <br /><br />

                      <div className='unc-row unc-row-border unc-padding-2'>
                        Los fijos no varían con el número de unidades producidas. Por ejemplo,
                        el alquiler o la nómina de personal, pero las variables están
                        relacionadas de forma directa y proporcional con el número de unidades
                        fabricadas. Puede ser que a mayor producción se requiera más materia prima,
                        pero esta, por volumen, tenga un menor costo por unidad. Existen también
                        los costos incrementales, aquellos adicionales implicados en la venta, por
                        ejemplo, la publicidad, el envío a domicilio de las entradas, el empaque,
                        la distribución a zonas más alejadas y el mejoramiento de equipos o de la
                        infraestructura. Una vez se conocen los costos fijos y variables se puede
                        calcular el umbral de rentabilidad, información fundamental para cualquier
                        decisión sobre el precio.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-enable */}
          </div>

          <div className='unc-row unc-padding-1'>
            Con la irrupción de las nuevas tecnologías y la proliferación de los nuevos modelos de
            negocio que utilizan economías colaborativas, han nacido también nuevas formas de
            fijar los precios de una empresa cultural o creativa, es decir, es lo que se conoce
            como la fijación dinámica de precios o dynamicpricing.
          </div>

          <DegrantImage url='./assets/img/M04_IMG38.jpg' inverse>
            Se trata de una estrategia de presupuesto, en la que el valor de la venta cambia en
            función de la oferta y la demanda, y lo hace en tiempo real. Es propia de
            estrategias como <i>Revenue Management</i>, cuyo lema es ofrecer el recurso correcto,
            al cliente correcto, en el momento correcto y al precio correcto.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Empresas de éxito como Amazon o Apple se apoyan en herramientas de <i>business
            intelligence</i> para mejorar sus resultados, al hacer un seguimiento continuo de los
            precios, estrategia que les ha posibilitado obtener un aumento
            de beneficios con un promedio del 25%.
            <br /><br />

            Pero además hay clientes dispuestos a pagar precios distintos por el mismo producto,
            según la situación, lugar y época del año. Es el caso de Uber, que subió los
            precios de forma exagerada en una tormenta de nieve en Nueva York, hace algunos
            años, durante una Navidad y, a pesar de las quejas y la polémica suscitada, el
            servicio se contrató.
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
