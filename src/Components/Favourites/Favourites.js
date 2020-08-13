import React from 'react';

import './Favourites.css';

const Favourites = (props) => { 

        return(
            <div className="container">
                <div className="movie-card">
                    <div className="movie-header" > IMAGE
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                            <h3 className="movie-title">TITLE</h3>
                        </div>
                        <div className="movie-info">
                            <div className="info-section">
                                <label>Released</label>
                                <span></span>
                            </div>
                            <div className="info-section">
                                <label>IMDB Rating</label>
                                <span></span>
                            </div>
                            <div className="info-section">
                                <label>Rated</label>
                                <span></span>
                            </div>
                            <div className="info-section">
                                <label>Runtime</label>
                                <span></span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    
    };
    
    

export default Favourites;