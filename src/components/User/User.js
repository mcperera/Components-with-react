import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  userContainer,
  userDetails,
  avatarCircle,
  signOutIcon,
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
        <div
          className={avatarCircle}
          onClick={() => dispatch(signOut(history))}>
          <img src={photoURL} alt={displayName} />
          <ExitToAppIcon className={signOutIcon} />
        </div>
      </div>
    </div>
  );
}

export default User;
