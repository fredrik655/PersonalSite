import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Skills from '../components/Skills';

const mockStore = configureStore([]);

describe('skills components test', () => {
  let store;
  beforeEach(() => {
    store = mockStore(true);
    store.dispatch = jest.fn();
  })

  afterEach(() => {
    cleanup();
  });

  test('every skill is present', () => {
    const skillsArr = ['HTML', 'Javascript', 'Css', 'Scss', 'Typescript', 'Bootstrap', 'React',
      'Redux', 'Jest', 'Cypress', 'Webpack', 'Git', 'Github/Github Actions', 'React Native'];

    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );

    skillsArr.forEach(name => {
      expect(screen.getByText(name)).toBeTruthy();
    })
  })
})