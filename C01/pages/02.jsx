import React from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import { Page } from '../../components/PageTransitions';

import Header from '../components/Header';

const CustomPage = (props) => (
  <Page {...props} className={classNames(props.className, 'unc-pecc-wrapper', 'unc-modulo00')}>
    <Header />
    <h1>Pagina 3</h1>
  </Page>
);

export default CustomPage;
