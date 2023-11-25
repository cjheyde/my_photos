import AuxButton from "../components/AuxButton";
import Title from "../components/Title";
import PhotosContext from "../context/PhotosContext";

function ForgotPassword() {
  return (
    <div className="mainBox">
      <PhotosContext.Provider value={{ titleMessage: "I Forgot My Password!" }}>
        <Title />
      </PhotosContext.Provider>
      <form action="/">
        <AuxButton type="submit">Exit</AuxButton>
      </form>
    </div>
  );
}

export default ForgotPassword;
