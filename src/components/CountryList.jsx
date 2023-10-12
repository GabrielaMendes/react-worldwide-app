import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CountryList.module.css";

function CountryList() {
	const { cities, isLoading } = useCities();

	if (isLoading) return <Spinner />;

	if (!cities.length)
		return (
			<Message message="Add your first city by clicking on a city on the map" />
		);

	// const countries = cities.reduce((acc, city) => {
	// 	if (!acc.map((el) => el.country).includes(city.country)) {
	// 		return [...acc, { country: city.country, emoji: city.emoji }];
	// 	}

	// 	return acc;
	// }, []);

	const countriesUnique = new Set(
		cities.map((city) =>
			JSON.stringify({ country: city.country, emoji: city.emoji })
		)
	);
	const countries = [...countriesUnique].map((each) => JSON.parse(each));

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem country={country} key={country.emoji} />
			))}
		</ul>
	);
}

export default CountryList;
