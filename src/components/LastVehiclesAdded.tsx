import { useState } from "react";
import "../styles/LastVehiclesAdded.css";
import VehiclesCard from "./OneVehicleCard";

interface VehiclesProps {
	id: number;
	category_id: number;
	image: string;
	brand: string;
	model: string;
	year: number;
	mileage: number;
	consumption: number;
	transmission: string;
	price: number;
	user_id: number;
}

export default function LastVehiclesAdded() {
	const [latestVehiclesList] = useState<VehiclesProps[]>([]);

	return (
		<section className="latest-vehicles-added-container">
			<h2>Derniers véhicules ajoutés</h2>
			<article className="list-last-vehicles-container">
				{latestVehiclesList.slice(0, 3).map((vehicle) => (
					<VehiclesCard key={vehicle.id} vehicle={vehicle} />
				))}
			</article>
		</section>
	);
}
