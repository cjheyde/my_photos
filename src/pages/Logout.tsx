import AuxButton from "../components/AuxButton";
import Navbar from "../components/Navbar";

function Logout() {
  return (
    <div className="mainBox">
      <Navbar />
      <h1 className="pageTitle">Logout</h1>
      <form action="/">
        <AuxButton type="submit">
          Logout
        </AuxButton>
      </form>
    </div>
  );
}

export default Logout;
