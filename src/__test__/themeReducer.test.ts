import themeReducer from '../components/reducers/themeReducer';


describe('test reducer actions', () => {
  test('state should change between true and false when toggled', () => {
    const initState = true;
    const action = {type: 'theme/toggle'};

    let result = themeReducer(initState, action);
    expect(result).toBe(false);
    result = themeReducer(result, action);
    expect(result).toBe(true);
  });
});