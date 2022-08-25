const initState = {};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "showData":
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};
