import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterRedux} from "./components/Counter/CounterRedux";
import {Provider} from "react-redux";
import {setupStore} from "./store";

const store = setupStore()

export const App = () => {
  return (
    <div className="App">
        <div className='container'>
            <div className='counter-container'>
                <h1 className='counter__title'>Hooks</h1>
                <Counter />
            </div>

            <Provider store={store}>
                <div className='counter-container'>
                    <h1 className='counter__title'>Redux</h1>
                    <CounterRedux />
                </div>
            </Provider>

        </div>
    </div>
  );
}
