import AuxButton from "../components/AuxButton";
import StyledButton from "../components/StyledButton";

function Login() {
  return (
    <div className="mainBox">
      <h1 className="pageTitle">Register Form</h1>
      <main>
        <form action="main">
          <input
            className="box"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <br />

          <input
            className="box"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />

          <input
            className="box"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />

          <input
            className="box"
            type="password"
            id="repPassword"
            name="repPassword"
            placeholder="Repeat the Password"
            required
          />
          <br />
          <StyledButton type="submit">
            Register
          </StyledButton>
          <AuxButton type="reset">
            Reset
          </AuxButton>
        </form>
        <form action="logout">
          <AuxButton type="submit">
            Exit
          </AuxButton>
        </form>
      </main>
    </div>
  );
}

export default Login;
