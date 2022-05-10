import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loader from "../components/Loader";
import MapFinishCard from "../components/MapFinishCard";
import { playerUrl, mapsUrl } from "../api.config";

import './MemberPage.css';

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
		switch (name) {
			case "Trilluxe":
				return <div className="titlelvl"><i>"Die Ruhe selbst. TrilluxeWINDMUEHLE"</i></div>;
			case "Röder":
				return <div className="titlelvl"><i>"Schmeiß' die Fuffies durch den Club und schrei BAU, BAU"</i></div>;
			case "Marf":
				return <div className="titlelvl"><i>"Der eigentliche King-of-Twitch"</i></div>;
			case "Blader":
				return <div className="titlelvl"><i>"Trackmania Smurf"</i></div>;
			case "Smith":
				return <div className="titlelvl"><i>"Smith braucht keine Clips"</i></div>;
			case "Fibu":
				return <div className="titlelvl"><i>"Skill Issue"</i></div>;
			case "Nallik":
				return <div className="titlelvl"><i>"Jura und vibin'"</i></div>;
			default:
				return ''
		}
	}

	if (playerData && mapData) {
		return (
			<div className="homepage-container">
				<div className={"title"}>{name}</div>
				{renderQuote()}
				<div className={"titlelvl"}>
					Finished: {playerData.length}/51
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

