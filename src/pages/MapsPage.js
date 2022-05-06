import React, { useState, useEffect } from "react";
import axios from "axios";

import MapCard from "../components/MapCard";
import Loader from "../components/Loader";

const mapsUrl = 'https://script.google.com/macros/s/AKfycbwWoAECpywmQxKZnoVuI1UmwbghY0EorgRK0gsHYqHzYhL33XDlz0Vj66SsH3xoWe2BHw/exec?action=getMaps';

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