import React, { Fragment } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Signup from "./pages/Signup/Signup";
import TeslaAccount from "./pages/TeslaAccount/TeslaAccount";

function PrivateRoute() {
  // const user = useSelector(selectUser);
  const user = true;
  return user ? <Outlet /> : <Navigate to="/teslaaccount" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<PrivateRoute />}>
              <Route path="" element={<Login />} />
            </Route>
            <Route exact path="/signup" element={<PrivateRoute />}>
              <Route path="" element={<Signup />} />
            </Route>
            <Route exact path="/teslaaccount" element={<PrivateRoute />}>
              <Route path="" element={<TeslaAccount />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
