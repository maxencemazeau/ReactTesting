import React from "react";
import logo from "./logo.svg";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Chat from './components/chat'
import Activite from "./Activite";
import CreerActivite from "./CreerActivite";
import Test from './components/test';

export default function App() {

 
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Activite">Activite</Link>
            </li>
            <li>
              <Link to="/CreerActivite">Créer une activite</Link>
            </li>

          <li> <Link to="/Test">Test</Link></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Activite" element={<Activite/>}>
          </Route>
          <Route path="/CreerActivite" element={<CreerActivite/>}>
          </Route>
          <Route path="/Test" element={<Test />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

