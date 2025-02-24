import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/VehicleInfos.css";
import ArrowLeftSVG from "/icons/arrow-left.svg";

export default function VehicleInfos() {
	const { vehicle_id } = useParams();
	console.log(vehicle_id);

	const vehiclesArray = [
		{
			id: 1,
			image: "/images/audi-q7.png",
			brand: "Audi",
			model: "Q7",
			year: 2015,
			mileage: 150000,
			consumption: 8,
			transmission: "automatique",
			price: 48000,
			user_id: 1,
		},
		{
			id: 2,
			image: "/images/audi-r8.png",
			brand: "Audi",
			model: "R8",
			year: 2021,
			mileage: 5000,
			consumption: 12,
			transmission: "automatique",
			price: 97000,
			user_id: 2,
		},
		{
			id: 3,
			image: "/images/tesla-model-s.jpg",
			brand: "Tesla",
			model: "Model S",
			year: 2020,
			mileage: 20000,
			consumption: 0,
			transmission: "automatique",
			price: 56000,
			user_id: 2,
		},
		{
			id: 4,
			image: "/images/mercedes-a45.jpg",
			brand: "Mercedes",
			model: "A45",
			year: 2021,
			mileage: 5000,
			consumption: 10,
			transmission: "automatique",
			price: 42000,
			user_id: 1,
		},
		{
			id: 5,
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
	];

	const sellerArray = [
		{
			id: 1,
			first_name: "Jean",
			last_name: "Dupont",
			phone_number: "06 12 34 56 78",
		},
		{
			id: 2,
			first_name: "Marie",
			last_name: "Durand",
			phone_number: "06 98 76 54 32",
		},
		{
			id: 3,
			first_name: "Pierre",
			last_name: "Martin",
			phone_number: "06 14 28 19 53",
		},
		{
			id: 4,
			first_name: "Sophie",
			last_name: "Lefevre",
			phone_number: "06 98 76 54 32",
		},
		{
			id: 5,
			first_name: "Paul",
			last_name: "Leroy",
			phone_number: "06 12 34 56 78",
		},
	];

	const navigate = useNavigate();

	const vehicle = vehiclesArray.find(
		(vehicle) => vehicle.id === Number(vehicle_id),
	);

	const seller = sellerArray.find((seller) => seller.id === vehicle?.user_id);

	return (
		<>
			<Navbar />
			<button
				className="prev-button-infos-card"
				type="button"
				onClick={() => {
					navigate(-1);
				}}
			>
				<img className="prev-img-infos-card" src={ArrowLeftSVG} alt="" />
				<p className="prev-text-infos-card"> Retour</p>
			</button>
			<section className="vehicle-info-card-container">
				{vehicle && (
					<>
						<img
							className="infos-vehicle-photos"
							src={vehicle.image}
							alt="polo"
						/>
						<article>
							<h3 className="infos-vehicle-title">
								{vehicle.year} {vehicle.brand} {vehicle.model}
							</h3>
							<p className="infos-vehicle-price">Price: {vehicle.price} €</p>
							<div className="engine-infos">
								<p>Kilométrage: {vehicle.mileage} km</p>
								<p>Consommation: {vehicle.consumption} L/100km</p>
								<p>Transmission: {vehicle.transmission}</p>
							</div>
						</article>
					</>
				)}
				{seller && (
					<article className="infos-vehicle-seller-card">
						<h3 className="seller-card-title">Vendeur:</h3>
						<p>
							{seller.first_name} {seller.last_name}
						</p>
						<p>Contact: {seller.phone_number}</p>
						<button className="seller-contact-buy" type="button">
							Contacter
						</button>
					</article>
				)}
			</section>
		</>
	);
}
