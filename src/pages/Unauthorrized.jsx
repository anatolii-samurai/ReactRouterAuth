import { Link } from "react-router-dom";

const Unauthorrized = () =>(
    <div>
        <h1>Unauthorized page</h1>
        <p>You do not have permission to access this page.</p>
        <Link to="/login" > Go back to login </Link>
    </div>
)

export default Unauthorrized;