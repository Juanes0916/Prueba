import React from 'react'; // eslint-disable-line no-unused-vars
import { Page, UDScrollbars } from 'unc-react-creator';
import classNames from 'classnames';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo05')}>
    <Header />
    <div className='unc-container'>
      <UDScrollbars>
        <div className='unc-card'>
          <h5>¿Cuáles son los beneficios de implicar tu público?</h5>

          <div className='unc-row unc-padding-1'>
            La implicación, que consiste en una conversación centrada en el trabajo creativo en
            sí, que puede producirse en distintas plataformas tiene, entre otros, los
            siguientes beneficios:
            <br /><br />

            <div className='text-center' style={{ maxwidth: '980px' }}>
              <img src='./assets/img/M06_IMG38.jpg' />
            </div>
          </div>
        </div>
      </UDScrollbars>
    </div>
  </Page>
);

export default CustomPage;
