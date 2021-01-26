import React, { useEffect } from 'react';
import NavItem from './NavItem.jsx';

const NavigationMenu = () => {

  const navStyling = {
    maxHeight: '965px',
    background: '0 0',
    height: 'auto',
    position: 'static',
    width: 'auto',
    zIndex: '5',
    boxSizing: 'border-box',
    maxWidth: '1160px',
    marginRight: 'auto',
  };

  const uiStyling = {
    display: 'flex',
    fontWeight: '700',
    width: '500px',
  };

  const categories = ['New', 'Men', 'Women', 'Kids', 'Sale', 'Shops'];

  return (
    <nav className="navigation main-menu" style={{...navStyling}}>
      <div className="ui-menu" style={{...uiStyling}}>
        {categories.map((item, i)=> {
          return (<NavItem category={item} key={i}/>)
        })}
      </div>
    </nav>
  );
};



export default NavigationMenu;