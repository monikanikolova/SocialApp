import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from "../types";
import axios from "axios";

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/login`, userData)
    .then(res => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBToken", FBIdToken);
      axios.defaults.header.common["Authorization"] = FBIdToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
      this.props.history.push("/");
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        // payload: err.response.data
      });
    });
};

export const getUserData = () => dispatch => {
  axios
    .get("/user")
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};
