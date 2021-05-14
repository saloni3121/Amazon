import React,{ useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './provider/StateProvider';
import { auth } from './FireBase/Firebase';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {

  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // user is logged in
        dispatch({
          type : "SET_USER",
          user: authUser,
        })
      }else{
        // user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    });
    
    console.log("User is >>>>>", user);

    return() =>{
      unsubscribe();
    }

  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
