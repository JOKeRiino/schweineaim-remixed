import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import VideoPlayer from "../components/VideoPlayer";
import Member from "../components/Member";
import { Link } from "react-router-dom";
import useWindowDimensions from '../Hooks/useWindowDimensions';

import trilluxePic from '../img/trilluxe.png';
import roederPic from '../img/röder.png';
import schweinePic from '../img/schweineaim.png';
import marfPic from '../img/marf.png';
import bladerPic from '../img/blader.png';
import fibuPic from '../img/fibu.png';
import nallikPic from '../img/nallik.png';

import './SkandalePage.css';

const scandalsURL = 'https://script.google.com/macros/s/AKfycbyPNjPjDSnF1NYvqfsjGsBnb8c6yjiDuXHnqwbhkbmcNQ7Qve-U3U2lgaGryLu1Y_n55w/exec?action=getScandals'

const SkandalePage = () => {
	const [scandals, setScandals] = useState([]);
	const { winWidth } = useWindowDimensions();

	useEffect(() => {
		axios.get(scandalsURL)
			.then(res => {
				setScandals(res.data);
			})
	}, []);

	const renderScandals = () => {
		return scandals.map((scan, index) => {
			return (
				<div key={index} className="scandal-container">
					{winWidth > 700 ? <VideoPlayer className="scandal-video" source={scan.clip} loading="lazy" width={"100%"} height={"auto"} />
						: <VideoPlayer className="scandal-video" source={scan.clip} loading="lazy" width={"100%"} height={"328px"} />}
					<div className="scandal-info">
						<div className="scandal-text">
							<p>"{scan.title}"</p>
							<Link to={`/map/${scan.map}`}>View Map: {scan.map}</Link>
						</div>
						<Member
							name={scan.member}
							imgSrc={scan.member === "Röder" ? roederPic : scan.member === "Trilluxe" ? trilluxePic : scan.member === "Marf" ? marfPic : scan.member === "Blader" ? bladerPic : scan.member === "Fibu" ? fibuPic : scan.member === "Nallik" ? nallikPic : schweinePic}
						/>
						<a className="scandal-backup" href={scan.clip} target="_blank" rel="noreferrer">Clip Backup</a>
					</div>
				</div>
			)
		})
	}


	if (scandals) {
		return <div className="homepage-container">
			<div className={"title"}>Skandale</div>
			<div className="scandal-grid">{renderScandals()}</div>
		</div>
	}
	return <Loader />
}

export default SkandalePage;