export default function cities(cities=[], action) {
    switch(action.type) {
        case "CITIES_LIST":
            return [...state, action.payload];
        default:
            return cities;
    }
}