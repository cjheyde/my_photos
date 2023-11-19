function Header() {
  return (
    <header>
      <nav>
        <div className="littleMenu">
          <i className="fa fa-bars menu" aria-hidden="true"></i>
        </div>
        <ul>
          <li>
            <a href="viewPhotos.html">View Photos</a>
          </li>
          <li>
            <a href="uploadPhotos.html">Upload Photos</a>
          </li>
          <li>
            <a href="favoritePhotos.html">Favorite Photos</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="logout.html">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
