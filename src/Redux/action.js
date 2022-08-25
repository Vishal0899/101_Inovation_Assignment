import axios from "axios"

export const fetchAction = () => {
  return {
    type: "fetch",
  };
};

export const successAction = (payload) => {
  return {
    type: "success",
    payload,
  };
};

export const errorAction = () => {
  return {
    type: "error",
  };
};

export const productAction = (payload) => {
  return {
    type: "product",
    payload,
  };
};

export const favouriteAction = (payload) => {
  return {
    type: "favourite",
    payload,
  };
};

export const getData = ({dispatch}) => {
  dispatch(fetchAction());
  return axios
    .get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
    .then((res) => dispatch(successAction(res.data)))
    .catch((err) => dispatch(errorAction()));
};
