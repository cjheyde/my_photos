// import React, { useState } from "react";
import StyledButton from "./StyledButton";

function Formular() {
  // const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // console.log("Submited value:", inputValue);
  };
  // const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  //   setInputValue(e.target.value);
  // };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" value={inputValue} onChange={handleChange} /> */}
      <StyledButton className="mainBtn" type="submit">Login</StyledButton>
    </form>
  );
}

export default Formular;
