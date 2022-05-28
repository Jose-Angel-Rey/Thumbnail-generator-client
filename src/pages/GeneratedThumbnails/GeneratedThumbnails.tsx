import styles from "./GeneratedThumbnails.module.scss";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import useLocalStorage from "../../hooks/useLocalStorage";
import Loader from "../../components/Loader/Loader";
import BaseImage from "../../components/BaseImage/BaseImage";
import CustomButton from "../../components/CustomButton/CustomButton";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/interfaces/index";
import { Row, Col } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import {
  deleteImage,
  getThumbnails,
  resetState,
  setIsLoading,
} from "../../redux/actions";

const GeneratedThumbnails = () => {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const { removeItem } = useLocalStorage();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IState) => state.isLoading);
  const generatedThumbnails = useSelector(
    (state: IState) => state.generatedThumbnails
  );

  useEffect(() => {
    // @ts-ignore
    imageId && dispatch(getThumbnails(imageId));
  }, [imageId, dispatch]);

  const resetUploadProcess = () => {
    navigate("/upload-image");
    removeItem("localImage");
    // @ts-ignore
    dispatch(deleteImage(imageId));
    dispatch(resetState());
  };

  return (
    <AnimatedPage>
      {isLoading && <Loader message="Loading thumbnails..." />}
      <Row justify="center" align="top" className={styles.container}>
        <Col span={24} className={styles.contentCol}>
          {generatedThumbnails?.original && (
            <BaseImage
              onLoad={() => dispatch(setIsLoading(false))}
              imageSrc={generatedThumbnails?.original?.secure_url}
              bytes={generatedThumbnails?.original?.bytes}
              format={generatedThumbnails?.original?.format}
              height={generatedThumbnails?.original?.height}
              width={generatedThumbnails?.original?.width}
            />
          )}

          <div className={styles.thumbnailsContainer}>
            {generatedThumbnails?.thumbnails &&
              generatedThumbnails?.thumbnails?.map((thumbnail, index) => (
                <ThumbnailCard
                  imageSrc={thumbnail.secure_url}
                  height={thumbnail.height}
                  width={thumbnail.width}
                  key={index}
                />
              ))}
          </div>

          <div className={styles.buttonsContainer}>
            <CustomButton
              text="Generate thumbnails from other image"
              icon={<FileImageOutlined />}
              onClick={() => resetUploadProcess()}
            />
          </div>
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default GeneratedThumbnails;
