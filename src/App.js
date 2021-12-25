import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import Map from "./components/Map";
import Coordinates from "./components/Coordinates";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
	const [longitude, setLongitude] = useState("");
	const [latitude, setLatitude] = useState("");
	const [progress, setProgress] = useState(0);

	async function fetchISSData() {
		// const resp = await fetch("#"); // debugging
		const resp = await fetch(
			"https://api.wheretheiss.at/v1/satellites/25544"
		);
		const data = await resp.json();
		setLongitude(String(data.longitude));
		setLatitude(String(data.latitude));
		setProgress(0);
	}

	useEffect(() => {
		fetchISSData();
		setInterval(fetchISSData, 2000);
		setInterval(() => {
			setProgress((prev) => prev + 5);
		}, 100);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-4xl sm:text-6xl">
					International Space Station Position
				</h1>
				<Map latitude={latitude} longitude={longitude} />
				<Coordinates latitude={latitude} longitude={longitude} />
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
