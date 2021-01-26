import React from 'react';

import SearchBar from './blockSearch/SearchBar.js';
import ShippingToLink from './shippingToLink/shippingToLink.js';
import MiniCart from './minicart/minicart.js';
import HeaderLinks from './headerLinks/headerLinks.js';
import WishList from './wishList/wishList.js';

import './RightSide.css';

const RightSide = () => {

  const rightSideStyling = {
    display: 'flex',
    flexFlow: 'row wrap',
    float: 'right',
    height: '60px',
    fontFamily: "Knockout HTF30, Arial, sans-serif",
    color: '#c2c2c2',
    fontSize: '16px',
    listStyle: 'none',
  };

  const shippingToLinkStyling = {
    order: '1',
    zIndex: '1',
  }

  const shippingToSpanStyling = {
    // display: 'none',
    position: 'relative',
    right: '45px',
    top: '19px',
  }

  const miniCartWrapper = {
    order: '4',
    zIndex: '4',
    height: '60px',
    marginTop: '0',
    borderLeft: '1px solid #41445e',
    width: '60px',
  }

  const wishList = {
    order: '3',
    listStyle: 'none',
    marginRight: '0',
  };

  const headerLinks = {
    order: '2',
  };

  return (
    // <div className="right-side" style={{...rightSideStyling}}>
    //   <MiniCart />
    //   <ShippingToLink />
    //   {/* <div data-block="minicart" className="minicart-wrapper" style={{...miniCartwrapper}}>
    //     <a className="icon action showcart">
    //       <span className="text">My Cart</span>
    //       <span className="counter qty empty"></span>
    //     </a>
    //   </div> */}
    //   {/* <li className="link wishlist bfx-remove-element"></li> */}

    //   {/* <SearchBar />
    //   <ul className="header links"></ul> */}
    //  <HeaderLinks />
    // </div>

    <div className="right-side">
      <ShippingToLink />
      <HeaderLinks />
      <WishList />
      <MiniCart />
      <SearchBar />
    </div>

  );
};

export default RightSide;