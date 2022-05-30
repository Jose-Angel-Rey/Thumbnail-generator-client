import styles from "./ThumbnailCard.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { Image } from "antd";
import downloadImage from "../../helpers/downloadImage";
import CustomToast from "../CustomToast/CustomToast";
import {
  CopyOutlined,
  CloudDownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";

type ThumbnailCardProps = {
  imageSrc: string;
  height: string | number;
  width: string | number;
};

const ThumbnailCard = ({ imageSrc, height, width }: ThumbnailCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShowingImage, setIsShowingImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 4000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div className={styles.card}>
      <img
        onClick={() => setIsShowingImage(true)}
        className={styles.cardImage}
        src={imageSrc}
        alt={`Thumbnail: ${width}x${height}`}
      />
      <h2 className={styles.cardTitle}>{`${width} x ${height}`}</h2>

      <div className={styles.cardActions}>
        <button
          onClick={() => setIsShowingImage(true)}
          type="button"
          title="Preview"
        >
          <EyeOutlined />
        </button>

        <CopyToClipboard text={imageSrc} onCopy={() => setIsCopied(true)}>
          <button type="button" title="Copy to clipboard">
            <CopyOutlined />
          </button>
        </CopyToClipboard>

        <button
          type="button"
          onClick={() =>
            downloadImage(imageSrc, `thumbnail-${width}x${height}.jpeg`)
          }
          title="Download"
        >
          <CloudDownloadOutlined />
        </button>
      </div>

      <Image
        style={{ display: "none" }}
        src={imageSrc}
        title="Thumbnail preview"
        preview={{
          visible: isShowingImage,
          src: imageSrc,
          onVisibleChange: (value) => {
            setIsShowingImage(value);
          },
        }}
      />

      {isCopied && (
        <CustomToast
          icon={<CopyOutlined />}
          message="Image URL copied to clipboard"
        />
      )}
    </div>
  );
};

export default ThumbnailCard;
