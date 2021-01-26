import React from 'react';

const Logo = () => {
  const logoClassStyle = {
    maxWidth: '50%',
    position: 'relative',
    zIndex: '5',
    display: 'block',
    marginTop: '10px',
    // display: 'none',
    float: 'left',
    // margin: '0 0 0 40px',
    marginRight: '40px',
  }

  const imageStyle = {
    width: '200px',
    aspectRatio: 'auto 200 / 45',
    // display: 'block',
  }

  return (
    <a className="logo" style={{...logoClassStyle}}>
      <img title="Champion" src='https://www-cdn.champion.com/logo/stores/1/logo-white.png' style={{...imageStyle}}></img>
    </a>
  );
};

export default Logo;