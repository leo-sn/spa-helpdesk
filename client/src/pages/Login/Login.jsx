import { Link } from "react-router-dom";
import "../Login/Login.scss"

const Login = () => {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };

    return (
        <div className="login-container">
            <h1 className="login-container--title">Welcome to SPA-HELPDESK</h1>
            <div className="login-container--form">
                <h2>Members Log In</h2>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <button className="button--regular">Log In</button>
                <p>or</p>
                <button className="button--google" onClick={googleAuth}>
                    Sign in with Google!
                </button >
                <p>
                    New Here? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;