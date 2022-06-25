import React,{Component} from "react";
import { Outlet,Link } from "react-router-dom";
import'./Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <header className="menu">
                <nav className="menu-navigation">
                    <div className="logo-app"><p>Gaming<img src="https://cdn-icons.flaticon.com/png/512/3097/premium/3097980.png?token=exp=1655826609~hmac=c5165231c7bf77d8fe3b0151fd77446c" />Shop</p>
                    </div>
                    <div className="spacer" />
                    <div className="input-group ">
                        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Search Products..."/>
                    </div>
                    <div className="spacer" />
            
                    <div className="navigation-item">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gaming">Gaming</Link> </li>
                            <li><Link to="/hard-ware">HardWare</Link></li>
                            <li><Link to="/category">category</Link></li>
                            <li><button type="button" class="btn btn-outline-success">Account</button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }  
}
export default Navbar;