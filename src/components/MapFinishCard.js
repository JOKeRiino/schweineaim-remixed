import React from "react";
import './MapFinishCard.css';
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const MapFinishCard = ({ map, clip }) => {
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
				LVL: {map.map_dif === 1 ? "Free" : map.map_dif === 2 ? "Geht" : map.map_dif === 3 ? "Hard" : map.map_dif === 4 ? "Imp" : map.map_dif === 5 ? "Bruh" : ""}
			</div>
			<div className="mini-video">
				<VideoPlayer source={clip} width="300px" height="169px" />
				{clip ? <p>Video geht nicht? <a href={clip} target="_blank" rel="noreferrer">Hier</a></p> : ""}
			</div>
		</div >
	)
}

export default MapFinishCard;

