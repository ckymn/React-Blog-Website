import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              to={{ pathname: "/" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to={{ pathname: "/settings" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to={{ pathname: "/settings" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to={{ pathname: "/write" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to={{ pathname: "/settings" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          ></img>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to={{ pathname: "/login" }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to={{ pathname: "/register" }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
