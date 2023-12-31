import React, { useEffect, useState } from "react";
import SpinnerComponent from "../components/ui/Spinner.component";
import axios from "axios";
import { baseUrl } from "../constants/api";
import CoinsComponent from "../components/coins/Coins.component";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        axios(baseUrl)
            .then(response => {
                setLoading(false);
                // console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                setError("Error occured!");
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>CryptoRadar</h1>
                    <h4>A place to manage all of your trade informations and actions</h4>
                    <h4>Do not forget to always using asset and risk managemant!</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                 {loading ? <SpinnerComponent /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data} />}
                </div>
            </div>
        </div>
    );
};

export default HomePage;