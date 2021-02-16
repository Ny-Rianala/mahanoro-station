import React from 'react';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';


function City({cities}) {
	const { cityId } = useParams();
	// const cities = useSelector((state) => state.cities);
	console.log(cities);
	
	const city = cities.find((city) => city.id == cityId);
	console.log(city);


	return (
		<>
			<div>
				<h1> Next trips to: {city?.destination}</h1>
			</div>
			<div>
				<p>{city?.estimatedDuration}</p> 
				<p>{city?.departureTime}</p> 
			</div>
			<button>Book a seat</button>
		</>
	);
}

export default connect((state) => ({ cities: state.cities }), {})(City);
