import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo02')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Cómo crear experiencias</h4>
          </div>

          <div className='unc-row unc-padding-1'>
            Ahora, <strong>cómo crear esas experiencias</strong>. Sencillo, diseñándolas. Para ello
            existen diferentes metodologías, sin embargo un grupo de ellas tienen en común, como
            punto de partida, el conocimiento del público al que van dirigidas.
            <br /><br />

            En este punto es importante tener en cuenta que, si bien la elaboración de una idea (o
            en este caso experiencia) es un paso fundamental en la consolidación de un negocio, no
            es el único proceso a realizar. Validar el tipo de mercado al que se puede entrar, las
            necesidades de los usuarios, las características del entorno y la evaluación constante,
            son elementos que debemos integrar en nuestro proceso creativo para asegurarnos una
            buena acogida y tener un impacto real positivo.
            <br /><br />

            Así es que ahora hablaremos del otro reto mencionado al inicio de este módulo:
            <strong><i> el reto de lograr que tu oferta tenga un impacto positivo en el mercado, lo
            cual parte de tener una buena comprensión del público al que va dirigido</i></strong>.
            Continúa navegando para conocer cómo pasar desde el conocimiento del público al
            desarrollo de la oferta, los puntos que debes tener en cuenta y las herramientas que
            puedes utilizar para lograrlo.
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
