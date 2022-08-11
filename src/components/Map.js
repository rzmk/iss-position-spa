import React from "react";
import { FaSatellite } from "react-icons/fa";
import {
	ComposableMap,
	Geographies,
	Geography,
	Graticule,
	Marker,
	Sphere,
} from "react-simple-maps";

const Map = ({ latitude, longitude }) => {
	// Icon alignment offset fix
	const newLong = String(Number(longitude) - 2.7);
	const newLat = String(Number(latitude) + 5);

	return (
		<ComposableMap projection="geoEqualEarth" width={2400}>
			<Graticule stroke="rgba(255, 255, 255, 0.5)" />
			<Sphere stroke="#FF5533" strokeWidth={2} />
			<Geographies geography="./map.json">
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							fill="#DDD"
							stroke="#FFF"
						/>
					))
				}
			</Geographies>
			<Marker coordinates={[newLong, newLat]}>
				<FaSatellite color="red" />
			</Marker>
			{/* Debug for exact coordinates comparison to above
                <Marker coordinates={[longitude, latitude]}>
				<circle r={8} stroke="red" stroke-width={2} fill="white" />
			</Marker> */}
		</ComposableMap>
	);
};

export default Map;
