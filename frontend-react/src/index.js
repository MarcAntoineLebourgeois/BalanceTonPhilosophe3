
import React from "react";
//import ReactDOM from "react-dom";
import { render } from 'react-snapshot';
import App from "./App";


//const rootElement = document.getElementById("root");

/*
ReactDOM.render(
        <MainApp />
    , rootElement
);
*/

render(
    <App/>,
    document.getElementById('root')
  );