import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Buy.css";
import OneVehicleCard from "../components/OneVehicleCard";

interface Category {
	id: number;
	name: string;
}

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
	user_id: number;
}

export default function Buy() {
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

	const [categories] = useState<Category[]>([]);
	const [brands] = useState<{ brand: string }[]>([]);
	const [years] = useState<{ year: number }[]>([]);
	const [vehicles] = useState<VehiclesProps[]>(vehiclesArray);
	const filterCategoryRef = useRef<HTMLSelectElement>(null);
	const filterBrandRef = useRef<HTMLSelectElement>(null);
	const filterYearRef = useRef<HTMLSelectElement>(null);
	const filterTransmissionRef = useRef<HTMLSelectElement>(null);

	return (
		<>
			<Navbar />
			<section className="buy-section-container">
				<article className="filters-buy">
					<h2>Filtres</h2>
					<div className="filters" id="filters">
						<div className="filter-category">
							<select name="category-select" ref={filterCategoryRef}>
								<option value="default">Catégorie</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<select name="brand" id="brand-select-input" ref={filterBrandRef}>
								<option value="default">Marque</option>
								{brands
									.sort((a, b) => a.brand.localeCompare(b.brand))
									.map((brand) => (
										<option key={brand.brand} value={brand.brand}>
											{brand.brand}
										</option>
									))}
							</select>
						</div>
						<div>
							<select name="year" id="year" ref={filterYearRef}>
								<option value="default">Année</option>
								{years
									.sort((a, b) => a.year - b.year)
									.map((year) => (
										<option key={year.year} value={year.year}>
											{year.year}
										</option>
									))}
							</select>
						</div>
						<div>
							<select
								name="transmission"
								id="transmission"
								ref={filterTransmissionRef}
							>
								<option value="default">Transmission</option>
								<option value="manuelle">Manuelle</option>
								<option value="automatique">Automatique</option>
								<option value="semi-automatique">Semi-automatique</option>
							</select>
						</div>
					</div>
				</article>

				<p style={{ color: "grey" }}>
					( Filtres disfonctionnels car reliés directement à la récupération
					dans la base de données )
				</p>

				<section className="filter-vehicles-list">
					{vehicles.length > 0 ? (
						vehicles.map((vehicle) => (
							<OneVehicleCard key={vehicle.id} vehicle={vehicle} />
						))
					) : (
						<p className="empty-vehicle-filter-list">Aucun véhicule trouvé.</p>
					)}
				</section>
			</section>
		</>
	);
}
