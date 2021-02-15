export default function cities(cities=[], action) {
    // console.log(cities);
    switch(action.type) {
        case "CITIES_LIST":
            return [...state, action.payload];
        default:
            return cities;
    }
}