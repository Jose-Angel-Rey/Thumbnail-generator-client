import { saveAs } from "file-saver";

const downloadImage = (urlImage: string, filename: string) => {
  saveAs(urlImage, filename);
};

export default downloadImage;
