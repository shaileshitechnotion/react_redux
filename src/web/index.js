import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import createBrowserHistory  from 'history/lib/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';


const history = useRouterHistory(createBrowserHistory)({
    basename: '/'       
})


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <Router history={history} routes={routes}/>, document.getElementById('root'));
//registerServiceWorker();
