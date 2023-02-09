import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome/Welcome.jsx";
import Home from "./pages/Home/Home.jsx";
import Detail from "./pages/Detail/Detail";

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
