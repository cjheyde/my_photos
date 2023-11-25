import AuxButton from "../components/AuxButton";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function Logout() {
  return (
    <div className="mainBox">
      <Navbar />
      <Title title="Logout" />
      <form action="/">
        <AuxButton type="submit">
          Logout
        </AuxButton>
      </form>
    </div>
  );
}

export default Logout;
