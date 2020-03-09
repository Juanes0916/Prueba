import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, Video } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo03')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Marco legal, una herramienta para gestionar los activos de tu emprendimiento</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Hablar de cultura y creatividad es hablar de nosotros mismos, lo que no puede parecer
            extraño, pues somos seres culturales y creativos, aunque lo que sí puede resultar
            complejo es hablar de cultura y creatividad vinculadas a procesos regulatorios.

            De este último aspecto pueden hablar, basadas en su experiencia, dos creativas: Mónica
            Zuluaga y Alejandra Echeverry, socias del
            <a href='http://grupocrea.co/' target='_blank'><strong> Grupo Crea</strong></a>, que
            ofrece soluciones jurídicas al sector creativo y cultural de Medellín:
          </div>

          <Video videoId={318868522} />

          <div className='unc-row unc-padding-1'>
            A continuación te mostraremos dos grandes visiones sobre las cuales, desde el marco
            regulatorio, se puede realizar la gestión de los activos de tu proyecto. Por un lado,
            porque fomentan el quehacer del sector creativo y cultural y, por el otro, porque
            amparan los activos intangibles asociados a ese quehacer.
            <br /><br />

            Ambas cosas son clave para la sostenibilidad económica de tu emprendimiento. El punto
            en el cual estos dos asuntos son visibles es en la Declaración Universal de los
            Derechos Humanos:
          </div>

          <DegrantImage url='./assets/img/M01_IMG07.jpg'>
            “Toda persona tiene derecho a tomar parte libremente en la vida cultural de la
            comunidad, a gozar de las artes y a participar en el progreso científico y en los
            beneficios que de él resulten.
            <br /><br />

            Toda persona tiene derecho a la protección de los intereses morales y materiales que
            le correspondan por razón de las producciones científicas, literarias o artísticas de
            que sea autora.
            <br /><br />

            Se reconoce que sobre las producciones culturales los seres humanos ejercemos un tipo
            de propiedad, de ahí que este artículo además de consagrar la Cultura como un derecho
            humano, también sea la fuente para entender que la propiedad intelectual también lo
            es”.
            <br /><br />

            Artículo 27 de la Declaración
          </DegrantImage>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
