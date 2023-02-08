import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome/Welcome.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  // Acá es donde manejaré todas las rutas
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
