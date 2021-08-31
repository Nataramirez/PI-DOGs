import React from 'react';


import NavHome from './navHome/navHome'
import imageInit from '../../../src/pictures/picturepageppal.png'
import './pageinicial.css';

export function PageInit() {
    return (
        <div className="page">
            <div>
                <NavHome />
            </div>
            <div className="PageInicial">
                <h1>The Dogs API</h1>
                <img className='ImageInit' src={imageInit} alt='Imagen de perro' />
            </div>
        </div>

    )
};

export default PageInit;