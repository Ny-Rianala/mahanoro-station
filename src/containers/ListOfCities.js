import {connect} from "react-redux";
import { citiesList } from "../actions";
import ListOfCities from "../components/ListOfCities";

const mapPropsToState = (state) => {
    console.log(state);
    return {
        cities: state.cities
    }
}

const mapDispatchToProps = {
    citiesList: citiesList
}

export default connect(mapPropsToState, mapDispatchToProps)(ListOfCities)