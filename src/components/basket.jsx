var React = require('react');
var createReactClass = require('create-react-class');


var Basket= createReactClass({
	getInitialState(){
		if(!localStorage.getItem('basket')){
			var zagotovka=[];
			localStorage.setItem("basket", JSON.stringify(zagotovka));
		}
		return{

		};
	},

    //Создание новой строки
    click: function(){
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
	//Удалить
	proba: function(num) {
    var numId = num.id;
    var newNotes = this.state.obj.filter(function(note) {
        return note.id !== numId;
    });
    this.setState({obj:newNotes});
    this.state.obj=newNotes;
    localStorage.clear();
    localStorage.setItem("todo", JSON.stringify(newNotes));
    },
	render: function(){
		return (
			<div>
				Basket
			</div>
		);
	}
});
module.exports = Basket;