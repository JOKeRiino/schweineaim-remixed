import React from "react";
import loading from "../img/loading.gif";
import './Loader.css';

const Loader = () => {
	return (
		<div className="loader-container">
			<h2 className="team-title">Loading...</h2>
			<img
				alt="dancing pepe frog loading animation"
				src={loading}
				width="400px"
			/>
		</div>
	)
}

export default Loader;