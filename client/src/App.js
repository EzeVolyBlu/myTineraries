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
// import { connect } from 'react-redux';
// import { loadUser } from './store/actions/loginActions'
import React, { Component } from 'react'



export default class App extends Component {



  render() {


    return (
      <BrowserRouter>
        <div className="App">

          <div className="mobile d-flex flex-column justify-content-between">

            <Navbar />

            <Switch>

              <Route exact path='/' component={Landing} />


              <Route path='/user/profile/:token'>
                <Profile />
                <Home />
              </Route>

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

              <Route exact path='/itineraries/:cityId' >
                <Itineraries />
                <Home />
              </Route>


              {/* <Route path="/(cities|itineraries|create-account|login|user/profile)/" component={Home} /> */}

              <Route path="*">
                <ErrorRoute />
                <Home />
              </Route>

            </Switch>

            {/* <Route exact path='/' component={Navbar} />  */}
            {/* <Route path='/:anything' component={ErrorRoute} /> */}
            {/* <Route path='/:anything' component={Home} /> */}

          </div>
          {/* <Switch> */}
          {/* <Route  path='/123' component={Home} /> */}

          {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

