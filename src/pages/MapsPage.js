import React, { useState, useEffect } from "react";
import axios from "axios";

import MapCard from "../components/MapCard";
import Loader from "../components/Loader";
import { mapsUrl } from '../api.config';

const MapsPage = () => {
	const [mapData, setMapData] = useState(null);

	useEffect(() => {
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			})
	}, []);

	const renderMaps = () => {
		return mapData.map((singleMap, index) => {
			return (
				<MapCard map={singleMap} key={index} />
			)
		})
	}

	if (mapData) {
		return (
			<div className="homepage-container">
				<h2 className="team-title">Alle Kacky Remixed Maps</h2>
				<div className="center-grid">
					<div className="map-grid">
						{renderMaps()}
					</div>
				</div>
			</div>
		)
	}
	return (
		<Loader />
	)
}

export default MapsPage;