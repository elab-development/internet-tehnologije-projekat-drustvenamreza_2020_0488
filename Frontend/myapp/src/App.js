import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;