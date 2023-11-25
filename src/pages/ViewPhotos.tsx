import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function ViewPhotos() {
  return (
    <PhotosContext.Provider value={{ titleMessage: "View Photos" }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default ViewPhotos;
