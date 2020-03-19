import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Page,
  UDScrollbars,
  UDCarousel,
  UDCollapse,
  Video
} from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';
import DegrantImage from '../../components/DegrantImage';

const panels = [
  {
    title: '¿Qué es el Derecho de la Propiedad Intelectual?',
    content: (
      <div className='unc-padding-1'>
        Es un sistema jurídico compuesto por leyes y decisiones que tienen como fin
        regular (protegiendo o poniendo límites) las relaciones resultantes entre
        autores, creadores, sus obras y creaciones y la sociedad que accede a las
        mismas.
      </div>
    )
  },
  {
    title: '¿Qué protege la propiedad intelectual?',
    content: (
      <div className='unc-padding-1'>
        Los bienes producto del intelecto humano, es decir, son producto de la mente,
        tales como invenciones, obras literarias, artísticas, símbolos, nombres… El
        Derecho de la Propiedad Intelectual NO protege las IDEAS, porque afirmar lo
        contrario sería admitir que existen límites al pensamiento. Este derecho
        protege la forma en la que expresamos estas ideas. Por ejemplo, una idea
        podría ser el amor, como concepto, no protegido por dicha legislación, pero
        escribir un libro de poemas desarrollando el amor como concepto, sí es objeto
        de protección.
      </div>
    )
  },
  {
    title: '¿Para qué sirve la propiedad intelectual?',
    content: (
      <div className='unc-padding-1'>
        Para un creador es indispensable entender cómo funciona la protección de sus
        creaciones, pues puede decidir con claridad al momento de sacar un beneficio
        de estas. Ya sea para un provecho económico, para ceder o para entender cómo
        se mueve dentro de la sociedad la creación como capital.
      </div>
    )
  }
];

const panels1 = [
  {
    title: '¿Qué categorías comprende el Derecho de la Propiedad Intelectual?',
    content: (
      <div className='unc-padding-1'>
        Protege dos tipos de categorías. La primera, los derechos de autor, que son
        una subcategoría dedicada a la protección de obras artísticas, literarias o
        científicas y que se relacionan con aquellos reconocimientos que se hacen al
        autor original de una obra o al titular de los derechos patrimoniales de la
        misma. La segunda, los derechos conexos, que hacen referencia a los derechos
        reconocidos a quienes interaccionan con estas obras originales, al sumarle su
        toque personal por medio de la interpretación,  ejecución, creación
        fonográfica o de radiodifusión.
      </div>
    )
  },
  {
    title: '¿Qué tipos de obra protege el Derecho de Autor?',
    content: (
      <div className='unc-padding-1'>
        <div className='unc-row row unc-row-icon-title'>
          <div className='col-md-6 unc-padding-1'>
            <span className='pecc-928 unc-fill'></span>
            <h5>Obras artísticas</h5>
            <div className='unc-text'>
              Según el glosario de la Organización Mundial de la Propiedad
              Intelectual OMPI, obra de arte es “aquella creación cuya finalidad es
              la de apelar al sentido estético de las personas que las contemplan”.
              Dentro de esta categoría están los dibujos, los grabados, las pinturas,
              las esculturas, las obras de arquitectura y las obras fotográficas,
              entre otras. Pero dentro de este concepto también deben entenderse las
              obras artísticas musicales (Martínez y Robayo 2006, p. 16)
            </div>
          </div>
          <div className='col-md-6 unc-padding-1'>
            <span className='pecc-102 unc-fill'></span>
            <h5>Obras Audiovisuales</h5>
            <div className='unc-text'>
              Toda creación expresada mediante una serie de imágenes asociadas, con o
              sin sonorización incorporada, que esté destinada esencialmente a ser
              mostrada a través de aparatos de proyección o cualquier otro medio de
              comunicación de la imagen y de sonido, independientemente de las
              características del soporte material que la contiene.
            </div>
          </div>
        </div>

        <div className='unc-row row unc-row-icon-title'>
          <div className='col-md-6 unc-padding-1'>
            <span className='pecc-103 unc-fill'></span>
            <h5>Obra Plástica o de Bellas Artes</h5>
            <div className='unc-text'>
              Creación artística cuya finalidad apela al sentido estético de la
              persona que la contempla, como las pinturas, dibujos, grabados y
              litografías. No quedan comprendidas en la definición, a los
              efectos de la Decisión 351 de 1993, las fotografías, las obras
              arquitectónicas y las audiovisuales.
            </div>
          </div>

          <div className='col-md-6 unc-padding-1'>
            <span className='pecc-100 unc-fill'></span>
            <h5>Obra de Arte aplicado</h5>
            <div className='unc-text'>
              Creación artística con funciones utilitarias o incorporada en un
              artículo útil, ya sea una obra de artesanía o producida en escala
              industrial.
            </div>
          </div>
        </div>

        <div className='unc-row row unc-equal-cols'>
          <div className='col-md-6 unc-padding-1'>
            <div className='unc-row-icon-title'>
              <span className='pecc-104 unc-fill'></span>
              <h5>Obras Literarias o científicas</h5>
              <div className='unc-text'>
                La OMPI la define como “un escrito de gran valor desde la perspectiva
                de la belleza y efecto emocional”. En términos generales, es todo
                escrito original, bien sea de carácter literario, científico, técnico
                o meramente práctico, sin importar su valor y finalidad. Es decir
                que, además de las obras tradicionales o clásicas como los poemas,
                las obras teatrales o escénicas, las novelas, las obras científicas,
                didácticas o técnicas, también merecen protección obras como:
                anuarios, folletos, catálogos y compilaciones de recetas culinarias,
                entre otras, que por su disposición y ordenamiento especial suponen
                un esfuerzo de índole intelectual. Los programas de computación,
                aunque no son obras literarias, para efectos del derecho de autor,
                son asimilados como tales. (Martínez y Robayo 2006 p. 16)
              </div>
            </div>
          </div>
          <div className='col-md-6 unc-padding-1'>
            <div className='unc-row-border unc-flex-center'>
              <div className='unc-padding-1'>
                <h4>Artículo 4 de la decisión 351 de 1993 y al artículo 2 de la ley
                  23 de 1982, adicionada por la ley 44 de 1993.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo01')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>Marco legal para proteger tus activos</h5>

          <div className='unc-row unc-padding-1'>
            Con este preámbulo, a continuación abordaremos el marco jurídico que protege y fomenta
            el quehacer del sector creativo y cultural, y el que permite la protección de los
            activos de conocimiento e intangibles asociados a dicho quehacer, mencionados al inicio
            de este módulo.
            <br /><br />

            Antes de hablar de este tema escuchemos el concepto que tiene de él la abogada Mónica
            Zuluaga:
          </div>

          <Video videoId={318923561} />

          <div className='unc-row unc-padding-1'>
            Según Mónica, debes tener claro que hay normas para proteger el derecho de la propiedad
            intelectual; es decir, los activos mencionados al inicio de este módulo, aquellos
            productos del ingenio o de la creatividad humana.
            <br /><br />

            En esta oportunidad no nos dedicaremos a la comprensión total de esta área del derecho,
            sino que pondremos el acento en la protección de aquellos bienes que resultan
            importantes para la gestión creativa y cultural, teniendo en cuenta que la utilización
            estratégica de la propiedad intelectual es útil a las personas, empresas y países
            para transformar sus recursos creativos y de conocimiento en activos económicos,
            capaces de impulsar el desarrollo en distintos frentes.
            <br /><br />

            Tendrás un panorama general sobre el cual te invitamos a reflexionar de acuerdo con tus
            intereses y visión personal de la propiedad intelectual en el marco de tu proyecto
            creativo.
            <br /><br />

            Antes de darte ejemplos concretos, es bueno que analices el siguiente abecé de
            propiedad intelectual que preparamos para ti:
          </div>

          <Video videoId={318926762} />

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module01' panels={panels} />
          </div>

          <div className='unc-row unc-padding-1'>
            <i>La primera subcategoría de la Propiedad Intelectual es el Derecho de Autor:</i>
          </div>

          <div className='unc-row'>
            <UDCollapse summaryClassName='unc-summary module01' panels={panels1} />
          </div>

          <DegrantImage url='./assets/img/M01_IMG44.jpg' inverse>
            Si quieres conocer sobre qué derechos te otorga la ley y cómo proteger tu creación te
            invitamos a explorar los módulos de Innovación Para Todos.
          </DegrantImage>

          <div className='unc-row unc-padding-1'>
            Otra subcategoría en este universo es la <strong>Propiedad Industrial</strong>, pues
            se desprende del derecho de la Propiedad Intelectual, para la cual también te hemos
            preparado otro abecé:
          </div>

          <div className='unc-row'>
            <UDCarousel steps={[
              {
                bgImage: './assets/img/M01_IMG23.jpg',
                label: (
                  <div>
                    <h3>¿Qué tipo de creaciones protege la Propiedad Industrial?</h3>

                    Comprende dos tipos de categorías. La primera de ellas se denomina Signos
                    Distintivos, que protege todo lo relacionado con bienes que permiten
                    establecer identidad en el mercado, como marcas, nombres comerciales, enseñas
                    comerciales, lemas e indicaciones geográficas. La segunda se llama Nuevas
                    Creaciones, que protege toda creación inventiva con aplicación en la
                    industria como diseños industriales, patentes de invención, modelos de
                    utilidad, esquemas de circuitos integrados y obtenciones vegetales.
                  </div>
                )
              },
              {
                bgImage: './assets/img/M01_IMG47.jpg',
                label: (
                  <div>
                    <h3>¿Qué bienes de la Propiedad Industrial pueden tener incidencia en la
                      gestión cultural?</h3>

                    Esta pregunta no puede responderse de una forma definitiva, pues la gestión
                    cultural puede abarcar millones de posibilidades, pero te podemos decir que
                    existen algunos elementos que pueden resultar comunes
                  </div>
                )
              }
            ]}
            />
          </div>

          <div className='unc-row unc-padding-1'>
            ¿Por qué es importante conocer y distinguir esta normativa, según Alejandra Echeverry,
            del <strong>Grupo Crea</strong>? Aquí, su respuesta:
          </div>

          <Video videoId={318931722} />

          <div className='unc-row unc-padding-1'>
            Pero como lo anunciamos antes, y como lo dice la abogada, al tema no hay que tenerle
            miedo ni pereza; por eso, te desagregaremos estos conceptos para mayor claridad.
          </div>

          <h5>Signos distintivos</h5>

          <h5 className='unc-row-title-box'>Marcas</h5>

          <div className='unc-row row'>
            <div className='col-md-6 unc-padding-1'>
              Es el signo o símbolo que sirve para identificar productos o servicios en el comercio
              diferenciándolos de otros. Para que una persona pueda considerarse dueño de una
              marca, debe solicitar su registro ante la Superintendencia de Industria y Comercio
              (SIC) o sobre quien haga sus veces. El registro es concedido por 10 años renovables.
              Artículos 134 a 174 de la Decisión 486 de 2000.
            </div>
            <div className='col-md-6 unc-padding-1'>
              Es posible que cuando se piense en proponer un evento que se realizará en varias
              oportunidades o en varias versiones, se quiera registrar como marca su nombre para
              evitar que otras personas en el mismo país hagan uso de esta misma marca o se
              beneficien de la reputación que éste ha tenido en el medio. Es necesario que dicha
              marca se use en el tiempo, pues es condición de protección su explotación económica
              durante el término de su vigencia.
            </div>
          </div>

          <div className='unc-row unc-row-bgfull unc-bgfull-contain unc-padding-2'
            data-url='./assets/img/M03_IMG_BG_FULL_V.png'>
            <div className='unc-padding-1'>
              <ul>
                <li>También se pueden registrar como marca el nombre o seudónimo de un artista o el
                título de una obra.
                </li>
                <li>Aquí lo importante es recordar que el registro excluye a terceros del uso de
                dicha marca para los mismos efectos en que ella es usada.
                </li>
                <li>La marca además, puede ser usada con un slogan o lema, para profundizar la
                recordación.
                </li>
              </ul>
            </div>
          </div>

          <h5 className='unc-row-title-box'>Lema comercial</h5>

          <div className='unc-row row'>
            <div className='col-sm-6 unc-padding-1'>
              Es un signo distintivo que se encuentra subordinado a la marca, pues su función es
              darle a ésta mayor fuerza distintiva en el mercado, a tal punto que no puede existir
              lema comercial sin marca. La titularidad se obtiene a través de registro. Artículos
              175 a 179 de la Decisión 486 de 2000.
              <br /><br />
              También es posible que como un proceso de gestión cultural, se promocione o difunda
              un producto que
            </div>
            <div className='col-sm-6 unc-padding-1'>
              tiene como sello su producción a través de una técnica especial o con productos de un
              determinado territorio, esto podría presentarse de manera más común en la gestión del
              turismo cultural, como es el caso por ejemplo de la achiras del Huila, el sombrero
              vueltiao, el bocadillo veleño, las mochilas wayuu, en estos casos la
              protección se daría a través de Denominación de Origen.
            </div>
          </div>

          <h5 className='unc-row-title-box'>Nuevas Creaciones</h5>

          <div className='unc-row row'>
            <div className='col-sm-6 unc-padding-1'>
              En cuanto a las nuevas creaciones podemos decir que, si se crea un producto con un
              diseño particular, como lapiceros, agendas, prendas de vestir y accesorios tipo
              suvenir, estos pueden ser protegidos por medio de las siguientes categorías:
            </div>
            <div className='col-sm-6 unc-padding-1'>
              Diseño Industrial: se considerará como diseño industrial la apariencia particular de
              un producto que resulte de cualquier reunión de líneas o combinación de colores o de
              cualquier forma externa bidimensional o tridimensional, línea, contorno,
              configuración, textura o material, sin que cambie el destino o finalidad de
              dicho producto (artículos 113 a 133 de la Decisión 486 de 2000).
            </div>
          </div>

          <div className='unc-row unc-padding-1'>
            Como ya dijimos, pueden ser múltiples las formas de protección de bienes de la
            Propiedad Intelectual en los procesos de gestión cultural, pero de acuerdo con los
            fines de este módulo, se describieron aquellos que, a nuestro juicio, pueden ser más
            comunes. En otras palabras, en los procesos de gestión cultural el panorama de
            protección a través de la propiedad intelectual está aún por descubrir.
            <br /><br />

            Prueba de esto es la reciente expedición de la <strong>Ley 1834 de 2017</strong>,
            ley de fomento del sector creativo y cultural, la cual mencionamos antes y cuya base
            de funcionamiento y comprensión es la Propiedad Intelectual.
            <br /><br />
          </div>

          <Video videoId={318934297} />

          <button className='unc-button unc-next mt-5' onClick={() => { props.nextPage(); }}>
            Siguiente
          </button>
        </div>
      </UDScrollbars>
    </div>
  </Page >
);

export default CustomPage;
