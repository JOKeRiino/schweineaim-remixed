import React, { useEffect, useState } from "react";
import axios from "axios";

import './HomePage.css';
import Team from "../components/Team";
import MapCard from "../components/MapCard";
import Loader from "../components/Loader";
import FinishChart from "../components/FinishChart";

const finishUrl = "https://script.google.com/macros/s/AKfycbyPNjPjDSnF1NYvqfsjGsBnb8c6yjiDuXHnqwbhkbmcNQ7Qve-U3U2lgaGryLu1Y_n55w/exec?action=getFinishes";
const mapsUrl = 'https://script.google.com/macros/s/AKfycbyPNjPjDSnF1NYvqfsjGsBnb8c6yjiDuXHnqwbhkbmcNQ7Qve-U3U2lgaGryLu1Y_n55w/exec?action=getMaps';

const HomePage = () => {
	const [mapData, setMapData] = useState(undefined);
	const [finData, setFinData] = useState(undefined);

	useEffect(() => {
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
		axios.get(finishUrl)
			.then(res => {
				setFinData(res.data);
			});
	}, []);

	const renderMaps = () => {
		var doneMaps = []

		mapData.forEach(map => {
			if (finData.findIndex(object => {
				return object.map === map.map_id;
			}) !== -1) {
				doneMaps.push(map);
			}
		})

		return doneMaps.map((singleMap, index) => {
			return (
				<MapCard map={singleMap} key={index} />
			)
		})
	}

	if (mapData && finData) {
		return (
			<div className="homepage-container">
				<Team />
				<FinishChart />
				<h2 className="team-title">Bereits abgeschlossene Maps:</h2>
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

export default HomePage;