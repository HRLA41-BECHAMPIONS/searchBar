import React from 'react';
import './minicart.css'
const MiniCart = () => {
  return (
    <div data-block="minicart" className="minicart-wrapper">
      <a className="icon action showcart"
        href="https://www.champion.com/checkout/cart/" data-bind="scope: 'minicart_content'">
        <span className="text">My Cart</span>
        <span className="counter qty empty">
          <span className="counter-number"></span>
          <span className="counter-label"></span>
        </span>
      </a>
      {/* <div className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front mage-dropdown-dialog" role="dialog" aria-describedby="ui-id-1">
        <div className="block block-minicart ui-dialog-content ui-widget-content" id="ui-id-1">
          <div id="minicart-content-wrapper" className="bfx-price-container" >
            <div className="block-content">>
              <strong className="subtitle empty" >
                <span>You have no shopping items in your cart.</span>
              </strong>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MiniCart;