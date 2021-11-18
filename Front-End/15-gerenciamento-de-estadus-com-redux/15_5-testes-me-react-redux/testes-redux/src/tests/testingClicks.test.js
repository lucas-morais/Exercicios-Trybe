import { screen, cleanup } from '@testing-library/react';
import renderWithRedux from './helper/renderWithRedux';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('should have a button and a text(0)', () => {
    renderWithRedux(<App />);
    const buttonAdd = screen.queryByText('Clique Aqui');

    expect(buttonAdd).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });
  it('should have a different initial value', () => {
    renderWithRedux(<App />, { initialState: {clickReducer: {counter: 5} }});

    expect(screen.queryByText('5')).toBeInTheDocument();
  })
});