import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Dashboard from 'shared/containers/Dashboard/index';
import Periodicls from 'shared/containers/Periodicals/index';
import Accurence from 'shared/containers/Accurence/index';
export default (
    <Route >
        <Route component={App}
            path='/'>
            <IndexRoute component={Dashboard}/> 
            <Route path='periodicls'component={Periodicls}/> 
            <Route path='accurence'component={Accurence}/> 
        </Route> 
    </Route>
);