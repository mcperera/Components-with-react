import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user !== null) {
          return <Component {...props} />;
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