import React from "react";
import { NavLink } from "react-router-dom";

import { Nav, Wrapper, Logo, User } from "../";

import { headerWrapper } from "./Header.module.css";

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
        <Logo />
        <User />
        <Nav>{links}</Nav>
      </header>
    </Wrapper>
  );
}

export default Header;
