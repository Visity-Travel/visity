import './App.css'
import React from 'react'
import Landing from "./Components/Landing.js"
import Explore from "./Components/Explore.js"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router> 
  );
}
export default App;
