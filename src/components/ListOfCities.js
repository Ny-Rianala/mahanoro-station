import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const Buttons = styled.button`
    background-color: #0F0E17;
    padding-top: 28px;
    padding-left: 98px;
    padding-bottom: 29px;
    padding-right: 44px;
    border: none;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 20px;
    margin-left: 10px;
    text-align: center;
    cursor: pointer;
;`

const Heading = styled.h1`
    margin-left:20px;
`;



export default function ListOfCities() {
    const citiesList = useSelector((state) => state.cities);
    console.log(citiesList);
    


function showCitiesList() {
    const n = 6;
    const destination = citiesList.some(ele => ele === "Antananarivo" || ele === "Toamasina");
    console.log(destination);
    const citiesLists = citiesList.sort(() => 0.5).slice(2, n).map((city) =>  
            <Link key = {city.id} to={`/city/${city.id}`}>
                <Buttons>{city.destination}</Buttons>
            </Link>);
    return citiesLists;

}
return (
    <div>
        <Heading>Where are you going</Heading>
        <div>
           {showCitiesList()}
        </div>
    </div>
)

}