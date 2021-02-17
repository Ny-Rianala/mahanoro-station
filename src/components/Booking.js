import React from "react";
import { useParams } from "react-router";
import { connect } from 'react-redux';
import { format } from "date-fns";
import styled from "styled-components";


const Headings = styled.div`
    display: flex;
	flex-direction: row;
    margin-left: 10px;
`;

const Destination = styled.div`
    color: #E53170;
	font-size: 32px;
    padding-top: 23px;
	margin-left: 10px;
`;

const InfoStyle = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-left: 10px;
    h3, h4 {
        text-transform: uppercase;
        font-size: 18px;
    }
    label{
        color: #94989B;
        margin-right: 20px;
    }
    
 `;

const PriceStyle = styled.div`
    display: flex;
    flex-direction: row;
    
    p {
        padding-left: 20px;
        padding-top: 8px;
        font-weight: bold;
        font-size: 18px;
    }
`;

const Price = styled.h2`
    color: #FF8906;
`;



function Booking({cities}) {
    const {id} = useParams();

    const bookseat = cities.find((city) => city.id == id);

    return (
        <>
            <Headings>
                <h1>Book a seat to:</h1>
                <Destination>{bookseat?.destination}</Destination>
            </Headings>
            <InfoStyle>
                <div>
                    <h3>Pick a seat</h3>
                </div>
                <div>
                    <h4>Trip informations</h4>
                    <div key={bookseat.id}>
                        <div><label>Departure Time:</label>  
							<span>{format(new Date(bookseat.departureTime), 'hh')}</span>:
							<span>{format(new Date(bookseat.departureTime), 'mm')}</span>,
                            <span>{format(new Date(bookseat.departureTime), 'dd')}</span>/
							<span>{format(new Date(bookseat.departureTime), 'MM')}</span>/
							<span>{format(new Date(bookseat.departureTime), 'yyyy')}</span>
						</div>
                        <p><label>Driver's name:</label>{bookseat.driverName}</p>
                        <p><label>Driver's contact:</label> {bookseat.driverContact}</p>
                        <p><label>Estimated duration:</label> {bookseat.estimatedDuration}</p>
                        <p><label>Breaks: </label>{bookseat.breaks}</p>
                    </div>
                    <PriceStyle>
                        <Price>{bookseat.price}</Price>
                        <p>Ar/seat</p>
                    </PriceStyle>
                </div>
            </InfoStyle>
        </>
    )
}

export default connect((state) => ({cities: state.cities}), {})(Booking);