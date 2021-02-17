import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"; 
import {Provider} from "react-redux";
import App from "./App";
import store from "./store";
import {GlobalStyles} from "./global-styles";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);


