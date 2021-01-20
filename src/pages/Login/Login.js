import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actionCreators/user";
import { useHistory } from "react-router-dom";

import {
  loginWrapper,
  container,
  loginBtn,
  btnIcon,
  btnText,
} from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const redirect = useHistory();
  return (
    <div className={loginWrapper}>
      <div className={container}>
        <h1>- CoMponents -</h1>
        <div className={loginBtn} onClick={() => dispatch(signIn(redirect))}>
          <span className={btnIcon} />
          <span className={btnText}>Sign in with Google</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
