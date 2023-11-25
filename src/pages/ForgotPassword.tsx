import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function ForgotPassword() {
  return (
    <PhotosContext.Provider value={{ titleMessage: "I Forgot My Password!" }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default ForgotPassword;
