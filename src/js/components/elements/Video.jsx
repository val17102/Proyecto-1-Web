import React, { Component }  from "react";
import ReactDOM from "react-dom";
import video from "../../../test.mp4"

const style = {
	position: 'fixed',
	display: 'block',
	width: '100%',
	height: '100vh',
	backgroundPosition: 'absolute',
	zIndex:'1',
	objectFit: 'cover'
	
	
}
const Video = () => {
  return (
    
      <video autoPlay loop muted style={style}>
		<source src={video} type="video/mp4" />
		<source src={video} type="video/ogg" />
                Your browser does not support the video tag.
	  </video>
    
  );
};
export default Video;
ReactDOM.render(<Video />, document.getElementById("video"));