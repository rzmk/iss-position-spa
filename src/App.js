// import logo from "../logo.svg";
import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
	const [longitude, setLongitude] = useState(0);
	const [latitude, setLatitude] = useState(0);
	const [progress, setProgress] = useState(0);

	async function fetchISSData() {
		// const resp = await fetch("#"); // debugging
		const resp = await fetch(
			"https://api.wheretheiss.at/v1/satellites/25544"
		);
		const data = await resp.json();
		await setLongitude(String(data.longitude).slice(0, 7));
		await setLatitude(String(data.latitude).slice(0, 7));
		setProgress(0);
	}

	useEffect(() => {
		fetchISSData();
		setInterval(fetchISSData, 10000);
		setInterval(() => {
			setProgress((prev) => prev + 1);
		}, 100);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h1 className="text-4xl sm:text-6xl">
					International Space Station Position
				</h1>
				<table className="my-8 text-3xl sm:text-4xl">
					<tbody>
						<tr>
							<td className="text-left">Latitude:</td>
							<td className="text-right">{latitude}</td>
						</tr>
						<tr>
							<td className="text-left">Longitude:</td>
							<td className="text-right pl-10">{longitude}</td>
						</tr>
					</tbody>
				</table>
				<ProgressBar progress={progress} />
				<a
					href="https://github.com/rzmk/iss-position-spa"
					target="_blank"
					rel="noreferrer"
				>
					<AiFillGithub className="mt-8 w-12 h-12 hover:scale-125 transition ease-in-out" />
				</a>
			</header>
		</div>
	);
}

export default App;
