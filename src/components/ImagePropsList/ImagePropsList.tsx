import styles from "./ImagePropsList.module.scss";

type ImagePropsListProps = {
  format: string;
  bytes: string | number;
  height: string | number;
  width: string | number;
};

const ImagePropsList = ({
  format,
  bytes,
  width,
  height,
}: ImagePropsListProps) => {
  return (
    <ul className={styles.imagePropsList} aria-label="Image properties">
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
  );
};

export default ImagePropsList;
