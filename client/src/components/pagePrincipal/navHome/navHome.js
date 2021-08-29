import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <Link to = '/home'>
        <button type="button">Ingresar</button>
      </Link>
           
    </div>
  )
};

export default Nav;