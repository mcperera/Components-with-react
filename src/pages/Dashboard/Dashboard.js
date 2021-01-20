import React from "react";
import { signOut } from "../../store/actionCreators/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { dashboardWrapper } from "./Dashboard.module.css";

function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  return (
    <div className={dashboardWrapper}>
      {user.displayName}
      <button onClick={() => dispatch(signOut(history))}>SignOut</button>
    </div>
  );
}

export default Dashboard;
