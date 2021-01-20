import { USER_LOGIN, USER_LOGOUT } from "../actionTypes/user";
import fire, { googleProvider } from "../../auth/fire";

const signIn = (redirect) => {
  return (dispatch) => {
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        var user = result.user;
        dispatch({ type: USER_LOGIN, payload: { user } });
        redirect.push("/");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
};

function signOut(history) {
  return (dispatch) => {
    fire
      .auth()
      .signOut()
      .then(function () {
        dispatch({
          type: USER_LOGOUT,
        });
        history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export { signIn, signOut };
