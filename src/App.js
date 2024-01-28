import { Outlet } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
    
      <Outlet/>
    </div>
  );
}



export default App;


//step 1 for routing


