import React from 'react';
import Logo from './components/Logo/Logo.jsx';
import NavigationMenu from './components/navigationMenu/NavigationMenu.jsx';
import RightSide from './components/rightSide/RightSide.jsx';

function App() {

  const appHeaderStyle = {
    background: '#131635',
    border: '0',
    height: '60px',
    margin: '0 0 15px ',
    padding: "0",
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '100'
  }

  const headerContentStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    fontSize: '1.4rem',
    fontStyle: 'normal',
    fontWeight: '400',
    height: '60px',
    lineHeight: '1.42857143',
    margin: '0',
    maxWidth: '100%',
    padding: '0',
    padding: '0 0 0 20px',
    paddingTop: '0',
    position: 'relative',
    width: 'auto',
  };
  return (
    <div className="App">
      <header className="App-header" style={{...appHeaderStyle}}>
        <div className="header-content" style={{ ...headerContentStyle}}>
          <Logo />
          <NavigationMenu />
          <RightSide />
        </div>
      </header>
    </div>
  );

}

export default App;
