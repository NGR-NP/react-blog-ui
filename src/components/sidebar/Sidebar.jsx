import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Linux">
              Linux
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Web-Developement">
              Web Dev
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Networking">
              Networking
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tips-Tricks">
              Tips & Tricks
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">SOCIAL MEDIA</span>
        <div className="sidebarSocial">
          <a  href="https://fb.com/ngr-nep" className="socLink" target="_blank" rel="noreferrer" >
            <i className="sidebarIcon sIFb fab fa-facebook-square"></i>
          </a>
          <a  href="https://instagram.com" className="socLink" target="_blank" rel="noreferrer">
            <i className="sidebarIcon sIIg fab fa-instagram-square"></i>
          </a>
          <a  href="https://fb.com" className="socLink" target="_blank" rel="noreferrer">
            <i className="sidebarIcon sIDc fab fa-discord"></i>
          </a>
          <a  href="https://fb.com" className="socLink" target="_blank" rel="noreferrer">
            <i className="sidebarIcon sITw fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
