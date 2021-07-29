import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';

import Index from "./Components/Index/Index"
import Shops from "./Components/Shops/Shos"
import OneCompany from "./Components/OneCompany/OneCompany"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/shops' component={Shops} />
              <Route exact path='/shop/:companyname' component={OneCompany}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
