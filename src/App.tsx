import React from 'react';

import { Styles } from './global-style';

import Contacts from './containers/Contacts';

const App: React.FC = () => {
  return (
    <> 
      <Contacts />
      <Styles />
    </>
  )
};

export default App;