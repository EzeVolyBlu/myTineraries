import React from 'react';
import './App.css';
import Landing from './screen/Landing'
import Cities from './Pages/Cities'
import Itineraries from './Pages/Itineraries'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import CreateNewAccount from './Pages/CreateNewAccount'
import Login from './Pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="mobile d-flex flex-column justify-content-between">

          <Route path='/' component={Navbar} />
          <Route exact path='/' component={Landing} />
          <Route exact path='/user/:token' component={Landing} />

          <Route path='/login' component={Login} />
          <Route path='/create-account' component={CreateNewAccount} />
          <Route path='/cities' component={Cities} />
          <Route exact path='/itineraries/:cityId' component={Itineraries} />
          <Route path="/(cities|itineraries|create-account|login)/" component={Home} />

        </div>
        {/* <Switch> */}
          {/* <Route  path='/123' component={Home} /> */}
          
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
