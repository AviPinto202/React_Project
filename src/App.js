import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import Admin from "./pages/admin";
import Menu from "./components/menu";

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/Admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
