import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/presentational/home';
import ReduxSample from './components/containers/redux-sample';
import SimpleRoute from './components/containers/simple-route';
import NestedRoute from './components/containers/nested-route';
import PageNotFound from './components/presentational/page-not-found';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/redux-sample' component={ReduxSample}/>
      <Route path='/simple-route' component={SimpleRoute}/>
      <Route path='/nested-route' component={NestedRoute}/>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </main>
)

export default Routes;