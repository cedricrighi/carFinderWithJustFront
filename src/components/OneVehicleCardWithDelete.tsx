import { Link } from "react-router-dom";
import "../styles/OneVehicleCardWithDelete.css";
import TrashIconSVG from "/icons/trash-icon.svg";

interface VehiclesProps {
	id: number;
	image: string;
	brand: string;
	model: string;
	year: number;
	mileage: number;
	consumption: number;
	transmission: string;
	price: number;
}

interface Vehicles {
	vehicle: VehiclesProps;
	fetchVehicles: () => void;
}

export default function OneVehicleCardWithDelete({ vehicle }: Vehicles) {
	return (
		<article className="latest-vehicles-added-article" key={vehicle.id}>
			<img
				className="latest-vehicles-added-image"
				src={vehicle.image}
				alt={`${vehicle.brand}${vehicle.model}`}
			/>
			<div className="latest-vehicles-added-infos">
				<h3 className="latest-vehicles-added-title">
					{vehicle.year} {vehicle.brand} {vehicle.model}
				</h3>
				<p className="latest-vehicles-added-price">{vehicle.price} €</p>
				<div className="latest-vehicles-added-buttons">
					<Link
						className="link-to-fullcard-vehicle"
						style={{ width: "fit-content" }}
						to={`/vehicle/${vehicle.id}`}
					>
						<button className="latest-vehicles-added-button" type="button">
							Voir plus
						</button>
					</Link>
					<button className="latest-vehicles-added-button-delete" type="button">
						<img src={TrashIconSVG} alt="" />
					</button>
				</div>
			</div>
		</article>
	);
}
