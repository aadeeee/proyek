import React, {Component} from "react";
import './HardWare.css';
import Navbar from "../navbar/Navbar";

class Hardware extends Component{
    render(){
        return(
            <div className="card">
                <div className="container">
                    <Navbar />
                    <div className="Title">
                        <h1> Hard ware</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Hardware;