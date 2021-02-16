import React from 'react';
import { useParams, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { format } from "date-fns";


function City({cities}) {
	const { cityId } = useParams();
	console.log(cities);
	
	const city = cities.find((city) => city.id == cityId);
	console.log(city);


	return (
		<div>
			<div>
				<h1> Next trips to: {city?.destination}</h1>
			</div>
					<div>
						<div>
							<div>
								<span>{format(new Date(city.departureTime), 'eeee')}</span>
								<span>{format(new Date(city.departureTime), 'hh')}</span>:
								<span>{format(new Date(city.departureTime), 'mm')}</span>
							</div>
							<div>
								<span>{format(new Date(city.departureTime), 'dd')}</span>/
								<span>{format(new Date(city.departureTime), 'MM')}</span>/
								<span>{format(new Date(city.departureTime), 'yyyy')}</span>
							</div>
						</div>
						<button>
						    <Link to={`/booking/${city.id}`}>Book a seat</Link>
						</button>
				</div>
			</div>
			)
}



export default connect((state) => ({ cities: state.cities }), {})(City);
