import React from 'react';
import { useParams, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { format } from "date-fns";


import styled from "styled-components";

const CityTripStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;

	@media(min-width: 1000px) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;


const Headings = styled.div`
	display: flex;
	flex-direction: row;
	padding-left: 20px;
	padding-top: 30px;
`;


const Destination = styled.h2`
    color: #E53170;
	font-size: 32px;
	margin-bottom: 1px; 
	margin-left: 10px;
`;

const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;


const Day = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 18px;
	color: #FF8906;
	padding-left: 20px;
`;

const DateStyle = styled.div`
	padding-right: 400px;
`;


const ButtonStyle = styled.div`
	background-color: #E53170;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
	width: 194px;
    border: none;
	text-align: center;
	margin-left: 20px;
	font-size: 18px;
	font-weight: bold;
	a {
		color: white;
	}
`;

function City({cities}) {
	const { cityId } = useParams();
	console.log(cities);

	const city = cities.find((city) => city.id == cityId);
	console.log(city);


	return (
		<CityTripStyle>
			<Headings>
				<h1> Next trips to:</h1>
				<Destination>{city?.destination}</Destination>
			</Headings>
					<TimeContainer>
						<Day>
							<div>
								<span>{format(new Date(city.departureTime), 'eeee')}</span>
							</div>
							<div>
								<span>{format(new Date(city.departureTime), 'hh')}</span>:
								<span>{format(new Date(city.departureTime), 'mm')}</span>
							</div>
						</Day>
						<DateStyle>
							<span>{format(new Date(city.departureTime), 'dd')}</span>/
							<span>{format(new Date(city.departureTime), 'MM')}</span>/
							<span>{format(new Date(city.departureTime), 'yyyy')}</span>
						</DateStyle>
				</TimeContainer>
				<ButtonStyle>
					<Link to={`/booking/${city.id}`}>Book a seat</Link>
				</ButtonStyle>
			</CityTripStyle>
			)
}



export default connect((state) => ({ cities: state.cities }), {})(City);
