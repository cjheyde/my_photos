import { useContext } from "react";
import PhotosContext from "../context/PhotosContext";

function Title() {
  const photosContext = useContext(PhotosContext);

  return <h1 className="pageTitle">{photosContext.titleMessage}</h1>;
}

export default Title;
