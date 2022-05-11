import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import axios from "axios";
import { mapsUrl } from "../api.config";

import './FinishedByTypeChart.css';

const FinishedByTypeChart = ({ playerFins }) => {
	const [mapData, setMapData] = useState(undefined);

	useEffect(() => {
		axios.get(mapsUrl)
			.then(res => {
				setMapData(res.data);
			});
	}, []);

	const finData = [];

	const getFinData = () => {
		mapData.forEach(m => {
			if (playerFins.find(e => m.map_id === e.map)) {
				finData.push(m);
			}
		})

		const chartData = [
			{ x: "Free", values: filterChartData(finData, 1), y: filterChartData(finData, 1).length },
			{ x: "Finishable", values: filterChartData(finData, 2), y: filterChartData(finData, 2).length },
			{ x: "Hard", values: filterChartData(finData, 3), y: filterChartData(finData, 3).length },
			{ x: "Impossible", label: filterChartData(finData, 4), y: filterChartData(finData, 4).length },
			{ x: "Bruh", values: filterChartData(finData, 5), y: filterChartData(finData, 5).length },
		]

		return (
			<VictoryPie
				data={chartData.filter(e => e.y > 0)}
				animate={{ duration: 1000 }}
				colorScale={['#88CC00', '#F58216', '#6A0136', '#A300A3', 'black']}
				innerRadius={50}
				height={150}
				labelRadius={({ innerRadius }) => innerRadius + 2}
				style={{ labels: { fill: "white", fontSize: 10, font: "sans-serif" } }}
				padAngle={4}
				cornerRadius={3}
			/>
		)
	}

	const filterChartData = (fins, filter) => {
		return fins.filter(e => e.map_dif === filter);
	}

	if (mapData) {
		return (
			<div className="pie-flex">
				<h2 className="team-title">Finished Maps by Difficulty</h2>
				{getFinData()}
			</div>
		)
	}
	return (<div className="pie-flex">Loading Chart...</div>)
}

export default FinishedByTypeChart;