const initState = {
  loading: false,
  data: [],
  product: {},
  favourite: [],
  error: false,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "error":
      return {
        ...state,
        error: true,
      };
    case "product":
      return {
        ...state,
        product: action.payload,
      };
    case "favourite":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    default:
      return state;
  }
};
