import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Example from './Example';
import Other from './Other';


import Navigation from './todo/navigation';

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Provider store={store}>
			<Example />
			<Other />
		</Provider>
    </div>
  );
}

export default App;
