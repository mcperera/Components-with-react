import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";

import { Nav, Wrapper } from "../";

import {
  headerWrapper,
  headerContent,
  logo,
  userContainer,
  userDetails,
  avatarCircle,
  dropdown,
} from "./Header.module.css";

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { displayName, photoURL } = user;

  return (
    <Wrapper>
      <header className={headerWrapper}>
        <div className={headerContent}>
          <div className={logo}>
            <h2>-CoMponents-</h2>
          </div>
        </div>
        <div className={userContainer}>
          <div className={userDetails}>
            <h3>Hi, {displayName.split(" ")[0]}</h3>
            <div className={avatarCircle}>
              <img src={photoURL} alt={displayName} />
              <ul className={dropdown}>
                <li onClick={() => dispatch(signOut(history))}>Sign Out</li>
              </ul>
            </div>
          </div>
        </div>
        <Nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
        </Nav>
      </header>
    </Wrapper>
  );
}

export default Header;
