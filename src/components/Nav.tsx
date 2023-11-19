import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="littleMenu">
                <i className="fa fa-bars menu" aria-hidden="true"></i>
            </div>
            <ul>
            <li><Link to="view_photos">View Photos</Link></li>
            <li><Link to="upload_photos">Upload Photos</Link></li>
            <li><Link to="download_photos">Download Photos</Link></li>
            <li><Link to="favorite_photos">Favorite Photos</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="logout" >Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;