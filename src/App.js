import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Nomatch from './Components/Nomatch/Nomatch';

export const userContex = createContext()

function App() {
  const [isloggedIn,setloggedIn] = useState({})
  return (
   <userContex.Provider value={[isloggedIn,setloggedIn]}>
      <Router>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard/:sreviceTitle">
                  <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
                  <Nomatch></Nomatch>
            </Route>
        </Switch>
      </Router>
   </userContex.Provider>
  );
}

export default App;
