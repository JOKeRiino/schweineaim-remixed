import React from "react";
import './MapCard.css';
import { Link } from "react-router-dom";

const MapCard = ({ map, index }) => {
	return (
		<div className={"map-box dif" + map.map_dif} key={index}>
			<div className="box-glas"></div>
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
		</div >
	)
}

export default MapCard;

