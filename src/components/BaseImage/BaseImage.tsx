import styles from "./BaseImage.module.scss";
import downloadImage from "../../helpers/downloadImage";
import CustomButton from "../CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Image, Row, Col } from "antd";
import {
  EyeOutlined,
  CopyOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import CustomToast from "../CustomToast/CustomToast";

type UploadedImageProps = {
  imageSrc: string;
  bytes: string | number;
  format: string;
  height: string | number;
  width: string | number;
  onLoad: () => void;
};

const UploadedImage = ({
  imageSrc,
  bytes,
  onLoad,
  format,
  height,
  width,
}: UploadedImageProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShowingImage, setIsShowingImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 4000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <>
      <Row className={styles.container} justify="center" align="middle">
        {isCopied && (
          <CustomToast
            icon={<CopyOutlined />}
            message="Image URL copied to clipboard"
          />
        )}
        <Col xs={24} sm={24} md={15} lg={18} className={styles.imageCol}>
          <img
            alt="Original"
            src={imageSrc}
            className={styles.imageColBaseImage}
            onClick={() => setIsShowingImage(true)}
            onLoad={() => onLoad()}
          />
          <ul className={styles.imagePropsList}>
            <li className={styles.imagePropsListItem}>
              <strong>Format: </strong>
              <span>{format}</span>
            </li>
            <li className={styles.imagePropsListItem}>
              <strong>Size: </strong>
              <span>{bytes} bytes</span>
            </li>
            <li className={styles.imagePropsListItem}>
              <strong>Height: </strong>
              <span>{height}px</span>
            </li>
            <li className={styles.imagePropsListItem}>
              <strong>Width: </strong>
              <span>{width}px</span>
            </li>
          </ul>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className={styles.buttonsCol}>
          <CustomButton
            icon={<EyeOutlined />}
            text="Show image"
            onClick={() => setIsShowingImage(true)}
          />
          <CopyToClipboard text={imageSrc} onCopy={() => setIsCopied(true)}>
            <CustomButton icon={<CopyOutlined />} text="Copy to clipboard" />
          </CopyToClipboard>

          <CustomButton
            icon={<CloudDownloadOutlined />}
            onClick={() => downloadImage(imageSrc, "base-image.jpeg")}
            text="Download"
          />
        </Col>

        <Image
          style={{ display: "none" }}
          src={imageSrc}
          preview={{
            visible: isShowingImage,
            src: imageSrc,
            onVisibleChange: (value) => {
              setIsShowingImage(value);
            },
          }}
        />
      </Row>
    </>
  );
};

export default UploadedImage;
