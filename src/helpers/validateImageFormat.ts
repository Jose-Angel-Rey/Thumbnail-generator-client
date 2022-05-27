const checkImageFormat = (filename: string) => {
  const extension = filename?.split(".").pop();
  const validExtensions = ["jpeg", "png"];
  return validExtensions.includes(extension as string);
};

export default checkImageFormat;
