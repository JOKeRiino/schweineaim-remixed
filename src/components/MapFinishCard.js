import React from "react";
import { Link } from "react-router-dom";

import VideoPlayer from "./VideoPlayer";

import './MapFinishCard.css';

const MapFinishCard = ({ map, clip }) => {

	const getDif = (difficulty) => {
		switch (difficulty) {
			case 1:
				return "Free";
			case 2:
				return "Geht";
			case 3:
				return "Hard";
			case 4:
				return "Imp";
			case 5:
				return "Bruh";
			default:
				return "";
		}
	}

	return (
		<div className={"map-fin-box dif" + map.map_dif}>
			<div className={"box-id dif" + map.map_dif}>{map.map_id}</div>
			<div className="box-content">
				Kacky Remixed #{map.map_id}
			</div>
			<div className="view-map">
				<Link to={"/map/" + map.map_id}>➤ View Map</Link>
			</div>
			<div className={"maplvl dif" + map.map_dif}>
				LVL: {getDif(map.map_dif)}
			</div>
			<div className="mini-video">
				<VideoPlayer source={clip} width="300px" height="169px" loading="lazy" />
				{clip ? <p>Video geht nicht? <a href={clip} target="_blank" rel="noreferrer">Hier</a></p> : ""}
			</div>
		</div >
	)
}

export default MapFinishCard;

