import React from 'react';
import './App.css';
import { createStore } from 'redux'
import Counter from './Counter'
import reducer from './reducer'

export const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
