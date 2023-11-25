import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import PhotosContext from "../context/PhotosContext";
import Title from "../components/Title";

function Login() {
  return (
    <>
      <PhotosContext.Provider value={{ titleMessage: "Login" }}>
        <Title />
      </PhotosContext.Provider>
      <LoginForm />
      <section className="simpleText">
        <Link to="/my_photos/forgot_password">I Forgot my Password!</Link>
        <p>
          <Link to="/my_photos/register">Register</Link>
        </p>
      </section>
    </>
  );
}

export default Login;
