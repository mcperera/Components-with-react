import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";

import {
  userContainer,
  userDetails,
  avatarCircle,
  dropdown,
} from "./User.module.css";

function User() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { displayName, photoURL } = user;

  return (
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
  );
}

export default User;
