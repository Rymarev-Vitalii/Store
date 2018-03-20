var React = require('react');
var createReactClass = require('create-react-class');
import product from '../goods.json';


var Target= createReactClass({
	getInitialState(){
		const {goodsid}=this.props.params;
		return {
			goods: product.find(products => products.id === goodsid)
		};
	},
	click:function(){
		alert("done");
	},
	render: function(){
		console.log(this.state.goods.name);
		return (
			<div>
				{this.state.goods.name}
				{this.state.goods.price}
				<input type="button" onClick={this.click} value="в корзину"></input>
			</div>
		);
	}
});
module.exports = Target;