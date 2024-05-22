import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Unauthorrized from "../pages/Unauthorrized";
import { RequireAuth } from '../context/Auth';
import Lounge from "../pages/Lounge"



export const router = createBrowserRouter([
    {
      
      element: <App/>,
      children:[
        {
          path:"/",
           element:<Home />
        },
        {
          path:"/login",
           element:<Login />
        },
        {
          path:"*",
           element:<NotFound />
        },
        {
          path:"/unauthorized", 
          element:<Unauthorrized/>
        },
        {
          element:<RequireAuth />,
          children:[
           {
             path:"/lounge", element:<Lounge />
           }
          ]
                  
       }
      ]
    },
   
   
  
  ]);