import React from "react";
import { NavLink } from "react-router-dom";
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

const pageLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/react",
    label: "React",
  },
  {
    to: "/css",
    label: "CSS",
  },
];

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { displayName, photoURL } = user;

  const links = pageLinks.map((link, index) => {
    return (
      <li key={index}>
        <NavLink exact to={link.to} activeStyle={{ color: "#a7a7a7" }}>
          {link.label}
        </NavLink>
      </li>
    );
  });

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
            <p>Hi, {displayName.split(" ")[0]}</p>
            <div className={avatarCircle}>
              <img src={photoURL} alt={displayName} />
              <ul className={dropdown}>
                <li onClick={() => dispatch(signOut(history))}>Sign Out</li>
              </ul>
            </div>
          </div>
        </div>
        <Nav>{links}</Nav>
      </header>
    </Wrapper>
  );
}

export default Header;
