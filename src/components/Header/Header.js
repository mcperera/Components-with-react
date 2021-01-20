import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";

import { Wrapper } from "../";

import {
  headerWrapper,
  logo,
  userContainer,
  userDetails,
  avatarCircle,
} from "./Header.module.css";

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { displayName, photoURL } = user;

  console.log(user);
  return (
    <Wrapper>
      <header className={headerWrapper}>
        <div className={logo}>
          <h2>-CoMponents-</h2>
        </div>
        <div className={userContainer}>
          <div className={userDetails}>
            <h3>Hi, {displayName.split(" ")[0]}</h3>
            <div className={avatarCircle}>
              <img src={photoURL} alt={displayName} />
            </div>
          </div>
          <button onClick={() => dispatch(signOut(history))}>SignOut</button>
        </div>
      </header>
    </Wrapper>
  );
}

export default Header;
