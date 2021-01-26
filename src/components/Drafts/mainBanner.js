import React from 'react';

const MainBanner = () => {
  return (
    <header className="page-header">
      <div className="header content">
        <a className="logo">
          <img title="Champion"></img>
        </a>
        <nav className="navigation main-menu">
          <div className="ui-menu">
            <div className="my-account-link bfx-remove-element"></div>
            <div className="category-item level0 new first level-top two_column_nav parent"></div>
            <div className="category-item level0 men level-top tw_column_navparent"></div>
            <div className="category-item level0 women level-top two_column_navparent"></div>
            <div className="category-item level0 kids level-top two_column_navparent"></div>
            <div className="category-item level0 sale level-top two_column_navparent"></div>
            <div className="category-item level0 shops level-top two_column_navparent"></div>
          </div>
        </nav>
        <div className="right-side">
          <div className="shipping-to-link">
            <span>Shipping To:</span>
            <span id="bfx-cc-insert-after"></span>
          </div>
          <div data-block="minicart" className="minicart-wrapper">
            <a className="icon action showcart">
              <span className="text">My Cart</span>
              <span className="counter qty empty"></span>
            </a>
          </div>
          <li className="link wishlist bfx-remove-element"></li>
          <div className="block block-search"></div>
          <ul className="header links"></ul>
        </div>
      </div>
    </header>
  );
}

export default MainBanner;

