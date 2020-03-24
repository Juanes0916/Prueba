import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars, UDCarousel } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo04')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Qué tener en cuenta en el proceso de implicación del público?</h5>

          <div className='unc-row unc-padding-1'>
            En todo este proceso, debes tener en cuenta la diversidad de preferencias que
            hay en tu público. Cada miembro del público tiene su propio arco de implicación,
            basado en su apetito y su enfoque sobre cómo quiere implicarse.
            <br /><br />

            La investigación sobre las preferencias del público para implicarse con la obra, el
            producto creativo o el evento, nos sugiere seis tipologías generales de público:
          </div>

          <UDCarousel className='unc-filter' steps={[
            {
              bgImage: './assets/img/M04_IMG07.jpg',
              label: (
                <div>
                  <strong>Los Lectores:</strong> son personas con una “implicación ligera”,
                  personas que disfrutan haciendo poco, excepto leer notas sobre el
                  programa, carteleras, y algún que otro artículo.
                </div>
              )
            },
            {
              bgImage: './assets/img/M04_IMG38.jpg',
              label: (
                <div>
                  <strong>Los Evaluadores Críticos:</strong> prestan atención a las reseñas de
                    los críticos y a otras fuentes independientes de información antes de
                    decidir asistir.
                </div>
              )
            },
            {
              bgImage: './assets/img/M04_IMG39.jpg',
              label: (
                <div>
                  <strong>Los Conversadores Ocasionales:</strong> procesan el arte hablando sobre
                  él de manera informal con amigos y familiares.
                </div>
              )
            },
            {
              bgImage: './assets/img/M04_IMG40.jpg',
              label: (
                <div>
                  <strong>Los Procesadores Tecnológicos:</strong> hacen uso de blogs, redes
                    sociales y otros entornos digitales para implicarse
                </div>
              )
            },
            {
              bgImage: './assets/img/M04_IMG41.jpg',
              label: (
                <div>
                  <strong>Los Buscadores de Perspectivas:</strong> buscan una experiencia
                  intelectual, y disfrutan absorbiendo gran cantidad de información antes
                  y después de su asistencia.
                </div>
              )
            },
            {
              bgImage: './assets/img/M04_IMG42.jpg',
              label: (
                <div>
                  <strong>Los Aprendices Activos:</strong> desean involucrarse personalmente
                  en la configuración de su propia experiencia.
                </div>
              )
            }
          ]}
          />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
