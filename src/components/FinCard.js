import React from "react";

import trilluxePic from '../img/trilluxe.png';
import roederPic from '../img/röder.png';
import schweinePic from '../img/schweineaim.png';
import Member from "./Member";
import './FinCard.css';
import VideoPlayer from "./VideoPlayer";

const FinCard = ({ fin }) => {
	return (
		<div className="card-container">
			<Member
				name={fin.player}
				imgSrc={fin.player === "Röder" ? roederPic : fin.player === "TrilluXe" ? trilluxePic : schweinePic}
			/>
			<h2>{fin.player} - <a href={fin.clip} target="_blank" rel="noreferrer">Clip</a>:</h2>
			<div className="mini-video-flex">
				<VideoPlayer source={fin.clip} width="300px" height="169px" />
			</div>
		</div>
	)
}

export default FinCard;