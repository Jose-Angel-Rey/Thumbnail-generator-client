import styles from "./Home.module.scss";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Row, Col } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    isAuthenticated && navigate("/upload-image");
  }, [isAuthenticated, navigate]);

  return (
    <AnimatedPage>
      <Row className={styles.container} align="middle">
        <Col xs={24} sm={18} className={styles.content}>
          <img
            className={styles.contentLogo}
            src="https://ik.imagekit.io/8k98kll7xyh/Portfolio/Frameworks/Thumbnail_generator/logo_eIY470XQs.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1652355597002"
            alt=""
          />

          <h1 className={styles.contentTitle}>Thumbnail Generator</h1>

          <button
            type="button"
            onClick={() => loginWithRedirect()}
            className={styles.contentLoginButton}
          >
            Log in
          </button>

          <p className={styles.contentLoginAlt}>
            or <Link to="/upload-image">continue without logging in</Link>
          </p>
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default Home;
