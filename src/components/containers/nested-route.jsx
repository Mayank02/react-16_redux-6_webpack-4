import React from 'react';
import { Route } from 'react-router-dom';
import NestedPage from './nested-page';

const NestedRoute = () => (
    <div>
      <h2>This is a nested route page based on different url type!!</h2>
      <Route path={`/nested-route/:id`} component={NestedPage}/>
    </div>
)

export default NestedRoute;