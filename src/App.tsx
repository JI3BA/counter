import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterRedux} from "./components/Counter/CounterRedux";

export const App = () => {
  return (
      <div className="App">
          <div className='container'>
              <div className='counter-container'>
                  <h1 className='counter__title'>Hooks</h1>
                  <Counter />
              </div>

              <div className='counter-container'>
                  <h1 className='counter__title'>Redux</h1>
                  <CounterRedux />
              </div>
          </div>
      </div>
  );
}
