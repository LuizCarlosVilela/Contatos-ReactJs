import React from 'react';

import { createGlobalStyle } from 'styled-components';

const App: React.FC = () => {
  return (
    <> 
      <div className="App">
        <h1>Deus é mais</h1>
      </div>
      <Styles />
    
    </>
  )
};

const Styles = createGlobalStyle`
  html {
    font-size: 16px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

`;

export default App;