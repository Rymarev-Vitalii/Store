var React = require('react');
var createReactClass = require('create-react-class');


var GoodsPreview= createReactClass({
	render: function(){
		const {goods,onClick,basket}=this.props;

		return (
			<div className="unit">
				<div onClick={this.props.click}>
					{goods.name}
					{goods.price}
				</div>
				<input type="button" onClick={basket} value="в корзину"></input>
			</div>
		);
	}
});
module.exports = GoodsPreview;