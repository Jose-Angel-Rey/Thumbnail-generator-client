import styles from "./Camera.module.scss";
import Webcam from "react-webcam";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocalImage } from "../../redux/actions";
import { Row, Col, Empty } from "antd";
import { CameraFilled, ArrowLeftOutlined } from "@ant-design/icons";
import CustomButton from "../../components/CustomButton/CustomButton";

const Camera = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [devices, setDevices] = useState([]);
  const { setItem } = useLocalStorage();

  const handleDevices = useCallback(
    (mediaDevices: any) =>
      setDevices(mediaDevices.filter(({ kind }: any) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  useEffect(() => {
    if (imageSrc) {
      dispatch(setLocalImage(imageSrc));
      setItem("localImage", imageSrc);
      navigate("/preview");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  return (
    <AnimatedPage>
      <Row justify="center" align="top" className={styles.container}>
        <Col span={24} className={styles.contentCol}>
          {devices.length > 0 ? (
            <>
              <Webcam
                className={styles.webcam}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <div className={styles.webcamButtonsContainer}>
                <NavigationButton
                  to="/upload-image"
                  text="Go Back"
                  icon={<ArrowLeftOutlined />}
                />
                <CustomButton
                  onClick={() =>
                    // @ts-ignore
                    setImageSrc(webcamRef?.current?.getScreenshot())
                  }
                  icon={<CameraFilled />}
                  text="Take Picture"
                />
              </div>
            </>
          ) : (
            <>
              <Empty
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                }}
                description="No cameras detected"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
              <NavigationButton
                to="/upload-image"
                text="Go Back"
                icon={<ArrowLeftOutlined />}
              />
            </>
          )}
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default Camera;
