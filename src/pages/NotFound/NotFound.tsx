import styles from "./NotFound.module.scss";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/upload-image"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatedPage>
      <div className={styles.container}>
        <h1 className={styles.contentTitle}>Page not found</h1>

        <img
          src="https://ik.imagekit.io/8k98kll7xyh/Portfolio/Frameworks/Thumbnail_generator/404_j13Uibpf_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1653655629718"
          alt="Page not found"
          className={styles.contentImage}
        />
      </div>
    </AnimatedPage>
  );
}
