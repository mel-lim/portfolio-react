import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { PortfolioHome } from "./components/PortfolioHome";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PortfolioHome} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}
export default App;
