import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function FavoritePhotos() {
  return (
    <PhotosContext.Provider value={{ titleMessage: 'Favorite Photos' }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default FavoritePhotos;
