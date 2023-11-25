import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import FavoritePhotos from "./pages/FavoritePhotos";
import DownloadPhotos from "./pages/DownloadPhotos";
import UploadPhotos from "./pages/UploadPhotos";
import ViewPhotos from "./pages/ViewPhotos";

function App() {
  return (
    <Routes>
      <Route path="/my_photos/login" element={<Login />} />
      <Route path="/my_photos/register" element={<Register />} />
      <Route path="/my_photos/logout" element={<Logout />} />
      <Route path="/my_photos/main" element={<Main />} />
      <Route path="/my_photos/contact" element={<Contact />} />
      <Route path="/my_photos/forgot_password" element={<ForgotPassword />} />
      <Route path="/my_photos/favorite_photos" element={<FavoritePhotos />} />
      <Route path="/my_photos/download_photos" element={<DownloadPhotos />} />
      <Route path="/my_photos/upload_photos" element={<UploadPhotos />} />
      <Route path="/my_photos/view_photos" element={<ViewPhotos />} />
      <Route path="/my_photos" element={<Main />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
