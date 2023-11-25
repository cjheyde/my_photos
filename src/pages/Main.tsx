import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function Main() {
  return (
    <PhotosContext.Provider value={{ titleMessage: "Main Screen" }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default Main;
