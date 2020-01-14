import './App.css';
import Landing from './screen/Landing'
import Cities from './Pages/Cities'
import Profile from './Pages/Profile'
import Itineraries from './Pages/Itineraries'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ErrorRoute from './Components/ErrorRoute'
import CreateNewAccount from './Pages/CreateNewAccount'
import Login from './Pages/Login'
import { connect } from 'react-redux';
// import { loadUser } from './store/actions/loginActions'
import React, { Component } from 'react'


class App extends Component {

  

  render() {

    
    return (
      <BrowserRouter>
        <div className="App">
  
          <div className="mobile d-flex flex-column justify-content-between">
  
            <Route path='/' component={Navbar} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/user/profile/:token' component={Profile} />
  
            <Route path='/login' component={Login} />
            <Route path='/create-account' component={CreateNewAccount} />
            <Route path='/cities' component={Cities} />
            <Route exact path='/itineraries/:cityId' component={Itineraries} />
            <Route path="/(cities|itineraries|create-account|login|user/profile)/" component={Home} />
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



const mapDispatchToProps = dispatch => {
  return {
      // completeFields: (state) => dispatch(completeFields(state)),
      // loadUser: () => dispatch(loadUser())

  }

}


export default connect(
  null,
  mapDispatchToProps)
  (App);