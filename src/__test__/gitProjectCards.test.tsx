import React from 'react';
import {Provider} from 'react-redux';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';

import GitProjectCards from '../components/GitProjectCards';

const mockStore = configureStore([]);

describe('GitProjectCards component', () => {
  let store;
  beforeEach(() => {
    store = mockStore(true);
    store.dispatch = jest.fn();
  })

  afterEach(() => {
    cleanup();
  });

  test('should contain the right title text and tags elements', () => {
    const data = [{
      repoName: 'test',
      description: 'test text',
      created: '2021-03-13T10:10:10Z',
      lastUpdated: '2021-03-13T10:10:09Z',
      githubLink: "afsda",
    }];
    const order = 'name';
    render(
      <Provider store={store}>
        <GitProjectCards data={data} order={order}/>
      </Provider>
    );

    expect(screen.getByText(data[0].repoName)).toBeTruthy();
    expect(screen.getByText(data[0].description)).toBeTruthy();
    expect(screen.getByText(data[0].created)).toBeTruthy();
    expect(screen.getByText(data[0].lastUpdated)).toBeTruthy();
  })
})