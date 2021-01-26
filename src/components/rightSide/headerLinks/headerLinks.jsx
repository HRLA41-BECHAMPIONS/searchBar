import React from 'react';
import './headerLinks.css';

const HeaderLinks = () => {
  return (
    <ul className="header links">
      <div className="page-overlay"></div>
      <div className="minicart-overlay"></div>
      <li className="authorization-link bfx-remove-element">
        <a href="https://www.champion.com/customer/account/login/referer/aHR0cHM6Ly93d3cuY2hhbXBpb24uY29tL3JldmVyc2Utd2VhdmUtaG9vZGllLmh0bWw%2C/">Sign In</a>
      </li>
    </ul>
  );
}

export default HeaderLinks;