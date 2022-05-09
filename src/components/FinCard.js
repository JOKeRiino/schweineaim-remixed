import React from "react";

import trilluxePic from '../img/trilluxe.png';
import roederPic from '../img/röder.png';
import schweinePic from '../img/schweineaim.png';
import Member from "./Member";
import './FinCard.css';
import VideoPlayer from "./VideoPlayer";
import marfPic from '../img/marf.png';
import bladerPic from '../img/blader.png';
import fibuPic from '../img/fibu.png';
import nallikPic from '../img/nallik.png';

const FinCard = ({ fin }) => {
	return (
		<div className="card-container">
			<Member
				name={fin.player}
				imgSrc={fin.player === "Röder" ? roederPic : fin.player === "TrilluXe" ? trilluxePic : fin.player === "Marf" ? marfPic : fin.player === "Blader" ? bladerPic : fin.player === "Fibu" ? fibuPic : fin.player === "Nallik" ? nallikPic : schweinePic}
			/>
			<h2 className="fin-player-title">{fin.player}{fin.clip ? <p><a href={fin.clip} target="_blank" rel="noreferrer">Clip</a>:</p> : ''}</h2>
			{fin.clip ? <div className="mini-video-flex">
				<VideoPlayer source={fin.clip} width="300px" height="169px" loading="lazy" />
			</div> : ""}
		</div>
	)
}

export default FinCard;