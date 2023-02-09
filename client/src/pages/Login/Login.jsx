import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };

    return (
        <div className="container">
            <h1>Log in Form</h1>
            <div className="">
                <h2>Members Log In</h2>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <button>Log In</button>
                <p>or</p>
                <button onClick={googleAuth}>
                    <span>Sign in with Google</span>
                </button>
                <p>
                    New Here? <Link to="/signup">Sign Up</Link>
                </p>
            </div>


        </div>
    )
}

export default Login;