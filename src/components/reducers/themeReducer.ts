interface actionInterface {
  readonly type: string;
  data?: string;
}

const themeReducer = (state = true, action:actionInterface):boolean => {
  switch (action.type) {
    case 'theme/toggle':
      return !state;
    default:
      return state
  }
}

export default themeReducer;