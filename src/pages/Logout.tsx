import AuxButton from "../components/AuxButton";
import Nav from "../components/Nav";

function Logout() {
  return (
    <div className="mainBox">
      <Nav />
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
