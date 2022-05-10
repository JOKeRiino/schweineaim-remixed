import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import VideoPlayer from "../components/VideoPlayer";
import Member from "../components/Member";
import useWindowDimensions from '../Hooks/useWindowDimensions';
import { scandalsURL } from '../api.config';

import trilluxePic from '../img/trilluxe.webp';
import roederPic from '../img/röder.webp';
import schweinePic from '../img/schweineaim.webp';
import marfPic from '../img/marf.webp';
import bladerPic from '../img/blader.webp';
import fibuPic from '../img/fibu.webp';
import nallikPic from '../img/nallik.webp';

import './SkandalePage.css';

const SkandalePage = () => {
	const [scandals, setScandals] = useState([]);
	const { winWidth } = useWindowDimensions();

	useEffect(() => {
		axios.get(scandalsURL)
			.then(res => {
				setScandals(res.data);
			})
	}, []);

	const getImage = (player) => {
		switch (player) {
			case 'Röder':
				return roederPic;
			case 'Trilluxe':
				return trilluxePic;
			case 'Marf':
				return marfPic;
			case 'Blader':
				return bladerPic;
			case 'Fibu':
				return fibuPic;
			case 'Nallik':
				return nallikPic;
			default:
				return schweinePic;
		}
	}

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
							imgSrc={getImage(scan.member)}
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