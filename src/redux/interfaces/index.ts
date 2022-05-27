export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  localImage: null | string;
  isLoading: boolean;
  uploadedImageId: null | string;
  generatedThumbnails: null | {
    original: originalImage;
    thumbnails: thumbnail[];
  };
}

export type originalImage = {
  bytes: number;
  height: number;
  width: number;
  format: string;
  public_id: string;
  secure_url: string;
};

export type thumbnail = {
  width: number | string;
  height: number | string;
  secure_url: string;
};
