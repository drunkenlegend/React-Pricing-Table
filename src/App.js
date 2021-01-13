import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navi  from "./Components/Navi.js";
import Pricing from "./Components/Pricing.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navi />
        <Switch>
          <Route path='/' exact component={Pricing} />
          <Route path='/pricing' exact component={Pricing} />
          
        </Switch>
      </Router>

    </div>
  );
}




export default App;
