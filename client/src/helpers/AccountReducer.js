export const toggleAccountReducer = (state, action) => {
  switch (action.type) {
    case "data": {
      return { ...state, data: !state.data };
    }
    case "address": {
      return { ...state, address: !state.address };
    }
    case "password": {
      return { ...state, password: !state.password };
    }
    default:
      return console.log(Error(`Unknowm action: ${action.type}`));
  }
};
