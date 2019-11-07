import React, { Component }  from "react";
import ReactDOM from "react-dom";
import information from "../../../Information.png"

const style = {
	position: 'absolute',
	display: 'block',
	minWidth: '700px',
	height: '150px',
	backgroundColor: 'rgba(0,0,0,0.3)',
	zIndex:'2',
	bottom: '5%',
	left: '5%',
	textAlign: 'left'
	
	
	
}

const img = {
	
	marginTop: '1rem',
	marginBottom: '1.5rem'
}
const li ={
	position: 'relative',
	fontFamily: 'Arial',
	color: 'rgba(200,200,200,0.8)',
	fontSize: '.8rem',
	fontWeight: 'lighter',
	marginTop: '0.1em',
	height: '40px',
	
}
	
const ul ={
	listStyle: 'none',
	
}

const press = {
	position: 'relative',
	display: 'block',
	width: '6rem',
	height: '1rem',
	border: '1px solid #cdcdcd',
	marginRight: '.5rem',
	opacity: '.7',
	textAlign: 'center',
	left: '75px',
	top: '-33px',
	fontSize: '9px'
	
}

const p = {
	position: 'relative',
	left: '185px',
	top: '-50px'
}
const Information = () => {
  return (
    
      <div style={style}> 
		<ul style={ul}>
		<li><img style ={img} src={information} /></li>
		<li style={li}> <p>2019.7.4</p> <div style={press}>PRESS RELEASE</div> <p style={p}>"METAL WOLF CHAOS XD" Release Date Announced</p></li>
		<li style={li}> <p>2019.6.10 </p> <div style={press}>PRESS RELEASE</div> <p style={p}>New Action RPG "ELDEN RING" Announced</p></li>
		</ul>
	  
	  </div>
    
  );
};
export default Information;
ReactDOM.render(<Information />, document.getElementById("info"));