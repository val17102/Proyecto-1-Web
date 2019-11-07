import React, { Component }  from "react";
import ReactDOM from "react-dom";
import logo from "../../../FromSoftware.png"
import slash from "../../../slash.png"

const logoS = {
	position: 'absolute',
	display: 'block',
	width: '20%',
	height: '4%',
	zIndex:'2',
	left: '5%',
	bottom: '58%'	
}

const main_menu ={
	position: 'absolute',
	display: 'block',
	zIndex:'2',
	marginTop: '1.8em',
	listStyle:'none',
	bottom: '49%',
	left: '4.5%',
	height: '6%',
	margin: '0',
	padding: '0',
	width: '750px'
}

const li = {
	float: 'left',
	textDecoration: 'none',
	color: '#fff',
	position: 'relative',
	fontSize: '16px',
	padding: '5px',
	fontFamily: 'Abadi',
	color: 'rgba(230,230,230,0.8)',
	letterSpacing: '.1em'
}
const Menu = () => {
  return (
    <div>
      <img id="logo" src={logo} alt="FromSoftware" style={logoS}/>
	  <ul id ="main_menu" style={main_menu}> 
	  <li style={li}> COMPANY </li>
	  <li style={li}>    <img src={slash}/>  </li>
	  <li style={li}> PRODUCTS </li>
	  <li style={li}>    <img src={slash}/>  </li>
	  <li style={li}> PRESS RELEASE </li>
	  <li style={li}>    <img src={slash}/>  </li>
	  <li style={li}> RECRUIT </li>
	  <li style={li}>    <img src={slash}/>  </li>
	  <li style={li}> SUPPORT </li>
	  </ul>
    </div>
  );
};
export default Menu;
ReactDOM.render(<Menu />, document.getElementById("menu"));