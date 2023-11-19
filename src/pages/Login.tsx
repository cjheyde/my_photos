import LoginForm from "../components/LoginForm";
import RegisterText from "../components/RegisterText";

function Login() {
  return (
    <div className="mainBox">
      <h1 className="pageTitle">Photos App</h1>
      <LoginForm />
      <RegisterText />
    </div>
  );
}

export default Login;
