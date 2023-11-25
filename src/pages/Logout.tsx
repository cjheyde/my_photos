import AuxButton from "../components/AuxButton";
import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function Logout() {
  return (
    <>
      <PhotosContext.Provider value={{ titleMessage: "Logout" }}>
        <Header />
      </PhotosContext.Provider>
      <form action="/" className="mainBox">
        <AuxButton type="submit">Logout</AuxButton>
      </form>
    </>
  );
}

export default Logout;
