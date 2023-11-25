import PhotosContext from "./PhotosContext";
import { useState } from 'react';

type PhotosProviderProps = {
    children: React.ReactNode;
  };

function PhotosProvider({ children }: PhotosProviderProps) {
  const [pageTitleMessage] = useState<string>("");

  return (
    <PhotosContext.Provider value={{ titleMessage: pageTitleMessage }}>
      <div className={pageTitleMessage}>{children}</div>
    </PhotosContext.Provider>
  );
}

export default PhotosProvider;