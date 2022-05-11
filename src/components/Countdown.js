import React, { useState, useEffect, useRef } from "react";
import './Countdown.css';

const Countdown = () => {
	const [timerDay, setTimerDay] = useState();
	const [timerHour, setTimerHour] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();
	const dd = useRef(undefined);
	const hh = useRef(null);
	const mm = useRef(null);
	const ss = useRef(null);

	const countDownDate = new Date("June 1,2022 ").getTime();

	useEffect(() => {
		//startTimer();
		const interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;

			const days = Math.floor(distance / (24 * 60 * 60 * 1000));
			const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			dd.current.style.strokeDashoffset = 440 - (440 * days) / 31;
			hh.current.style.strokeDashoffset = 440 - (440 * hours) / 24;
			mm.current.style.strokeDashoffset = 440 - (440 * minutes) / 60;
			ss.current.style.strokeDashoffset = 440 - (440 * seconds) / 60;

			if (distance < 0) {
				//Stop timer
				clearInterval(interval.current);
			} else {
				//Update timer
				setTimerDay(days);
				setTimerHour(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [countDownDate])

	return (
		<div>
			<h2 className="team-title">Kacky Time remaining</h2>
			<div id="time">
				<div className="circle" style={{ "--clr": "#00ccff" }}>
					<svg>
						<circle cx="70" cy="70" r="70"></circle>
						<circle cx="70" cy="70" r="70" ref={dd}></circle>
					</svg>
					<div id="days">
						{timerDay}
						<br />
						<span>Days</span>
					</div>
				</div>
				<div className="circle" style={{ "--clr": "#d400d4" }}>
					<svg>
						<circle cx="70" cy="70" r="70"></circle>
						<circle cx="70" cy="70" r="70" ref={hh}></circle>
					</svg>
					<div id="hours">
						{timerHour}
						<br />
						<span>Hours</span>
					</div>
				</div>
				<div className="circle" style={{ "--clr": "#F58216" }}>
					<svg>
						<circle cx="70" cy="70" r="70"></circle>
						<circle cx="70" cy="70" r="70" ref={mm}></circle>
					</svg>
					<div id="minutes">
						{timerMinutes}
						<br />
						<span>Minutes</span>
					</div>
				</div>
				<div className="circle" style={{ "--clr": "greenyellow" }}>
					<svg>
						<circle cx="70" cy="70" r="70"></circle>
						<circle cx="70" cy="70" r="70" ref={ss}></circle>
					</svg>
					<div id="seconds">
						{timerSeconds}
						<br />
						<span>Seconds</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Countdown;