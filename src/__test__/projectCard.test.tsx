import React from 'react';
// import {Provider} from 'react-redux';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import configureStore from 'redux-mock-store';

import ProjectCard from '../components/ProjectCard';


describe('Projects component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should contain the right title text and tags elements', () => {
    const data = {
      title: 'test',
      text: 'test text',
      tags: ['react', 'redux']
    }
    render(<ProjectCard data={data}/>);

    expect(screen.getByText(data.title)).toBeTruthy();
    expect(screen.getByText(data.text)).toBeTruthy();
    expect(screen.getByText(data.tags[0])).toBeTruthy();
    expect(screen.getByText(data.tags[1])).toBeTruthy();
  })

})