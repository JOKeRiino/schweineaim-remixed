import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
	return (
		<div className="main-footer">
			<div className="footer-container">
				<h4>Quick Links:</h4>
				<div className="footer-divider"></div>
				<div className="footer-row-flex">
					<Link className="li-link" to="/">Home</Link>
					<Link className="li-link" to="/maps">Alle Kacky Maps</Link>
					<Link className="li-link" to="/members">Team Schweineaim</Link>
					<Link className="li-link" to="/skandale">Skandale</Link>
				</div>
				<div className="footer-row-flex">
					<p className="col">
						Made with 🐷💜 by <a
							href="https://twitter.com/riino_dev"
							target="_blank"
							rel="noreferrer"
						>Riino</a>
					</p>
				</div>
				<p className="footer-text-flex">
					Diese Webseite dient keinem kommerziellen Zweck, sondern dient ausschließlich zur Unterhaltung und zu privaten Zwecken. Jegliche Inhalte gehören den rechtmäßgen Rechteinhabern.
					<Link to="/cookie-policy">Datenschutzerklärung</Link>
				</p>
			</div>
		</div>
	)
}

export default Footer;