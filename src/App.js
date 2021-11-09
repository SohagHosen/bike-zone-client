import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import Footer from "./shared/footer/Footer";
import Navigation from "./shared/nav/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

