import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ReactCompo from "./pages/ReactCompo/ReactCompo";

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
      </Switch>
    </div>
  );
}

export default App;
