import React, { useEffect } from 'react';

const NavItem = ({ category }) => {

  let grabFromClass = () => document.querySelector('.Shops');

  useEffect(() => {
    grabFromClass().children[0].children[0].style.fontWeight = 800;
    grabFromClass().children[0].children[0].style.color = '#ddd';
  });

  const categoryStr = `category-item level0 ${category} level-top tw_column_navparent`;

  const categoryStrStyle = {
    border: '0',
    display: 'block',
    flex: '1',
    margin: '0',
    position: 'initial',
    // textDecorationLine: 'none',
  };

  const itemStyle = {
    color: '#c2c2c2',
    cursor: 'pointer',
    fontFamily: 'Knockout HTF30-JuniorWelterwt',
    fontSize: '15px',
    lineHeight: '60px',
    padding: '0',
    textAlign: 'center',
    width: '100%',
    textDecoration: 'none',
  };

  const spanStyle = {
    fontWeight: '400',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  };

  return (
    <div className={categoryStr} style={{ ...categoryStrStyle }}>
      <a style={{ ...itemStyle }} href='#'>
        <span style={{ ...spanStyle }}>{category}</span>
      </a>
    </div>
  );
};

export default NavItem;