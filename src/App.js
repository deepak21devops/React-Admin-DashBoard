import Sidebar from "./Components/sidebar/Sidebar";
import { Topbar } from "./Components/topbar/Topbar";
import './app.css'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">Others</div>
      </div>
    </div>
  );
}

export default App;
