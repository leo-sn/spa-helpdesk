import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };

    return (
        <div className="container">
            <h1>Sign up Form</h1>
            <div className="">
                <h2>Create Account</h2>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button>Sign up</button>
                <p>or</p>
                <button onClick={googleAuth}>
                    <span>Sign up with Google</span>
                </button>
                <p>
                    Already Have Account? <Link to="/signup">Sign In</Link>
                </p>
            </div>


        </div>
    )
}

export default Signup;