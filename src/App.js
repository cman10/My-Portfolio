import "./App.css";
import HomePage from "./components/homePage/homePage";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <Switch>
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/WorkExperience" component={WorkExperience} />
      <Route path="/Login" component={LoginComponent} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
