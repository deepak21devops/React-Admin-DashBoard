import Sidebar from "./Components/sidebar/Sidebar";
import { Topbar } from "./Components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home/Home";
import WidgetSM from "./Components/WidgetSM/WidgetSM";
import WidgetLG from "./Components/WidgetLG/WidgetLG";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
