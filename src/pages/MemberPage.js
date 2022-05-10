import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import MapFinishCard from "../components/MapFinishCard";
import './MemberPage.css';

const playerUrl = "https://script.google.com/macros/s/AKfycbyPNjPjDSnF1NYvqfsjGsBnb8c6yjiDuXHnqwbhkbmcNQ7Qve-U3U2lgaGryLu1Y_n55w/exec?action=getPlayer&player=";
const mapsUrl = 'https://script.google.com/macros/s/AKfycbyPNjPjDSnF1NYvqfsjGsBnb8c6yjiDuXHnqwbhkbmcNQ7Qve-U3U2lgaGryLu1Y_n55w/exec?action=getMaps';

const MemberPage = () => {
	const [playerData, setPlayerData] = useState(undefined);
	const [mapData, setMapData] = useState(undefined);
	const { name } = useParams();

	useEffect(() => {
		axios.get(playerUrl + name.toLowerCase())
			.then(res => {
				setPlayerData(res.data);
			});
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
	}, [name]);

	const renderFins = () => {
		return playerData.map((finish, index) => {
			const currMap = mapData.find(x => x.map_id === finish.map);

			return (
				<MapFinishCard key={"fin" + index} clip={finish.clip} map={currMap}>
				</MapFinishCard>
			)
		})
	}

	const renderQuote = () => {
		if (name === "Trilluxe") {
			return <div className="titlelvl"><i>"Die Ruhe selbst. TrilluxeWINDMUEHLE"</i></div>
		} else if (name === "Röder") {
			return <div className="titlelvl"><i>"Trackmania-Profi mit Ghetto-Allüren"</i></div>
		} else if (name === "Marf") {
			return <div className="titlelvl"><i>"Der eigentliche King-of-Twitch"</i></div>
		} else if (name === "Blader") {
			return <div className="titlelvl"><i>"Trackmania Smurf"</i></div>
		} else if (name === "Smith") {
			return <div className="titlelvl"><i>"Smith braucht keine Clips"</i></div>
		} else if (name === "Fibu") {
			return <div className="titlelvl"><i>"Auch dabei"</i></div>
		} else if (name === "Nallik") {
			return <div className="titlelvl"><i>"Jura und vibin'"</i></div>
		}
	}

	if (playerData && mapData) {
		return (
			<div className="homepage-container">
				<div className={"title"}>{name}</div>
				{renderQuote()}
				<div className={"titlelvl"}>
					Finished: {playerData.length}/50
				</div>
				<div className="center-grid">
					<div className="mapfin-grid">
						{renderFins()}
					</div>
				</div>
			</div>
		)
	}
	return <Loader />

}

export default MemberPage

