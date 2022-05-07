import React from "react";
import Member from "./Member";
import './Team.css';
import trilluxePic from '../img/trilluxe.png';
import roederPic from '../img/röder.png';
import marfPic from '../img/marf.png';
import fibuPic from '../img/fibu.png';
import bladerPic from '../img/blader.png';
import schweineaimPic from '../img/schweineaim.png';

const Team = ({ all }) => {
	return (
		<div>
			<h2 className="team-title">{all ? "Schweineaim Racing Team" : "Schweineaim Top 3"}</h2>
			<div className="team-container">
				<Member name="Röder" imgSrc={roederPic} />
				<Member name="Trilluxe" imgSrc={trilluxePic} />
				<Member name="Smith" imgSrc={schweineaimPic} />
				{all ?
					<React.Fragment>
						<Member name="Blader" imgSrc={bladerPic} />
						<Member name="Marf" imgSrc={marfPic} />
						<Member name="Fibu" imgSrc={fibuPic} />
					</React.Fragment>
					: ""
				}
			</div>
			{all ?
				<React.Fragment>
					<h2 className="team-title">Social Media:</h2>
					<div className="social-container">
						<table>
							<tbody>
								<tr>
									<td>🐷 Trilluxe:</td>
									<td><a href="https://www.twitch.tv/trilluxe" target="_blank" rel="noreferrer">Twitch</a></td>
									<td><a href="https://twitter.com/TrilluXe" target="_blank" rel="noreferrer">Twitter</a></td>
								</tr>
								<tr>
									<td>🏎 Röder:</td>
									<td><a href="https://www.twitch.tv/roeder" target="_blank" rel="noreferrer">Twitch</a></td>
									<td><a href="https://twitter.com/Roeder2033" target="_blank" rel="noreferrer">Twitter</a></td>
								</tr>
								<tr>
									<td>👑 🥵 Marf:</td>
									<td><a href="https://www.twitch.tv/marfymcfly" target="_blank" rel="noreferrer">Twitch</a></td>
									<td><a href="https://twitter.com/marfymcfly" target="_blank" rel="noreferrer">Twitter</a></td>
								</tr>
								<tr>
									<td>⚔️ Blader:</td>
									<td><a href="https://www.twitch.tv/destroyblader" target="_blank" rel="noreferrer">Twitch</a></td>
									<td><a href="https://twitter.com/DestroyBlader" target="_blank" rel="noreferrer">Twitter</a></td>
								</tr>
								<tr>
									<td>👁 Fibu:</td>
									<td><a href="https://www.twitch.tv/iiiuminatu" target="_blank" rel="noreferrer">Twitch</a></td>
									<td><a href="https://twitter.com/ParadoXonCSGO" target="_blank" rel="noreferrer">Twitter</a></td>
								</tr>
								<tr>
									<td>😶‍🌫️ Smith:</td>
									<td>?</td>
									<td>?</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2 className="team-title">Bugs, Features, Anregungen?:</h2>
					<div className="social-container">
						<table>
							<thead>
								<tr><td colSpan="3">(Shameless Plug):</td></tr>
							</thead>
							<tbody>
								<tr>
									<td>👾 Riino:</td>
									<td>
										<a
											href="https://twitter.com/riino_dev"
											target="_blank"
											rel="noreferrer"
										>Twitter</a>
									</td>
								</tr>
								<tr>
									<td>👾 Das Projekt auf:</td>
									<td>
										<a
											href="https://github.com/JOKeRiino/schweineaim-remixed"
											target="_blank"
											rel="noreferrer"
										>Github</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</React.Fragment>

				: ""
			}

		</div>
	);
}

export default Team;