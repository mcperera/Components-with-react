import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actionCreators/user";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const redirect = useHistory();
  return (
    <div>
      <button onClick={() => dispatch(signIn(redirect))}>Google</button>
    </div>
  );
}

export default Login;
