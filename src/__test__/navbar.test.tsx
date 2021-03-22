import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavBar from '../components/NavBar';

describe('<NavBar />', () => {
  afterEach(() => {
    cleanup();
  });
  test('should display a navbar', async () => {
    render(<NavBar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
  });

  test('click triggers event', () => {
    const handleClick = jest.fn();
    render(<NavBar onClick={handleClick}/>);

    fireEvent.click(screen.getByText('Home'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});


