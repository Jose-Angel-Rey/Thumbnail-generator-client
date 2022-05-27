import { IAction, IState } from "../interfaces";
import {
  GET_THUMBNAILS,
  DELETE_IMAGE,
  SET_IS_LOADING,
  RESET_STATE,
  UPLOAD_IMAGE,
  SET_LOCAL_IMAGE,
} from "../types";

const initialState: IState = {
  localImage: null,
  uploadedImageId: null,
  generatedThumbnails: null,
  isLoading: false,
};

const rootReducer = (state = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCAL_IMAGE:
      return {
        ...state,
        localImage: payload,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        uploadedImageId: payload.data.public_id,
      };
    case GET_THUMBNAILS:
      return {
        ...state,
        generatedThumbnails: payload,
      };
    case DELETE_IMAGE:
      return {
        ...state,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case RESET_STATE:
      return {
        ...state,
        localImage: null,
        uploadedImageId: null,
        generatedThumbnails: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
