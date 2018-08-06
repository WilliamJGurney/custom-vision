import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
// createBrowserHistory comes from react-router
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './features/pages/Login';
import Home from './features/pages/Home';
import Vision from './features/pages/Vision';
import Layout from './features/Layout';

const customHistory = createBrowserHistory();

const Root = () => {
	return (
		<Router history={customHistory}>
				<Switch>
					<Route exact={true} path="/login" component={Login} />
					<Route exact={true} path="/app/home" component={Home} />
					<Route exact={true} path="/app/vision" component={Vision} />
					<Redirect from="/" to="/login" />
				</Switch>
		</Router>	
	)
}
ReactDOM.render(
<Root />, 
document.getElementById('root') 
);

registerServiceWorker();
