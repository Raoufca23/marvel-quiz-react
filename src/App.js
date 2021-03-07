import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/header'
import Landing from './components/Landing/landing';
import Footer from './components/Footer/footer';
import Welcome from './components/Welcome/welcome'
import Signin from './components/Signin/signin';
import Signup from './components/Signup/signup';
import ErrorPage from './components/ErrorPage/errorPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
