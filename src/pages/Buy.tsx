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

export default function Buy() {
	const vehiclesArray = [
		{
			id: 1,
			category_id: 1,
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
			category_id: 2,
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
			category_id: 3,
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
			category_id: 2,
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

	const categoriesList = [
		{ id: 1, name: "SUV" },
		{ id: 2, name: "Sportive" },
		{ id: 3, name: "Electrique" },
		{ id: 4, name: "Citadine" },
	];

	const brandsList = [
		{ brand: "Audi" },
		{ brand: "Tesla" },
		{ brand: "Mercedes" },
		{ brand: "Hyundai" },
		{ brand: "Lamborghini" },
		{ brand: "Nissan" },
	];

	const [categories] = useState<Category[]>(categoriesList);
	const [brands] = useState<{ brand: string }[]>(brandsList);
	const [years] = useState<{ year: number }[]>([]);
	const [vehicles, setVehicles] = useState<VehiclesProps[]>(vehiclesArray);
	const filterCategoryRef = useRef<HTMLSelectElement>(null);
	const filterBrandRef = useRef<HTMLSelectElement>(null);
	const filterYearRef = useRef<HTMLSelectElement>(null);
	const filterTransmissionRef = useRef<HTMLSelectElement>(null);

	const handleFilter = () => {
		const category = filterCategoryRef.current?.value;
		const brand = filterBrandRef.current?.value;
		const year = filterYearRef.current?.value;
		const transmission = filterTransmissionRef.current?.value;

		const filteredVehicles = vehiclesArray.filter((vehicle) => {
			if (
				category &&
				category !== "default" &&
				vehicle.category_id !== Number.parseInt(category)
			) {
				return false;
			}
			if (brand !== "default" && vehicle.brand !== brand) {
				return false;
			}
			if (
				year &&
				year !== "default" &&
				vehicle.year !== Number.parseInt(year)
			) {
				return false;
			}
			if (transmission !== "default" && vehicle.transmission !== transmission) {
				return false;
			}
			return true;
		});

		setVehicles(filteredVehicles);
	};

	return (
		<>
			<Navbar />
			<section className="buy-section-container">
				<article className="filters-buy">
					<h2>Filtres</h2>
					<div className="filters" id="filters">
						<div className="filter-category">
							<select
								name="category-select"
								ref={filterCategoryRef}
								onChange={handleFilter}
							>
								<option value="default">Catégorie</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<select
								name="brand"
								id="brand-select-input"
								ref={filterBrandRef}
								onChange={handleFilter}
							>
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
							<select
								name="year"
								id="year"
								ref={filterYearRef}
								onChange={handleFilter}
							>
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
								onChange={handleFilter}
							>
								<option value="default">Transmission</option>
								<option value="manuelle">Manuelle</option>
								<option value="automatique">Automatique</option>
								<option value="semi-automatique">Semi-automatique</option>
							</select>
						</div>
					</div>
				</article>

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
