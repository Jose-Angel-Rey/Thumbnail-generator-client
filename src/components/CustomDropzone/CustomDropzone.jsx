import styles from "./CustomDropzone.module.scss";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setLocalImage } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const imageExtensionValidation = (file) => {
  const extension = file?.name?.split(".").pop();
  const validExtensions = ["jpeg", "png"];
  return validExtensions.includes(extension);
};

export default function CustomDropzone({ setisValidImageExtension }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    maxFiles: 1,
    maxSize: 5000000,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setisValidImageExtension(imageExtensionValidation(acceptedFiles[0]));
    },
    onError: (error) => {
      console.log("Dropzone error: ", error);
    },
  });

  useEffect(() => {
    files.length > 0 &&
      imageExtensionValidation(files[0]) &&
      dispatch(setLocalImage(files[0].preview)) &&
      navigate("/preview");
  }, [files, dispatch, navigate]);

  return (
    <div
      className={`${styles.container} ${
        isDragActive && styles.containerActive
      } `}
      {...getRootProps()}
    >
      <input
        name="image"
        title="Upload an image to generate thumbnails"
        {...getInputProps()}
      />
      <div className={styles.dropMessage}>
        <CloudUploadOutlined />
        <p>
          {isDragActive
            ? "Drop the image here..."
            : "Click or drag and drop the image here"}
        </p>
      </div>
    </div>
  );
}
