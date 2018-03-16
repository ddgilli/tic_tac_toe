import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListTitle(props) {
    return(
		<div>
		  <h1>{props.title}</h1>
		  <h1>List contains {props.nbrItems} items</h1>
		</div>
	);
}

function ShoppingApp (){
	return(
	  ListTitle ( {title:"My Shopping List", nbrItems: 9}),
	  ListItems ({category: "Food", ListItem:["eggs","milk","bread"]})
	);
}

function ListItems (props) {
	return (
	   <div>
	     <h3>{props.category}</h3>
		 <ol>{props.listItems[0]}</ol>
		 <ol>{props.listItems[1]}</ol>
		 <ol>{props.listItems[2]}</ol>
		 </div>
	)
	
}

ReactDOM.render(
	<ShoppingApp />,
	document.getElementById("root")
)

	