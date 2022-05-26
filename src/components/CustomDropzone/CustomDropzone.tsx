import styles from "./CustomDropzone.module.scss";
import useLocalStorage from "../../hooks/useLocalStorage";
import validateImageFormat from "../../helpers/validateImageFormat";
import convertBlobToBase64 from "../../helpers/convertBlobToBase64";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { setLocalImage } from "../../redux/actions";
import { CloudUploadOutlined } from "@ant-design/icons";

type CustomDropzoneProps = {
  setisValidImageExtension: (isValidImageExtension: boolean) => void;
};

const CustomDropzone = ({ setisValidImageExtension }: CustomDropzoneProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setItem } = useLocalStorage();
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
        // @ts-ignore
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setisValidImageExtension(validateImageFormat(acceptedFiles[0].name));
    },
    onError: (error) => setisValidImageExtension(false),
  });

  useEffect(() => {
    // @ts-ignore
    if (files.length > 0 && validateImageFormat(files[0].name)) {
      const [image] = files;
      convertBlobToBase64(image).then((base64) => {
        setItem("localImage", base64 as string);
        dispatch(setLocalImage(base64 as string));
      });
      navigate("/preview");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <section
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
    </section>
  );
};

export default CustomDropzone;
