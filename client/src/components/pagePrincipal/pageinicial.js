import React from 'react';


import NavHome from '../pagePrincipal/navHome/navHome'
import ComponentClass from '../pagePrincipal/componentClass'
import imageInit from '../../../src/pictures/picturepageppal.png'


export function PageInit() {
    return (
        <div>
            <section>
                <NavHome />
            </section>
            <div>
                <section>
                    <ComponentClass msg='The Dogs API' />
                    <img className='ImageInit' src={imageInit} alt='Imagen de perro' />
                </section>
            </div>

        </div>
    )
};

export default PageInit;