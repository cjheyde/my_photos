import LoginForm from "../components/LoginForm";
import RegisterText from "../components/RegisterText";
import Title from "../components/Title";

function Login() {
  return (
    <div className="mainBox">
      <Title title="App Photos" />
      <LoginForm />
      <RegisterText />
    </div>
  );
}

export default Login;
