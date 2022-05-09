import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import './MapPage.css';
import FinCard from "../components/FinCard";

import copiumPic from '../img/copium.webp';
import kekwPic from '../img/kekw.gif';
import VideoPlayer from "../components/VideoPlayer";

const finishUrl = "https://script.google.com/macros/s/AKfycbxVAEPKBAo_0L-Uh5OZqO_LNF85jNdvEu5KcQZmxdtpeb7Q-nYgNgjSgdSmYTQvgSfE/exec?action=getFinishes";
const mapsUrl = 'https://script.google.com/macros/s/AKfycbxVAEPKBAo_0L-Uh5OZqO_LNF85jNdvEu5KcQZmxdtpeb7Q-nYgNgjSgdSmYTQvgSfE/exec?action=getMaps';

const MapPage = () => {
	const [finData, setFinData] = useState(undefined);
	const [mapData, setMapData] = useState(undefined);
	const [currMap, setCurrMap] = useState(undefined);
	const [currFins, setCurrFins] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		axios.get(finishUrl)
			.then(res => {
				setFinData(res.data);
			});
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
	}, []);

	useEffect(() => {
		if (mapData) {
			mapData.forEach(map => {
				if (map.map_id.toString() === id) {
					setCurrMap(map);
				}
			});
		}
	}, [mapData, id]);

	useEffect(() => {
		if (finData) {
			finData.forEach(fin => {
				if (fin.map.toString() === id) {
					if (!currFins.some(e => e.player === fin.player)) {
						setCurrFins(currFins => [...currFins, fin]);
					}
				}
			});
		}
	})

	const renderFinishers = () => {
		return currFins.map((fin, index) => {
			return <FinCard fin={fin} key={"fin" + index} />
		})
	}

	if (currMap) {
		return (
			<div className="homepage-container">
				<div className={"title dif" + currMap.map_dif}>Kacky Remixed #{currMap.map_id}</div>
				<div className={"titlelvl dif" + currMap.map_dif}>
					LVL: {currMap.map_dif === 1 ? "Free" : currMap.map_dif === 2 ? "Geht" : currMap.map_dif === 3 ? "Hard" : currMap.map_dif === 4 ? "Impossible" : currMap.map_dif === 5 ? "Bruh" : ""}
				</div>

				<div className="video-container">
					<h2>So und nicht anders (Clip):</h2>
					<div className="video-flex">
						<VideoPlayer source={currMap.map_clip} />
					</div>
					{currMap.map_clip ? <p>
						Wenn das Video nicht spielt, klicke <a
							href={currMap.map_clip}
							target="_blank"
							rel="noreferrer"
						>hier
						</a>!
					</p> : ''}
				</div>
				<div className="finish-container">
					<h2>Wer hats gefinished:</h2>
					{currFins.length > 0 ? <div className="finish-grid">{renderFinishers()}</div>
						: currMap.map_dif === 1 ? <div className="finish-fallback"><h3>DiE iSt FrEeeEe (Noch keiner)</h3><img src={kekwPic} alt="kekw" width="300px" height="300px" /></div> : <div className="finish-fallback"><h3>Noch niemand...</h3><img src={copiumPic} alt="copium pepe" width="300px" height="300px" /></div>}
				</div>
			</div>
		)
	}
	return (
		<Loader />
	)
}

export default MapPage;