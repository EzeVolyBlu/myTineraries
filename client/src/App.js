import React from 'react';
import './App.css';
import Landing from './screen/Landing'
import Cities from './Pages/Cities'
import Itineraries from './Pages/Itineraries'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          {/* <Route path='/home' component={Home} /> */}
          
          <Route  path='/cities' component={Cities} />
          <Route exact path='/itineraries/:cityId' component={Itineraries} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
