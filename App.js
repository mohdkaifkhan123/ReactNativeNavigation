import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import TabNav from './Tab_Navigation/TabNav';

const App = () => {
  return (
    <Provider store={store}>
      <TabNav />
    </Provider>
  );
};
export default App;
