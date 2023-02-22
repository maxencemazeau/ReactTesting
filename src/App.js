import React from "react";
import logo from "./logo.svg";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import CreerChat from './components/activite/CreerChat'
import Activite from "./Activite";
import CreerActivite from "./components/activite/CreerActivite";
import Test from './components/test';
import Chat from './components/chat/Chat'
import ChatBenevole from "./components/chat/ChatBenevole";

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
              <Link to="/ChatBenevole">ListeChat</Link>
            </li>
            <li>
              <Link to="/CreerActivite">Créer une activite</Link>
            </li>

          <li> <Link to="/Test">Test</Link></li>

          <li> <Link to="/CreerChat">Creer Chat</Link></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/Chat/:data" element={<Chat />}></Route>
          <Route path="/Activite" element={<Activite/>}>
          </Route>
          <Route path="/ChatBenevole" element={<ChatBenevole/>}>
          </Route>
          <Route path="/CreerActivite" element={<CreerActivite/>}>
          </Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/CreerChat/*" element={<CreerChat />}></Route>
        </Routes>
         
      </div>
    </Router>
    </div>
    
  );
}

