import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Camera from "../../pages/Camera/Camera";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Preview from "../../pages/Preview/Preview";
import GeneratedThumbnails from "../../pages/GeneratedThumbnails/GeneratedThumbnails";
import UploadImage from "../../pages/UploadImage/UploadImage";
import CropImage from "../../pages/CropImage/CropImage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="upload-image" element={<UploadImage />} />
        <Route path="crop-image" element={<CropImage />} />
        <Route path="camera" element={<Camera />} />
        <Route path="preview" element={<Preview />} />
        <Route
          path="generated-thumbnails/:imageId"
          element={<GeneratedThumbnails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
