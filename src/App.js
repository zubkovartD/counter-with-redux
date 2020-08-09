import React from 'react';
import './App.css';
import { createStore } from 'redux'
import Counter from './Counter'

function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

export const store = createStore(counter);

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
