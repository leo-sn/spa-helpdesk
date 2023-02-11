import { Link } from "react-router-dom";
import "../Signup/Signup.scss";

const Signup = () => {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };

    return (
        <div className="login-container">
            <h1 className="login-container--title">Sign up Form</h1>
            <div className="login-container--form">
                <h2>Create Account</h2>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button className="button--regular">Sign up</button>
                <p>or</p>
                <button className="button--google" onClick={googleAuth}>
                    Sign in with Google!
                </button>
                <p>
                    Already Have Account? <Link to="/">Sign In</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;