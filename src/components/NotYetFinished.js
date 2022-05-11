import React from "react";
import { Link } from "react-router-dom";

import './NotYetFinished.css';

const NotYetFinished = ({ playerFins, maps }) => {

	const allMaps = maps;
	playerFins.forEach((m) => {
		if (allMaps.find((e) => {
			return e.map === m.map_id
		})) {
			var x = allMaps.findIndex(e => e.map_id === m.map);
			allMaps.splice(x, 1);
		}
	});

	const renderTable = () => {
		const dif1 = allMaps.filter(e => e.map_dif === 1);
		const dif2 = allMaps.filter(e => e.map_dif === 2);
		const dif3 = allMaps.filter(e => e.map_dif === 3);
		const dif4 = allMaps.filter(e => e.map_dif === 4);
		const dif5 = allMaps.filter(e => e.map_dif === 5);

		return (
			<React.Fragment>
				{dif1.length ? <tr>
					<td className="td-dif1">Free</td><td>{dif1.map((m, i) => <React.Fragment key={m.map_id}><Link className="notfinished-link" to={"/map/" + m.map_id} key={m.map_id}>{m.map_id}</Link>{i !== 0 && i % 10 === 0 ? <br /> : null}</React.Fragment>)}</td>
				</tr> : null}
				{dif2.length ? <tr>
					<td className="td-dif2">Finishable</td><td>{dif2.map((m, i) => <React.Fragment key={m.map_id} > <Link className="notfinished-link" to={"/map/" + m.map_id} key={m.map_id}>{m.map_id}</Link>{i !== 0 && i % 10 === 0 ? <br /> : null}</React.Fragment>)}</td>
				</tr> : null
				}
				{
					dif3.length ? <tr>
						<td className="td-dif3">Hard</td><td>{dif3.map((m, i) => <React.Fragment key={m.map_id} > <Link className="notfinished-link" to={"/map/" + m.map_id} key={m.map_id}>{m.map_id}</Link>{i !== 0 && i % 10 === 0 ? <br /> : null}</React.Fragment>)}</td>
					</tr > : null}
				{
					dif4.length ? <tr>
						<td className="td-dif4">Impossible</td><td>{dif4.map((m, i) => <React.Fragment key={m.map_id} > <Link className="notfinished-link" to={"/map/" + m.map_id} key={m.map_id}>{m.map_id}</Link>{i !== 0 && i % 5 === 0 ? <br /> : null}</React.Fragment>)}</td>
					</tr > : null
				}
				{
					dif5.length ? <tr>
						<td className="td-dif5">Bruh</td><td>{dif5.map((m, i) => <React.Fragment key={m.map_id} > <Link className="notfinished-link" to={"/map/" + m.map_id} key={m.map_id}>{m.map_id}</Link>{i !== 0 && i % 5 === 0 ? <br /> : null}</React.Fragment>)}</td>
					</tr > : null
				}
			</React.Fragment >
		)
	}

	return (
		<div className="notfin-table-div">
			<h2 className="team-title">Maps not yet finished</h2>
			<table className="notfin-table">
				<tbody>
					{renderTable()}
				</tbody>
			</table>
		</div>
	)
}

export default NotYetFinished;