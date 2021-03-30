import React from 'react';
// import {Provider} from 'react-redux';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import configureStore from 'redux-mock-store';

import GitProjectsFilter from '../components/GitProjectsFilter';



describe('git proj btn', () => {
  afterEach(() => {
    cleanup();
  })

  test('clicking filter should trigger filter func', () => {
    const triggerFunc = jest.fn();

    render(
        <GitProjectsFilter func={triggerFunc} />
    );

    fireEvent.click(screen.getByText('Name'));
    expect(triggerFunc).toBeCalledTimes(1);
    fireEvent.click(screen.getByText('Name reverse'));
    expect(triggerFunc).toBeCalledTimes(2);
    fireEvent.click(screen.getByText('Date created newest'));
    expect(triggerFunc).toBeCalledTimes(3);
    fireEvent.click(screen.getByText('Date created oldest'));
    expect(triggerFunc).toBeCalledTimes(4);
    fireEvent.click(screen.getByText('last updated newest'));
    expect(triggerFunc).toBeCalledTimes(5);
    fireEvent.click(screen.getByText('last updated oldest'));
    expect(triggerFunc).toBeCalledTimes(6);

  });
})