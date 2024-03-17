import "./topbar.css"

export default function Topbar() {
  
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className="topImage"
              src="https://media.licdn.com/dms/image/D4D03AQF-YD27Y16fQQ/profile-displayphoto-shrink_800_800/0/1677519055058?e=2147483647&v=beta&t=-CQgle3SWV48hMY15egfZKdtJRJEwFeeB60m5pIoH34"
              alt=""
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
