import "./rgst.css"
import { Link } from "react-router-dom";

export default function Rgst() {
  return (
    <div className="rgst">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your username..."/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email.."/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password.."/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">LOGIN</Link>
        </button>
    </div>
  );
}