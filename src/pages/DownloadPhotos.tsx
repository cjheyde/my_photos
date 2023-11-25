import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function DownloadPhotos() {
  return (
    <PhotosContext.Provider value={{ titleMessage: 'Download Photos' }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default DownloadPhotos;