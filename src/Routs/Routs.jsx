
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default router;