import "./App.css";
import Error from "./Error";
import AboutUs from "./components/AboutUs/AboutUs";
import Body from "./components/Body/Body";
import ContactUs from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
    
      <Body/>
    </div>
  );
}



export default App;


//step 1 for routing
export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:'/about',
    element:<AboutUs/>
  },
  {
    path:'/contact',
    element:<ContactUs/>
  },

])