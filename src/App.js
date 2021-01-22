import React from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./auth/ProtectedRoute";
import { Login, Home, ReactCompo, CssCompo } from "./pages";
import { Dashboard } from "./components";

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
      </Switch>
    </div>
  );
}

export default App;
