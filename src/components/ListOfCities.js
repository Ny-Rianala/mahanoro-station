import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function ListOfCities() {
    const citiesList = useSelector((state) => state.cities);
    console.log(citiesList);

function showCitiesList() {
    const citiesLists = citiesList.map((city) => 
            <Link key = {city.id} to={`/city/${city.id}`}>
                <button>{city.destination}</button>
            </Link>);
    return citiesLists;
}
return (
    <div>
        <h1>Where are you going</h1>
        {showCitiesList()}
    </div>
)

}