function Nav() {
    return (
        <nav>
            <div className="littleMenu">
                <i className="fa fa-bars menu" aria-hidden="true"></i>
            </div>
            <ul>
            <li><a href="view_photos">View Photos</a></li>
            <li><a href="upload_photos">Upload Photos</a></li>
            <li><a href="download_photos">Download Photos</a></li>
            <li><a href="favorite_photos">Favorite Photos</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="logout" >Logout</a></li>
            </ul>
        </nav>
    );
}

export default Nav;