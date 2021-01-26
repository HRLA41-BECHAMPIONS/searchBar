import React from 'react';
import './shippingToLink.css';

const ShippingToLink = () => {

  const bfxCcWrapperCollapsed = {
    position: 'relative',
    display: 'inline',
  };

  const bfxCcCollapsed = {
    height: '25px'
  };

  return (
  <div className="shipping-to-link">
    <span>Shipping To:</span>
    <span id="bfx-cc-insert-after"></span>

    <div id="bfx-cc-wrapper-collapsed" className="bfx-cc-wrapper bfx-cc-position-right bfx-cc-position-top">
      <div className="bfx-cc-collapsed">
        <div className="bfx-cc-menu">
          <span className="bfx-cc-flag">
            <a id="bfx-cc-flag-link" href="#" aria-label="Currently shipping to United States. Click here to change shipping location. Show more content.">
              <img src="https://bfx-objects.prd.borderfree.com/v1/dist/images/context-chooser/flags/US.gif" alt="United States" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ShippingToLink;