import React, { useState } from "react";
import StyledButton from "./StyledButton";

function Formular() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailValue(e.target.value);
    setPasswordValue(e.target.value);
  };
  
  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordValue(e.target.value);
  };

  return (
    <form className="mainBox" action="/my_photos/main" >
      <input
        className="box"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        value={emailValue}
        onChange={handleEmailChange}
      />
      <input
        className="box"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      <StyledButton type="submit">Login</StyledButton>
    </form>
  );
}

export default Formular;
