import React from 'react';
import './blockSearch.css';

const SearchBar = () => {

  const actionString = 'https://www.champion.com/catalogsearch/result/';

  const blockSearch = {
    order: '5',
    paddingLeft: '0',
    width: '150px',
    float: 'right',
    position: 'relative',
  }

  const form = {
    webkitTapHighlightColor:'rgba(0,0,0,0)',
  };

  return (
    // <div className="block block-search" style={{...blockSearch}}>
    //   <div className="block block-title">
    //     <strong>Search</strong>
    //   </div>
    //   <div className="block block-content">
    //     <form className="form minisearch" id="search_mini_form" action={actionString} method='get'>
    //       <div className="field search"></div>
    //       <div className="actions">
    //         <button type="submit" title="Search" className="actionSearch"></button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="block block-search">
      <div className="block block-title"><strong>Search</strong></div>
      <div className="block block-content">
        <form className="form minisearch" id="search_mini_form" action="https://www.champion.com/catalogsearch/result/"
          method="get">
          <div className="field search">
            <label className="label" htmlFor="search" data-role="minisearch-label">
              <span>Search</span>
            </label>
            <div className="control">
              <input id="search" type="text" name="q" data-rfkid="rfkid_6" placeholder="Search" className="input-text" maxLength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both"
              autoComplete="off" data-tdi="0"/>
              <span className="delete-info-search"></span>
              {/* <div className="nested">
                <a className="action advanced" href="https://www.champion.com/catalogsearch/advanced/" data-action="advanced-search">Advanced Search</a>
              </div> */}
            </div>
          </div>
          <div class="actions">
            <button type="submit" title="Search" class="action search">
              {/* <span>Search</span> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;