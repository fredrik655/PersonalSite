import React from 'react';
import {Provider} from 'react-redux';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';

import NavBar from '../components/NavBar';

const mockStore = configureStore([]);
describe('<NavBar />', () => {
  let store;
  beforeEach(() => {
    store = mockStore(true);
    store.dispatch = jest.fn();
  })
  
  afterEach(() => {
    cleanup();
  });
  test('should display a navbar', async () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
  });

  test('click triggers event', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(store.dispatch).toBeCalledTimes(1);
    expect(store.dispatch).toBeCalledWith({type: 'theme/toggle'});
  });
});


