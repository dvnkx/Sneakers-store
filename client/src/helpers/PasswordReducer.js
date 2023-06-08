export const togglePasswordReducer = (state, action) => {
  switch (action.type) {
    case "old": {
      return { ...state, old: !state.old };
    }
    case "new": {
      return { ...state, new: !state.new };
    }

    default:
      return console.log(Error(`Unknowm action: ${action.type}`));
  }
};
