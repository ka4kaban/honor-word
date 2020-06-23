import React from 'react';
import './App.css';
import { AppRouter } from './Router/Router';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

function App() {
  const store = configureStore();

  return (
    <div className="App">
      <Provider key="1" store={store}>
        <AppRouter />
      </Provider>

    </div>
  );
}

export default App;
