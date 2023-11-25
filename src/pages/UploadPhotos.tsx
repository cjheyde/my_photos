import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function UploadPhotos() {
  return (
    <PhotosContext.Provider value={{ titleMessage: "Upload Photos" }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default UploadPhotos;
