import React from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./auth/ProtectedRoute";
import { Login, Home, ReactCompo, CssCompo } from "./pages";
import { Dashboard } from "./components";

import { ToastNotification } from "./_projects/react_components";
import Loaders from "./_projects/css_components/loaders/Loaders";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/login"} component={Login} />
        <ProtectedRoute exact path={"/"}>
          <Dashboard>
            <Home />
          </Dashboard>
        </ProtectedRoute>
        <ProtectedRoute exact path={"/react"}>
          <Dashboard>
            <ReactCompo />
          </Dashboard>
        </ProtectedRoute>
        <ProtectedRoute exact path={"/css"}>
          <Dashboard>
            <CssCompo />
          </Dashboard>
        </ProtectedRoute>
        <ProtectedRoute exact path={"/react/toast-notification"}>
          <Dashboard>
            <ToastNotification />
          </Dashboard>
        </ProtectedRoute>
        <ProtectedRoute exact path={"/css/circular-loading"}>
          <Dashboard>
            <Loaders />
          </Dashboard>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
