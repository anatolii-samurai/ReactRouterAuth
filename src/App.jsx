
import { AuthProvider} from "./context/Auth";
import { Link,Outlet } from "react-router-dom";

function App() {
 

  return (
    <AuthProvider>
       <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/lounge'}>Lounge</Link>
            </li>
        </ul>
        <Outlet/>
    </AuthProvider>
  )
}

export default App
