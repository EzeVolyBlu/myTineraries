import './App.css';
import Landing from './screen/Landing'
import Cities from './Pages/Cities'
import Profile from './Pages/Profile'
import Itineraries from './Pages/Itineraries'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ErrorRoute from './Components/ErrorRoute'
import CreateNewAccount from './Pages/CreateNewAccount'
import Login from './Pages/Login'
import React, { Component } from 'react'




export default class App extends Component {



  render() {

    const token = window.localStorage.getItem('token')

    return (
      <BrowserRouter>
        <div className="App">

          <div className="mobile d-flex flex-column justify-content-between">

            <Navbar token={token}/>

            <Switch>

              <Route exact path='/' component={Landing} />

              <Route exact path='/user/profile/:token' component={Profile} /> 

              <Route exact path='/login' >
                <Login />
                <Home />
              </Route>

              <Route exact path='/create-account' >
                <CreateNewAccount />
                <Home />
              </Route>

              <Route exact path='/cities' >
                <Cities />
                <Home />
              </Route>

              <Route exact path='/itineraries/:cityId' component={Itineraries} />

              <Route path="*">
                <ErrorRoute />
                <Home />
              </Route>

            </Switch>


          </div>
        </div>
      </BrowserRouter>
    );
  }
}

