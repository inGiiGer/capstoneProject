import React from "react";
import logoImg from "../assets/Logo.svg";

const Footer = () =>{
    return(
        <footer className="container">
            <div>
                <img src={logoImg} alt="logo-image"/>

                <p className="logo-content">
                    We are a family owned Mediterraneran restaurnat, focused on traditional recipes servred with a mondern twist.
                </p>
            </div>

            <div>
                
                <h3>Important Links</h3>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>

            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li><a href="#"><b>Address : </b>123 Towncity,USA</a></li>
                    <li><a href="#"><b>Phone : </b>++0123 456 789</a></li>
                    <li><a href="#"><b>Email : </b>little@lemon.com</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;