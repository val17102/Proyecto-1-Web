import React, { Component }  from "react";
import ReactDOM from "react-dom";
import world from "../../../world.png"

const style = {
	position: 'absolute',
	display: 'block',
	width: '70%',
	height: '0.3%',
	zIndex:'2',
	background: 'rgb(145,190,251)',
background: 'linear-gradient(90deg, rgba(145,190,251,0.5665616588432247) 0%, rgba(98,98,98,1) 0%, rgba(126,126,126,0.8690826672465861) 16%, rgba(113,113,113,0.7682423311121324) 30%, rgba(143,143,143,0.6730042358740371) 43%, rgba(149,149,149,0.4489146000196954) 71%, rgba(185,185,185,0.1491947120645133) 100%)',
	borderRadius: '30px',
	bottom: '88%'
	
}

const style2 = {
	position: 'relative',
	left: '38%',
	top: '-8px',
	width: '0.2%',
	height: '400%',
	background: 'rgba(130,130,130)',
	fontFamily: 'Arial'
}

const write ={
	position: 'relative',
	left: '35%',
	color: 'rgba(130,130,130)',
	fontSize: '85%',
	top: '12px'
}

const number_list ={
	position: 'absolute',
	display: 'block',
	zIndex:'2',
	marginTop: '1.8em',
	listStyle:'none',
	top: '-43px',
	left: '20.8%',
	height: '6%',
	margin: '0',
	padding: '0',
	width: '70%'
}

const li = {
	float: 'left',
	textDecoration: 'none',
	color: '#fff',
	position: 'relative',
	fontSize: '90%',
	padding: '12px',
	fontFamily: 'Helvetica Nue',
	color: 'rgba(130,130,130,0.8)'
}
const world1 = {
	width: '37px',
	height: '37px',
}
const lang = {
	position: 'relative',
	left: '124%',
	top: '-102px',
	color: 'rgba(230,230,230,0.8)',
	letterSpacing: '.1em',
	width: '15%'
	
}

const MovieInfo = () => {
  return (
    
      <div style={style}>
	    <div style={style2}> </div>
		<p style={write}> Elden Ring</p>
		<ul style={number_list}>
		<li style={li}> 2016 </li>
		<li style={li}> 2017 </li>
		<li style={li}> 2018 </li>
		<li style={li}> 2019 </li>
		</ul>
		<div style={lang}>
		<img style = {world1} src={world} /> English
		</div>
	  </div>
    
);
};
export default MovieInfo;
ReactDOM.render(<MovieInfo />, document.getElementById("movieInfo"));