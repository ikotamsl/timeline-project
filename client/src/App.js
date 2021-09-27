import React from "react";
import './App.css';
import TimelineChart from "./components/ChartGenerator";
import {BrowserRouter} from "react-router-dom";
import AuthRouter from "./components/AuthRouter";

const App = () => {
    return (
        <BrowserRouter>
            <AuthRouter />
            <div className='App'>

            </div>
        </BrowserRouter>
    )
}

export default App;