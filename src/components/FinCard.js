import React from "react";

import Member from "./Member";
import VideoPlayer from "./VideoPlayer";

import trilluxePic from '../img/trilluxe.webp';
import roederPic from '../img/röder.webp';
import schweinePic from '../img/schweineaim.webp';
import marfPic from '../img/marf.webp';
import bladerPic from '../img/blader.webp';
import fibuPic from '../img/fibu.webp';
import nallikPic from '../img/nallik.webp';
import smithPic from '../img/smith.webp';

import './FinCard.css';

const FinCard = ({ fin }) => {


	const getImage = (player) => {
		switch (player) {
			case 'Röder':
				return roederPic;
			case 'TrilluXe':
				return trilluxePic;
			case 'Marf':
				return marfPic;
			case 'Blader':
				return bladerPic;
			case 'Fibu':
				return fibuPic;
			case 'Nallik':
				return nallikPic;
			case 'Smith':
				return smithPic;
			default:
				return schweinePic;
		}
	}


	return (
		<div className="card-container">
			<Member
				name={fin.player}
				imgSrc={getImage(fin.player)}
			/>
			<h2 className="fin-player-title">{fin.player}{fin.clip ? <p><a href={fin.clip} target="_blank" rel="noreferrer">Clip</a>:</p> : ''}</h2>
			{fin.clip ? <div className="mini-video-flex">
				<VideoPlayer source={fin.clip} width="300px" height="169px" loading="lazy" />
			</div> : ""}
		</div>
	)
}

export default FinCard;