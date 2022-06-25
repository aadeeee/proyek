import React, {Component} from "react";
import './Category.css';
import Navbar from "../navbar/Navbar";
class Gaming extends Component{
    render(){
        return(
            <div className="card">
                <div className="container">
                    <Navbar />
                    <div className="Title">
                        <h1>Category</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Gaming;