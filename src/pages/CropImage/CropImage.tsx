import styles from "./CropImage.module.scss";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import getCroppedImg from "../../helpers/cropImage";
import Cropper from "react-easy-crop";
import { useCallback, useEffect, useState } from "react";
import { Point, Area } from "react-easy-crop/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocalImage } from "../../redux/actions";
import { Row, Col, Slider } from "antd";
import { CloseOutlined, SaveFilled } from "@ant-design/icons";
import { IState } from "../../redux/interfaces";

const EditImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localImage = useSelector((state: IState) => state.localImage);
  const { setItem, getItem } = useLocalStorage();
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState("");

  useEffect(() => {
    if (croppedImage) {
      dispatch(setLocalImage(croppedImage));
      setItem("localImage", croppedImage);
      navigate("/preview");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedImage]);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      // @ts-ignore
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        localImage || getItem("localImage"),
        croppedAreaPixels,
        rotation
      );
      // @ts-ignore
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line
  }, [croppedAreaPixels, rotation, localImage]);

  return (
    <AnimatedPage>
      <Row justify="center" align="top" className={styles.container}>
        <Col span={24} className={styles.contentCol}>
          <section className={styles.cropContainer}>
            <Cropper
              image={localImage || getItem("localImage")}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </section>

          <section className={styles.controlsContainer}>
            <div className={styles.sliderContainer}>
              <h2>Zoom</h2>
              <Slider
                handleStyle={{ borderColor: "#454545" }}
                style={{ width: "100%" }}
                value={zoom}
                min={1}
                max={2}
                step={0.05}
                aria-labelledby="Zoom"
                onChange={(e) => setZoom(e)}
              />
            </div>
            <div className={styles.sliderContainer}>
              <h2>Rotation</h2>
              <Slider
                handleStyle={{ borderColor: "#454545" }}
                style={{ width: "100%" }}
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotation"
                onChange={(e) => setRotation(e)}
              />
            </div>
          </section>

          <section className={styles.buttonsContainer}>
            <NavigationButton
              to="/preview"
              text="Cancel"
              icon={<CloseOutlined />}
            />
            <button type="button" onClick={() => showCroppedImage()}>
              <SaveFilled />
              Save
            </button>
          </section>
        </Col>
      </Row>
    </AnimatedPage>
  );
};

export default EditImage;
