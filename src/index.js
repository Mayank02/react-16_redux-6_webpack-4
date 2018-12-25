
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store';
import createHistory from 'history/createBrowserHistory';


import Root from './root';
import './styles/main.scss';

export const history = createHistory();
const store = configureStore();

render((
  <AppContainer>
    <Provider store={store} history={history} >
      <HashRouter>
        <Root />
      </HashRouter>
    </Provider>
  </AppContainer>
  
), document.getElementById('root'));
