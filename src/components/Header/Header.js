import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";

import { Wrapper } from "../";

import { headerWrapper } from "./Header.module.css";

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Wrapper>
      <div className={headerWrapper}>
        <h1>Hello, {user.displayName}</h1>
        <button onClick={() => dispatch(signOut(history))}>SignOut</button>
      </div>
    </Wrapper>
  );
}

export default Header;
