import "./topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/" >HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/" >ABOUT</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/" >CONTACT</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/write" >WRITE</Link>
                </li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
              user ? (
                <img 
                  className="topImage"
                  src="https://media.licdn.com/dms/image/D4D03AQF-YD27Y16fQQ/profile-displayphoto-shrink_800_800/0/1677519055058?e=2147483647&v=beta&t=-CQgle3SWV48hMY15egfZKdtJRJEwFeeB60m5pIoH34"
                  alt=""
                />
              ) : (
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                    </li>
                </ul>
                
              )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
