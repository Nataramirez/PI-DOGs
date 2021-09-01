import React, { useState } from 'react';


import NavHome from './navHome/navHome'
import imageInit from '../../../src/pictures/picturepageppal.png'
import './pageinicial.css';

export function PageInit() {
    
    return (
        <div className="pageInit">
           
                <NavHome />
        
            
                <h2 className="pageInit">The Dogs API</h2>
                <img className="App" weight="900" height="430" src={imageInit} alt='Imagen de perro' />
            
        </div>

    )
};

export default PageInit;