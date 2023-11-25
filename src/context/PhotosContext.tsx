import { createContext } from "react";

type PhotosContextType = {
  titleMessage: string;
};

const PhotosContext = createContext({} as PhotosContextType);

export default PhotosContext;
