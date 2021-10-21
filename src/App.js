import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Login_page from "./components/Login_page";
import Footer from "./components/Footer";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Login_page} />
        <Route path='/Signup' component={Signup} />
      </Switch>
      
      <Footer />
    </>
  );
}

export default App;
