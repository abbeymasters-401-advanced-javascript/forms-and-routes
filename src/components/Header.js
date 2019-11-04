import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
    <h1>Last Airbender Characters</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
    </>
  );
}
