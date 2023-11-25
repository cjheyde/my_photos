// TODO #9 create Hooks and global var = title
// ref. https://www.youtube.com/watch?v=2NEV_M7NN6k
import { useContext } from "react";
import PhotosContext from "../context/PhotosContext";

function Title() {
  const photosContext = useContext(PhotosContext);

  return <h1 className="pageTitle">{photosContext.titleMessage}</h1>;
}

export default Title;
