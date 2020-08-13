import React from 'react';
import{Link} from 'react-router-dom';
import './Header.css';

const Header=()=>{
    return(
        <div className="header">
            <Link className="option1" to="/" >HOME</Link>
            <div className="options">
                <Link  className="option" to="/favourites">FAVOURITES</Link>
            </div>

        </div>
    )
}

export default Header;