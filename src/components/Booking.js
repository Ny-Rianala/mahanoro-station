import React from "react";
import { useParams } from "react-router";
import { connect } from 'react-redux';
import { format } from "date-fns";


function Booking({cities}) {
    const {id} = useParams();

    const bookseat = cities.find((city) => city.id == id);

    return (
        <>
            <div>
                <h1>Book a seat to:</h1>
                <h2>{bookseat?.h2}</h2>
            </div>
            <div>
                <div>
                    <h3>Pick a seat</h3>
                </div>
                <div>
                    <h4>Trip informations</h4>
                    <div key={bookseat.id}>
                        <div>
							<span>{format(new Date(bookseat.departureTime), 'eeee')}</span>
							<span>{format(new Date(bookseat.departureTime), 'hh')}</span>:
							<span>{format(new Date(bookseat.departureTime), 'mm')}</span>,
                            <span>{format(new Date(bookseat.departureTime), 'dd')}</span>/
							<span>{format(new Date(bookseat.departureTime), 'MM')}</span>/
							<span>{format(new Date(bookseat.departureTime), 'yyyy')}</span>
						</div>
                        <p>Driver's name: {bookseat.driverName}</p>
                        <p>Driver's contact: {bookseat.driverContact}</p>
                        <p>Estimated duration: {bookseat.estimatedDuration}</p>
                        <p>Breaks: {bookseat.breaks}</p>
                    </div>
                    <p>{bookseat.price}Ar/seat</p>
                </div>
            </div>
        </>
    )
}

export default connect((state) => ({cities: state.cities}), {})(Booking);