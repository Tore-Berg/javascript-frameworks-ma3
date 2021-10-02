import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Toggle from "./components/navigation/Toggle";
import Menu from "./components/navigation/Menu";
import HomePage from "./pages/home/HomePage";
import GoToPage from "./components/GoToPage";
import Login from "./pages/login/Login";

function App() {
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };

  return (
    <div className="App">
      <Toggle handleNavToggle={handleNavToggle} />
      <Router>
        {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page/:id">
            <GoToPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
