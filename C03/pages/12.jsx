import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  Popup,
  AudioList,
  ListSection,
  ListItem
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const popup = (file) => {
  Popup.open({
    content: (
      <AudioList headerImageSrc='./assets/img/M03_IMG26.jpg'>
        <ListSection
          file={file}
          title='¿Quién ha utilizado Growth hacking para crear o mejorar su oferta?'
        >
          <ListItem
            title='Historia de AIRBNB'
            start={0}
            end={73}
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
          <h5>Growth Hacking</h5>

          <div className='unc-row unc-padding-1'>
            La segunda metodología que queremos mostrarte es el <strong><i>Growth
            Hacking</i></strong>, herramienta que se basa en entender cómo los usuarios hacen
            uso de nuestro producto o servicio y cómo hacer crecer una marca por medio de datos,
            pruebas y experimentos.
            <br /><br />

            Se trata de una tendencia que engloba procesos, programación y estrategias de
            <i> marketing</i>, que se comenzó a adaptar en los <i>startups</i> (negocios de la era
            digital) para maximizar su crecimiento, incrementando el número de usuarios con una
            inversión y esfuerzo mínimos. Sin embargo, muchas de las técnicas son aplicables a
            cualquier negocio sin importar su tamaño ni sector.
          </div>

          <h5>Características de un Growth Hacker</h5>

          <div className='unc-row row unc-row-icon-title'>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-929 unc-fill'></span>
              <h5>Le apasionan los datos</h5>
              <div className='unc-text'>
                Sin datos, el <i>growth hacker</i> está perdido porque no sabe qué medir, qué
                mejorar ni hacia dónde ir.
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-900 unc-fill'></span>
              <h5>Es creativo</h5>
              <div className='unc-text'>
                Busca solucionar los problemas a los que se enfrenta de una forma diferente.
              </div>
            </div>
            <div className='col-sm-4 unc-padding-1'>
              <span className='pecc-926 unc-fill'></span>
              <h5>Es curioso</h5>
              <div className='unc-text'>
                En <i>growth hacker</i> siempre se plantea el porqué de las cosas y trata de ver
                por qué los usuarios se comportan de una forma u otra.
              </div>
            </div>
          </div>

          <div className='unc-row unc-padding-1'>

            <div className='text-center'>
              <button className='unc-button' onClick={() => popup('./assets/media/m02_07.mp3')}>
                <span className='btn-label'><i className='icon-volume-2'></i></span>
                ¿Quién ha utilizado Growth hacking para crear o mejorar su oferta?
              </button>
            </div>
          </div>

          <DegrantImage url='./assets/img/M02_IMG22.jpg'>
            No se trata de poner mucho dinero en estrategias de marketing y publicidad y contratar
            una decena de <i>growth hackers</i>, sino de conseguir gente inteligente con
            habilidades, creativas y una gran capacidad de superar el miedo a fallar.
          </DegrantImage>

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
