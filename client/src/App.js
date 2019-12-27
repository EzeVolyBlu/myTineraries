import React from 'react';
import './App.css';
import Landing from './screen/Landing'
import Cities from './Pages/Cities'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/cities' component={Cities} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
