import React, { useState, useEffect } from "react";
function Coordinates({ latitude, longitude }) {
	const [smallScreen, setSmallScreen] = useState(false);

	useEffect(() => {
		if (window.screen.width < 480) setSmallScreen(true);
		else setSmallScreen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.screen.width]);

	return (
		<div>
			<table className="my-8 text-3xl sm:text-4xl">
				<tbody>
					<tr>
						<td className="text-left">Latitude:</td>
						<td className="text-right">
							{smallScreen ? latitude.slice(0, 7) : latitude}
						</td>
					</tr>
					<tr>
						<td className="text-left">Longitude:</td>
						<td className="text-right pl-10">
							{smallScreen ? longitude.slice(0, 7) : longitude}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Coordinates;
