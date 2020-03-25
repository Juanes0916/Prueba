import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDScalable,
  Popup
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>Fase 1 y 2. Preparación</h4>),
    content: (
      <div>
        Es el comienzo de la Experiencia total, pues representa el
        momento en el que alguien del público toma la decisión de
        asistir a un evento o realizar una compra. Desde ese momento,
        esta persona se desplaza en una suerte de cinta transportadora,
        acumulando y compartiendo información contextual sobre el evento
        o producto, con el objetivo último de elevar la expectación. Dar
        mayor estructura y sentido a esta fase ayuda a preparar al
        público de una forma más completa.
      </div>
    )
  },
  {
    title: (<h4>Fase 3. Intercambio artístico</h4>),
    content: (
      <div>
        Es la cúspide del arco, corresponde a la transferencia de
        emoción y significado entre el creador y el público y, en muchos
        casos, la única fase que puede experimentar una persona.
        <br /><br />

        Aunque la asistencia interpretativa -ayudar a comprender aquello
        que ve o escucha- puede llevarse a cabo en cualquier fase, es
        cada vez más habitual incorporarla en esta fase, en forma de
        “discurso del telón”, subtítulos o contenido interpretativo en
        tiempo real, a través de dispositivos móviles.
        <br /><br />

        Los museos se centran en esta fase, pues es más probable que la
        asistencia interpretativa tenga lugar mientras los visitantes se
        encuentran en el edificio, que antes o después de la visita.
      </div>
    )
  },
  {
    title: (<h4>Fase 4. Tratamiento posterior</h4>),
    content: (
      <div>
        Justo después de que se produce el intercambio artístico llega
        el período de procesar lo que acabas de experimentar y de
        creación o construcción de significados. A menudo, esto se
        produce en forma de debates post-evento, recepciones con
        creadores y foros <i>online</i>. <br /><br />

        Los mecanismos de recogida de opiniones del público (feedback),
        como son las encuestas, también juegan un papel importante a la
        hora de ayudarlo a construir habilidades para la reflexión
        crítica.
      </div>
    )
  },
  {
    title: (<h4>Fase 5. Eco del impacto</h4>),
    content: (
      <div>
        Cuando el intercambio cultural o creativo alcanza repercusión en
        las personas, el impacto prolongado puede extenderse durante
        días, meses e incluso toda una vida.
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
          <div className='unc-row unc-row-section-title'>
            <h4>¿En qué momentos se puede implicar el público?</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Como lo verás en el Arco de la implicación, sacado del libro “Implica a
            tu público” de Alan S. Brown y Rebecca Ratskin (2011), los momentos en
            los que pueden darse la implicación de tu público: desde la preparación
            (preliminar o intensa) que tiene lugar antes del intercambio creativo o
            cultural, pasando por el tratamiento posterior al intercambio, hasta el
            Eco del impacto, que puede durar toda una vida.
            <br /><br />

            Conozcamos un poco más sobre las cinco fases:
            <br /><br />
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y profundiza en las fases del
              Arco de implicación.</small>
          </div>


          <div className='unc-row unc-padding-1'>
            <h4 className='text-center'>El arco de la implicación</h4>
            <UDScalable>
              <div className='text-center'>
                <div id='obj-arco' className='unc-row-scalable' data-width='900' style={{
                  display: 'inline-block',
                  height: '240.3px',
                  width: '900px',
                  margin: '25px 180px'
                }}>
                  <div className='unc-scalable'>
                    <img src='./assets/img/M04_IMG36.png' width='100%' />
                    <div
                      className='unc-circle unc-c1'
                      onClick={() => Popup.open(items[0])}
                      style={{
                        left: '28px',
                        top: '217px',
                        width: '300px'
                      }}></div>
                    <div
                      className='unc-circle unc-c2'
                      onClick={() => Popup.open(items[1])}
                      style={{
                        left: '368px',
                        top: '217px',
                        width: '150px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c3'
                      onClick={() => Popup.open(items[2])}
                      style={{
                        left: '558px',
                        top: '217px',
                        width: '150px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c4'
                      onClick={() => Popup.open(items[3])}
                      style={{
                        left: '738px',
                        top: '217px',
                        width: '150px'
                      }}>
                    </div>
                  </div>
                </div>
              </div>
            </UDScalable>

            <br />
            Fuente: Brow, Alan & Ratzkin, Rebeca (2011). Implica a tu público (p.
            8). The San Francisco Foundation.
            <br />
            Disponible en:
            <a href='http://www.marketingdelasartes.com/implica-a-tu-publico-asimetrica'>
              http://www.marketingdelasartes.com/implica-a-tu-publico-asimetrica
            </a>
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
