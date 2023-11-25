import Navbar from "./Navbar";
import Title from "./Title";

function Header(props: string) {
  return (
    <header>
      <Navbar />
      <Title title={props} />
    </header>
  );
}

export default Header;
