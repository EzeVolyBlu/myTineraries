import React from 'react';
import './App.css';
import Landing from './screen/Landing'
import Cities from './Pages/Cities'
import Itineraries from './Pages/Itineraries'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="mobile d-flex flex-column justify-content-between">

          <Route path='/' component={Navbar} />
          <Route exact path='/' component={Landing} />

          <Route path='/cities' component={Cities} />
          <Route exact path='/itineraries/:cityId' component={Itineraries} />
          <Route path="/(cities|itineraries)/" component={Home} />

        </div>
        {/* <Switch> */}
          {/* <Route  path='/123' component={Home} /> */}
          
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
