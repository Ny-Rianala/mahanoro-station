import React from "react";
import { useSelector } from 'react-redux';


export default function ListOfCities() {
    const citiesList = useSelector((state) => state.cities);
    console.log(citiesList);

function showCitiesList() {
    const citiesLists = citiesList.map((city) => 
            <div key = {city.id}>
                <button>{city.destination}</button>
            </div>);
    return citiesLists;
}
return (
    <div>{showCitiesList()}</div>
)

}