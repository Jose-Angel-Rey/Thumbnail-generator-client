import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Camera from "../../pages/Camera/Camera";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Preview from "../../pages/Preview/Preview";
import UploadImage from "../../pages/UploadImage/UploadImage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="preview" element={<Preview />} />
        <Route path="uploadImage" element={<UploadImage />} />
        <Route path="camera" element={<Camera />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
