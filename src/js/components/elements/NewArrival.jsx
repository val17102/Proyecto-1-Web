import React, { Component }  from "react";
import ReactDOM from "react-dom";
import arrival from "../../../newarrival.png"
const style = {
	position: 'absolute',
	display: 'block',
	width: '280px',
	height: '80px',
	backgroundColor: 'rgba(0,0,0 0.5)',
	border: '1px solid #ef7726',
	padding: '0.5em 0',
	zIndex:'2',
	bottom: '16%',
	right: '85px',
	alignItems: 'center',
	textAlign: 'center',
	color: '#ef7726',
	fontFamily: 'Abadi',
	fontSize: '.8rem',
	fontWeight: 'lighter',
	letterSpacing: '.1em'
}

const img = {
	display: 'block',
	marginLeft: '40px',
	marginright: '37px',
	marginTop: '0.5em'
}

const p = {
	marginTop: '0.7em'
}
const NewArrival = () => {
  return (
    
      <div style={style}> 
		<img style={img} src={arrival}/>
		<p style={p}>2019.6.10 Update</p>
	  
	  </div>
    
  );
};
export default NewArrival;
ReactDOM.render(<NewArrival />, document.getElementById("newArrival"));