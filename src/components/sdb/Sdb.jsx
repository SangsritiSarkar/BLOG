
import "./sdb.css";

export default function Sdb() {
  return (
    <div className="sdb">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
          src="https://i.pinimg.com/564x/b5/1e/32/b51e329430a296a484121e519b994c08.jpg"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi quae amet cupiditate, porro laudantium obcaecati. </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
      </div>
    </div>
  );
}