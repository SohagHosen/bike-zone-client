import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Order from "./pages/order/Order";
import SignUp from "./pages/signup/SignUp";
import Footer from "./shared/footer/Footer";
import Navigation from "./shared/nav/Navigation";
import PrivateRoute from "./shared/privateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <div style={{ marginTop: "63px" }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/order/:id">
              <Order />
            </PrivateRoute>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

