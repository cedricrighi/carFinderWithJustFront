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
	const vehiclesArray = [
		{
			id: 5,
			category_id: 4,
			image: "/images/hyundai-i10.jpg",
			brand: "Hyundai",
			model: "i10",
			year: 2021,
			mileage: 5000,
			consumption: 5,
			transmission: "manuelle",
			price: 5000,
			user_id: 1,
		},
		{
			id: 6,
			category_id: 2,
			image: "/images/lambo-sto.jpg",
			brand: "Lamborghini",
			model: "Huracan STO",
			year: 2021,
			mileage: 5000,
			consumption: 20,
			transmission: "automatique",
			price: 300000,
			user_id: 4,
		},
		{
			id: 7,
			category_id: 2,
			image: "/images/nissan-gtr35.jpg",
			brand: "Nissan",
			model: "GTR35",
			year: 2015,
			mileage: 150000,
			consumption: 15,
			transmission: "automatique",
			price: 60000,
			user_id: 3,
		},
	];

	const [latestVehiclesList] = useState<VehiclesProps[]>(vehiclesArray);

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
