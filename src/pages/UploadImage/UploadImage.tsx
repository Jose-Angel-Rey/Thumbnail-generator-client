import styles from "./UploadImage.module.scss";
import CustomDropzone from "../../components/CustomDropzone/CustomDropzone";
import { CameraOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

function UploadImage() {
  const navigate = useNavigate();
  const [isValidImageExtension, setisValidImageExtension] = useState(true);

  return (
    <AnimatedPage>
      <Row justify="center" align="top" className={styles.container}>
        <Col span={24} className={styles.contentCol}>
          <section className={styles.uploadOptions}>
            <p className={styles.uploadOptionsDescription}>
              You can upload an image from your device in the following 2 ways:
              {!isValidImageExtension && (
                <strong>** Only png or jpeg image formats are accepted</strong>
              )}
            </p>

            <CustomDropzone
              setisValidImageExtension={setisValidImageExtension}
            />
            <button
              className={styles.uploadOptionsCameraButton}
              type="button"
              onClick={() => navigate("/camera")}
            >
              <CameraOutlined />
              Take a picture
            </button>
          </section>
        </Col>
      </Row>
    </AnimatedPage>
  );
}

export default UploadImage;
