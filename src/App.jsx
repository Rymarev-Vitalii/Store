var React = require('react');
var createReactClass = require('create-react-class');
import './styles/App.css'
import {Link} from "react-router";

var App= createReactClass({
	render: function(){
		return (
			<div className="App">
				<div className="menu-bar">
					<div className="menu-item">
						<Link to="/Basket">Basket</Link>
					</div>
					<div className="menu-item">
						<Link to="/Goods">Staff</Link>
					</div>
					<div className="menu-item">
						<Link to="/Home">Home</Link>
					</div>

				</div>
                <div className="content">
                	{this.props.children}
                </div> 
			</div>
		);
	}
});
module.exports = App;