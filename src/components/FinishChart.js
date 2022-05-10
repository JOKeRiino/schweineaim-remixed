import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend } from "recharts";

import Loader from "./Loader";
import { finishUrl } from '../api.config';

import './FinishChart.css';

const FinishChart = () => {
	const [finData, setFinData] = useState([]);

	// const data = [
	// 	{
	// 		"name": "Date",
	// 		"trill": [86, 87, 88],
	// 		"pv": 2400,
	// 	},
	// ]

	useEffect(() => {
		axios.get(finishUrl)
			.then(res => {
				setFinData(res.data);
			});
	}, []);

	const transformFinData = () => {
		const graphData = [];

		finData.forEach(fin => {
			if (fin.date) {
				if (!graphData.find((e) => { return fin.date === e.name })) {
					graphData.push({ "name": fin.date });
				}
			}
		})

		//Sorts the graphData in ascending order by date
		graphData.sort(function (a, b) {
			var keyA = new Date(a.name),
				keyB = new Date(b.name);
			// Compare the 2 dates
			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
		});

		//Adds the player finishes to the array
		graphData.forEach((date, index) => {
			date["TrilluXe"] = [];
			date["Röder"] = [];
			date["Marf"] = [];

			finData.forEach(finish => {
				if (finish.date === date.name) {
					if (date[finish.player]) {
						date[finish.player].push(finish.map)
					} else {
						date[finish.player] = [finish.map];
					}
				}
			})

			date.Trill_c = date.TrilluXe.length;
			date.Marf_c = date.Marf.length;
			date.Röder_c = date.Röder.length;

			if (index >= 1) {
				date.Trill_k = graphData[index - 1].Trill_k + date.TrilluXe.length;
				date.Marf_k = graphData[index - 1].Marf_k + date.Marf.length;
				date.Röder_k = graphData[index - 1].Röder_k + date.Röder.length;
			} else {
				date.Trill_k = date.TrilluXe.length;
				date.Marf_k = date.Marf.length;
				date.Röder_k = date.Röder.length;
			}
		})

		graphData.forEach(date => {
			date.name = new Date(date.name).toLocaleDateString().substring(0, 4);
		})

		//console.log(graphData);
		return graphData;
	}

	const CustomCountTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="label">{`${label}`}</p>
					<p className="label">Trill: {payload[0].payload.TrilluXe.length ? payload[0].payload.TrilluXe.join(", ") : '0'}</p>
					<p className="label">Röder: {payload[0].payload.Röder.length ? payload[0].payload.Röder.join(", ") : '0'}</p>
					<p className="label">Marf: {payload[0].payload.Marf.length ? payload[0].payload.Marf.join(", ") : '0'}</p>
				</div>
			);
		}
		return null;
	};

	const CustomKumTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="label">{`${label}`}</p>
					<p className="label">Trill: {payload[0].payload.Trill_k}</p>
					<p className="label">Röder: {payload[0].payload.Röder_k}</p>
					<p className="label">Marf: {payload[0].payload.Marf_k}</p>
				</div>
			);
		}
		return null;
	};


	if (finData.length) {
		const graph = transformFinData();
		return (
			<div className="graph-container">
				<h2 className="team-title">Finished Maps per Day</h2>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={graph}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<Legend verticalAlign="bottom" height={30} />
						<XAxis dataKey={"name"} />
						<YAxis />
						<CartesianGrid stroke="#113" />
						<Tooltip content={<CustomCountTooltip />} />
						<Line strokeWidth={2} type="monotone" legendType="circle" dataKey={"Trill_c"} stroke="#00ccff" />
						<Line strokeWidth={2} type="monotone" legendType="circle" dataKey={"Röder_c"} stroke="#d400d4" />
						<Line strokeWidth={2} type="monotone" legendType="circle" dataKey={"Marf_c"} stroke="#F58216" />
					</LineChart>
				</ResponsiveContainer>

				<h2 className="team-title">Finished Maps over Time</h2>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={graph}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<Legend verticalAlign="bottom" height={30} />
						<XAxis dataKey={"name"} />
						<YAxis />
						<CartesianGrid stroke="#113" />
						<Tooltip content={<CustomKumTooltip />} />
						<Line strokeWidth={2} type="monotone" legendType="circle" dataKey={"Trill_k"} stroke="#00ccff" />
						<Line strokeWidth={2} type="monotone" legendType="circle" dataKey={"Röder_k"} stroke="#d400d4" />
						<Line strokeWidth={2} type="monotone" legendType="circle" dataKey={"Marf_k"} stroke="#F58216" />
					</LineChart>
				</ResponsiveContainer>
			</div >
		)
	}
	return (
		<div className="graph-container"><Loader /></div>
	)
}

export default FinishChart;