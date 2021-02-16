import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import ListOfCities from "./containers/ListOfCities";
import City from "./components/City";
import Booking from "./components/Booking";


export default function App() {
    return (
        <>
            <Link to="/">
                <h1>Mahanoro Station</h1>
            </Link>
            <Link to="/myAccount">
                <h3>My account</h3>
            </Link>
            <Switch>
                <Route exact path="/">
                    <ListOfCities />
                </Route>
                <Route exact path="/city/:cityId">
					<City />
				</Route>
                <Route exact path="/booking/:id">
                    <Booking />
                </Route>
            </Switch>
        </>
    )
}
