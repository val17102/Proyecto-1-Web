import React, { Component }  from "react";
import ReactDOM from "react-dom";
import f from "../../../facebook.png"
import i from "../../../instagram.png"
import y from "../../../youtube.png"
import t from "../../../twitter.png"

const style={
	position: 'absolute',
	display: 'block',
	zIndex:'2',
	right: '85px',
	bottom: '2%'
}

const ul ={
	listStyleType: 'none',
	margin: '0',
	padding: '0',
	overflow: 'hidden'
}
const img={
	width: '30px',
	height: '30px',
	marginRight: '10px'
}

const img2={
	width: '40px',
	height: '50px',
	paddingBottom: '1em',
	marginRight: '10px'
}

const img3={
	width: '25px',
	height: '25px',
	marginRight: '10px'
}

const li={
	float: 'left',
	display: 'inline',
}

const p={
	position: 'relative',
	textDecoration: 'underline',
	fontFamily: 'Abadi',
	color: 'rgba(200,200,200,0.8)',
	fontSize: '1em',
	left: '30px'
}
const SocialMedia = () => {
  return (
    
      <div style={style}> 
		<ul style={ul}>
		<li style={li}> <img style = {img} src= {t}/></li>
		<li style={li}> <img style = {img3} src= {f}/></li>
		<li style={li}> <img style = {img} src= {i}/></li>
		<li style={li}> <img style = {img2} src= {y}/></li>
		
		</ul>
		<p style={p}>>> SNS ACCOUNT</p>
	  </div>
    
  );
};
export default SocialMedia;
ReactDOM.render(<SocialMedia />, document.getElementById("social"));