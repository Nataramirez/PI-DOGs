import React from 'react';
import NavAddDog from './navAddDog'
import AddDog from './addDog'

import './pageAddDog.css'

export function PageAddDog() {
    return (
        <div>
            <nav className="grid-block">
                <NavAddDog />
            </nav>
            <br />
            <AddDog />
        </div>

    )
}
export default PageAddDog;

