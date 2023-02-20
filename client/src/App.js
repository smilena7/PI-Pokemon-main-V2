import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// Pages
import Welcome from "./pages/Welcome/Welcome.jsx";
import Home from "./pages/Home/Home.jsx";
import Detail from "./pages/Detail/Detail";

axios.defaults.baseURL = "https://pi-pokemon-main-v2-production.up.railway.app";

function App() {
  // Acá es donde manejaré todas las rutas
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
