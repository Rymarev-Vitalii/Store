import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from './App.jsx';
import Goods from './components/first.jsx';
import Home from './components/Home.jsx';
import Basket from './components/Basket.jsx';
import Target from './components/targetproduct.jsx';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='/Home' component={Home} />
			<Route path='/Basket' component={Basket} />
			<Route path='/Goods' component={Goods}/>
			<Route path='/Goods/:goodsid' component={Target} />
		</Route>
	</Router>,
    document.getElementById('point')
);

