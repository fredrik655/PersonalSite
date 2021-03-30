import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Skills from '../components/Skills';


describe('skills components test', () => {
  afterEach(() => {
    cleanup();
  });

  test('every skill is present', () => {
    const skillsArr = ['HTML', 'Javascript', 'Css', 'Sass', 'Typescript', 'Bootstrap', 'React',
      'Redux', 'Jest', 'Cypress', 'Webpack', 'Git', 'Github/Github Actions'];

    render(
      <Skills />
    );

    skillsArr.forEach(name => {
      expect(screen.getByText(name)).toBeTruthy();
    })
  })
})