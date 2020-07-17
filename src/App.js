import React from 'react';
import { HashRouter , Route} from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
  );
}
export default App;
