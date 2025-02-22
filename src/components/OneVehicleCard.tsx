import { Link } from "react-router-dom";
import { useState } from "react";
import VehicleInfos from "../pages/VehicleInfos";

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

interface Vehicles {
	vehicle: VehiclesProps;
}

export default function OneVehicleCard({ vehicle }: Vehicles) {
	const [showVehicleCard, setShowVehicleCard] = useState(false);
	const [actualVehicle, setActualVehicle] = useState<VehiclesProps>();

	return !showVehicleCard ? (
		<article className="latest-vehicles-added-article" key={vehicle.id}>
			<img
				className="latest-vehicles-added-image"
				src={vehicle.image}
				alt={`${vehicle.brand}${vehicle.model}`}
			/>
			<div className="latest-vehicles-added-infos">
				<div>
					<h3 className="latest-vehicles-added-title">
						{vehicle.year} {vehicle.brand} {vehicle.model}
					</h3>
					<p className="latest-vehicles-added-price">{vehicle.price} €</p>
				</div>
				<Link
					className="link-to-fullcard-vehicle"
					to={`/vehicle/${vehicle.id}`}
					onClick={() => {
						setShowVehicleCard(true);
						setActualVehicle(vehicle);
						console.log("vehicle", vehicle);
					}}
				>
					<button className="latest-vehicles-added-button" type="button">
						Voir plus
					</button>
				</Link>
			</div>
		</article>
	) : (
		actualVehicle && <VehicleInfos />
	);
}
