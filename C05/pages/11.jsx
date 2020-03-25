import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  Popup,
  UDScalable,
  UDScrollbars
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const items = [
  {
    title: (<h4>Generar confianza</h4>),
    content: (
      <div>
        Una historia no sólo cuenta una realidad de manera diferente sino que muestra su
        lado diferente. Da a conocer aspectos desconocidos y genera confianza.
      </div>
    )
  },
  {
    title: (<h4>Son fáciles de recordar</h4>),
    content: (
      <div>
        Una historia logra plasmar una secuencia y un flujo de hechos, que hacen que se
        recuerden con facilidad.
      </div>
    )
  },
  {
    title: (<h4>Son fáciles de contar</h4>),
    content: (
      <div>
        Al ser fáciles de recordar también son fáciles de transmitir. Las historias se
        comparten, generando el voz a voz.
      </div>
    )
  },
  {
    title: (<h4>Brinda contexto a los datos</h4>),
    content: (
      <div>
        Una buena historia ayuda a influir en cómo la gente interpreta los datos. Da un
        contexto sobre el que los datos tienen sentido y se relacionan.
      </div>
    )
  },
  {
    title: (<h4>Las historias se aman</h4>),
    content: (
      <div>
        Nos encanta una buena historia y no nos cansamos de escucharla una y otra vez.
        Hacen lo complejo simple y dan una dimensión diferente a la cotidianidad.
      </div>
    )
  },
  {
    title: (<h4>Crean mayor conexión</h4>),
    content: (
      <div>
        Crean una conexión profunda y emocional, diferente a todos los demás argumentos
        funcionales y de desempeño que pueda estar dando a su cliente potencial.
      </div>
    )
  },
  {
    title: (<h4>Apelan al lado emocional</h4>),
    content: (
      <div>
        Todos tenemos un corazón. Una historia nos hace humanos y cercanos y convierte
        la imagen fría de una empresa anónima en personas en las cuales se puede confiar.
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
          <div className='unc-row unc-row-section-title'>
            <h4>Narrativas transmedia</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Bueno, ya con los ejemplos claros, ahora te hablaremos de una aplicación específica
            de la llamada narrativa transmedia, narración transmedia o narrativa transmediática
            (storytelling, término utilizado en inglés). Un tipo de relato en el que la historia
            se despliega por medio de múltiples medios y plataformas.
            <br /><br />

            Estas narrativas se han popularizado como una herramienta para conectarse con las
            audiencias, salirse de la manera acartonada y fría de hablar de negocios y para lograr
            mayor empatía con clientes potenciales.
            <br /><br />

            Lo primero que debes saber o tener claro son las ventajas de contar historias. Entre
            otras, estas son:
            <br /><br />
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic en los componentes del gráfico y conoce más sobre las ventajas de la
            narrativa transmedia.</small>
          </div>

          <UDScalable>
            <div className='unc-row unc-padding-1' style={{ height: '445px', margin: 'auto 330px', width: '500px' }}>
              <div className='text-center'>
                <div id='obj-historias' className='unc-row-scalable' data-width='500'>
                  <div className='unc-scalable'>
                    <img src='./assets/img/M05_IMG40.jpg' width='100%' />
                    <div
                      className='unc-circle unc-c1'
                      onClick={() => Popup.open(items[0])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '304px',
                        top: '3px',
                        width: '110px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c2'
                      onClick={() => Popup.open(items[1])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '355px',
                        top: '128px',
                        width: '110px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c3'
                      onClick={() => Popup.open(items[2])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '304px',
                        top: '252px',
                        width: '110px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c4'
                      onClick={() => Popup.open(items[3])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '179px',
                        top: '304px',
                        width: '110px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c5'
                      onClick={() => Popup.open(items[4])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '55px',
                        top: '252px',
                        width: '110px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c6'
                      onClick={() => Popup.open(items[5])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '4px',
                        top: '128px',
                        width: '110px'
                      }}>
                    </div>
                    <div
                      className='unc-circle unc-c7'
                      onClick={() => Popup.open(items[6])}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        left: '55px',
                        top: '3px',
                        width: '110px'
                      }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UDScalable>

          <div className='unc-row unc-padding-1'>
            Todos estos aspectos nos demuestran, entonces, que la narrativa transmedia propicia que
            los usuarios completen esos vacíos de las otras historias (se conviertan en
            prosumidores) y participen creando nuevos relatos.
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
