import React from "react";
import { Link } from "react-router-dom";

import './MapCard.css';

const MapCard = ({ map, index }) => {

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
		<div className={"map-box dif" + map.map_dif} key={index}>
			<div className="box-glas"></div>
			<div className={"box-id dif" + map.map_dif}>
				{map.map_id}
			</div>
			<div className="box-content">
				Kacky Remixed #{map.map_id}
			</div>
			<div className="view-map">
				<Link to={"/map/" + map.map_id}>➤ View Map</Link>
			</div>
			<div className={"maplvl dif" + map.map_dif}>
				LVL: {getDif(map.map_dif)}
			</div>
		</div >
	)
}

export default MapCard;

