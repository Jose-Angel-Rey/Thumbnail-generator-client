import styles from "./Preview.module.scss";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import Loader from "../../components/Loader/Loader";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setIsLoading, uploadImage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/interfaces/index";
import { Row, Col } from "antd";
import {
  FileImageOutlined,
  ScissorOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const Preview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uploadedImageId = useSelector((state: IState) => state.uploadedImageId);
  const isLoading = useSelector((state: IState) => state.isLoading);
  const localImage = useSelector((state: IState) => state.localImage);
  const { getItem } = useLocalStorage();

  const handleImageUpload = () => {
    const imageToUpload = localImage || getItem("localImage");

    if (imageToUpload) {
      // @ts-ignore
      dispatch(uploadImage(imageToUpload));
      dispatch(setIsLoading(true));
    }
  };

  useEffect(() => {
    uploadedImageId && navigate(`/generated-thumbnails/${uploadedImageId}`);
    // eslint-disable-next-line
  }, [uploadedImageId]);

  return (
    <AnimatedPage>
      <NavigationMenu />
      {isLoading && <Loader message="Generating thumbnails..." />}

      <Row justify="center" align="top" className={styles.container}>
        <Col span={24} className={styles.contentCol}>
          {(localImage || getItem("localImage")) && (
            <img
              className={styles.previewImage}
              src={localImage || getItem("localImage")}
              alt="preview"
            />
          )}

          <div className={styles.buttonsContainer}>
            <NavigationButton
              text="Change image"
              icon={<ArrowLeftOutlined />}
              to="/upload-image"
            />
            <NavigationButton
              text="Crop image"
              icon={<ScissorOutlined />}
              to="/crop-image"
            />
            <CustomButton
              onClick={() => handleImageUpload()}
              icon={<FileImageOutlined />}
              text="Generate thumbnails"
            />
          </div>
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default Preview;
