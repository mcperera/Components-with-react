import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path={"/"} component={Dashboard} />
        <Route exact path={"/login"} component={Login} />
      </Switch>
    </div>
  );
}

export default App;
