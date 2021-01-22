import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, children, ...rest }) {
  //We can use Component without children
  const { user } = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user !== null) {
          return <>{children}</>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: props.location,
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
