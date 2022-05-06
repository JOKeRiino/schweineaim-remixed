import React from "react";
import { Link } from "react-router-dom";
import '../components/Header.css';
import schweineaim from '../img/schweineaim.png';

const Header = () => {
	return (
		<div className="header-container">
			<div className="title-div">
				<div className="left-title">Schweineaim</div>
				<div className="right-title">Remixed</div>
			</div>
			<img
				src={schweineaim}
				id="trill-logo"
				alt="trilluxe logo"
			/>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/maps">Maps</Link>
					</li>
					<li>
						<Link to="/members">Die Boys</Link>
					</li>
					<li>
						<Link to="/skandale">(Skandale)</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header;