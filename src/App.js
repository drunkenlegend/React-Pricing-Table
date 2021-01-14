import './App.css';
import {  HashRouter, Switch, Route } from 'react-router-dom';

import Navi  from "./Components/Navi.js";
import Pricing from "./Components/Pricing.js";
function App() {
  return (
    <div className="App">
      <HashRouter basename="/">

        <Navi />
        
          <Route path='/' exact component={Pricing} />
          <Route path='/pricing' exact component={Pricing} />
          
       
      </HashRouter>

    </div>
  );
}




export default App;
