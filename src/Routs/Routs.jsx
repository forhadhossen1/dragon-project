
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRouts from "./PrivetRouts";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('/news.json')
        },
        {
          path : '/news/:id',
          element : <PrivetRouts><News></News></PrivetRouts>
        },
        {
          path :'/about',
          element : <About></About>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        }
      ]
    },
  ]);

  export default router;