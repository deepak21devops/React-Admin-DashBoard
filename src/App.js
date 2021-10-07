import Sidebar from "./Components/sidebar/Sidebar";
import { Topbar } from "./Components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home/Home";
import WidgetSM from "./Components/WidgetSM/WidgetSM";
import WidgetLG from "./Components/WidgetLG/WidgetLG";
import UserList from './pages/UserList/UserList.jsx'
import User from './pages/User/User.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:userId">
            <User />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
