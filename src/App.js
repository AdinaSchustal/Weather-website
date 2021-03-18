import "./App.css";
import Register from "./Forms/Register";
import Login from "./Forms/Login";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherHistory from "./Components/WeatherHistory";
import Home from "./Components/Home";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/history" component={WeatherHistory} />
        <Route path="/weather" component={Weather} />
        <Route path="/" component={Home} />
      </Switch>
    </Provider>
  );
}

export default App;
