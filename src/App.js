import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login_page from "./components/Login_page";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Switch>
        <Route exact path ="/"><Login_page/></Route>
        <Route path ="/Signup"><Signup/></Route>
      </Switch>
    </>
  );
}

export default App;
