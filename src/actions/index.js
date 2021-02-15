import cities from "../citiesData.json";
console.log(cities);

export function citiesList() {
    return {
        type: "CITIES_LIST",
        payload: cities
    };
}

