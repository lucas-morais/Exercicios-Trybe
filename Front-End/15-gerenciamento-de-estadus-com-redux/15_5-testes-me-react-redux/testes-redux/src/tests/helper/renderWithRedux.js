import React from 'react';
import { Provider } from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../../App';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';


const renderWithRedux = (
  component, 
  { initialState, store = createStore(rootReducer, initialState) } = {}
) =>  {
  return {
    ...render(<Provider store={ store }>{ component }</Provider>),
  }
}

export default renderWithRedux;
