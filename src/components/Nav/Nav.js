import React from "react";

import { navWrapper, navItems } from "./Nav.module.css";

function Nav({ children }) {
  return (
    <nav className={navWrapper}>
      <ul className={navItems}>{children}</ul>
    </nav>
  );
}

export default Nav;
