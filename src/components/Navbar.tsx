import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

{/* TODO #8 fix Navbar minimized */}
function Navbar() {
  return (
    <nav className="navbar">
      <div className="littleMenu">
        {/* ref. https://www.youtube.com/watch?v=W8Ql4jxQk3g */}
        <i className="fa fa-bars menu" aria-hidden="true"></i>
      </div>
      <ul>
        <li>
          <Link to="/my_photos/view_photos">View Photos</Link>
        </li>
        <li>
          <Link to="/my_photos/upload_photos">Upload Photos</Link>
        </li>
        <li>
          <Link to="/my_photos/download_photos">Download Photos</Link>
        </li>
        <li>
          <Link to="/my_photos/favorite_photos">Favorite Photos</Link>
        </li>
        <li>
          <Link to="/my_photos/contact">Contact</Link>
        </li>
        <li>
          <Link to="/my_photos/login">Login</Link>
        </li>
        <li>
          <Link to="/my_photos/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
