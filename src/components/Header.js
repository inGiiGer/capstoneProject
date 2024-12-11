import React from "react";
import {Link,BrowserRouter} from 'react-router-dom';
import bannerImage from "../assets/restauranfood.jpg";


const Header = (props)  => {
    return(
        <header>
            <div className="banner-header container">

                <h1 className="primary-text">{props.title}</h1>

                <h2 className="text-white">{props.sub_title}</h2>

                <p className="text-white">{props.content}</p>  

                {/* <Link to="/booking">hello</Link>               */}

                <BrowserRouter>
                <Link to="/booking"><button>{props.button_text}</button></Link>
                </BrowserRouter>

                <img className="banner-image" src={bannerImage} alt="banner-image"/>
            </div>
        </header>
    )
}

export default Header;