var React = require('react');
var createReactClass = require('create-react-class');
import product from '../goods.json';
import GoodsPreview from './goodsPreview.jsx';


var myobj = JSON.parse(localStorage.getItem('basket'));
var Goods= createReactClass({
	contextTypes: {
        //router: React.PropTypes.object.isRequired,
    },
	getInitialState(){
		if(!localStorage.getItem('basket')){
			var zagotovka=[];
			localStorage.setItem("basket", JSON.stringify(zagotovka));
		}
		return{
			obj:myobj,
			product
		};
	},
	click:function(goodsid){
		this.props.router.push(`/Goods/${goodsid}`);//!!!!!!!!!!!!!!!
	},
	//Добавить
	basket:function(goodsid){
		if(this.state.text==""){
    		alert("Please enter the text");
    	}
    	else{
			this.state.obj.push({text:`${this.state.text}`,status:true, id: Date.now()});
			this.setState({obj:this.state.obj});
			localStorage.clear();
			localStorage.setItem("todo", JSON.stringify(this.state.obj));
			this.setState({text:""});
		}
		document.getElementById('All').checked = true;
		this.setState({radiostatus:1});
	},
	render: function(){
		const {product}=this.state
		return (
			<div>
				{product.map(goods=>
						<div key={goods.id}>
							<GoodsPreview 
							goods={goods}
							name={goods.name} 
							price={goods.price}
							click={this.click.bind(null,goods.id)}
							basket={this.basket.bind(null,goods.id)}
						/>
						</div>
					)
				}
				<div className='message-container'>
                </div>
			</div>
		);
	}
});
module.exports = Goods;