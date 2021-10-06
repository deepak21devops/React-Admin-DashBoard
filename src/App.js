import Sidebar from "./Components/sidebar/Sidebar";
import { Topbar } from "./Components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home/Home";

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
