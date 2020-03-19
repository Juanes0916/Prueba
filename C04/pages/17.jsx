import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <div className='unc-row unc-row-section-title'>
            <h4>Recursos de profundización</h4>
          </div>

          <div className='unc-row unc-row-tip'>
            <small>Haz clic sobre cada ícono para acceder al recurso de profundización</small>
          </div>

          <h5>Módulos ELPAUER sugeridos</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='/mis-contenidos/portada/20' target='_blank' className='pecc-96b unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Propiedad Intelectual</div>
                <div className='unc-prompt-description'>Innovación Para Todos</div>
                <div className='unc-prompt-autor'>Sol Beatriz Calle</div>
              </div>
            </div>
          </div>

          <h5>Documentos en biblioteca</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/files/Anexo_1_Creatividad_y_cultura.pdf' target='_blank' className='pecc-112 unc-fill
                  unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>
                  Información sobre los intangibles y su gestión. Además podrás acceder a más
                  información sobre la sistemátización y evaluación en el sector creativo y
                  cultural.
                </div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='./assets/files/Lista_de_referencias_Gestión_de_intangibles.pdf' target='_blank'
                  className='pecc-112 unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documento en biblioteca</div>
                <div className='unc-prompt-description'>Bibliografía</div>
                <div className='unc-prompt-autor'>ELPAUER</div>
              </div>
            </div>
          </div>

          <h5>Documentos externos</h5>

          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='http://www.mincultura.gov.co/areas/fomento-regional/Documents/Compendio-Pol%C3%ADticas-Culturales.pdf'
                  target='_blank' className='pecc-10f unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Normas relacionadas</div>
                <div className='unc-prompt-autor'>MINTIC</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='https://publications.iadb.org/bitstream/handle/11319/3659/La%20economia%20naranja%3A%20Una%20oportunidad%20infinita.pdf?sequence=4'
                  target='_blank' className='pecc-10f unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Libro: La economía naranja, una oportunidad infinita</div>
                <div className='unc-prompt-autor'>Felipe Buitrago Restrepo - Iván Duque</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='https://www.dinero.com/emprendimiento/articulo/ley-naranja-y-economia-naranja-en-colombia/247374'
                  target='_blank' className='pecc-10f unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Beneficios de la ley de la Economía Naranja</div>
                <div className='unc-prompt-autor'>Dinero.com</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='http://es.presidencia.gov.co/normativa/normativa/LEY%201834%20DEL%2023%20DE%20MAYO%20DE%202017.pdf'
                  target='_blank' className='pecc-10f unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Ley 1834 de 2017 Fomento de la economía
                creativa ley naranja
                </div>
                <div className='unc-prompt-autor'>Gobierno Nacional</div>
              </div>
            </div>
          </div>
          <div className='unc-row unc-padding-1 row'>
            <div className='col-sm-6 unc-padding-1'>
              <div className='unc-row-prompt'>
                <a href='https://www.revistaarcadia.com/agenda/articulo/ley-naranja-privatizacion-economia-cultura-david-garcia/63999'
                  target='_blank' className='pecc-10f unc-fill unc-clickeable'></a>
                <div className='unc-prompt-title'>Documentos en biblioteca</div>
                <div className='unc-prompt-description'>Crítica a la ley Naranja</div>
                <div className='unc-prompt-autor'>David García</div>
              </div>
            </div>
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
