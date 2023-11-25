import Header from "../components/Header";
import PhotosContext from "../context/PhotosContext";

function Contact() {
  return (
    <PhotosContext.Provider value={{ titleMessage: "Contact" }}>
      <Header />
    </PhotosContext.Provider>
  );
}

export default Contact;
