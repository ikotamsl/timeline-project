import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AuthRouter from "./components/AuthRouter";
import ChartComponent from "./components/Chart";

const App = () => {
    return (
        <BrowserRouter>
            <AuthRouter />
                <div className='App'>
                    <ChartComponent />
                </div>
        </BrowserRouter>
    )
}

export default App;