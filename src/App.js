import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import ListOfCities from "./containers/ListOfCities";
import City from "./components/City";
import Booking from "./components/Booking";
import styled from 'styled-components';

const Header = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	background-color: #0F0E17;
    margin: 0;
    padding: 36px 68px;
    a {
        color: white;
    }
`;



export default function App() {
    return (
        <>
           <Header>
                <Link to="/">
                    <h1>Mahanoro Station</h1>
                </Link>
                <Link to="/myAccount">
                    <h3>My account</h3>
                </Link>
           </Header>
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
