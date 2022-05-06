import React from "react";
import { Link } from "react-router-dom";
import './Member.css';

const Member = ({ name, imgSrc }) => {
	return (
		<div className="member-box">
			<div className="member-content">
				<img src={"http://localhost:3000" + imgSrc} alt={name + " profile picture"} />
				<h2>{name}<br /><Link to={"/member/" + name}>View Finishes</Link></h2>
			</div>
		</div>
	);
}

export default Member;