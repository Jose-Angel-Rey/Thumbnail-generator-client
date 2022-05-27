import axios from "axios";
import { Dispatch } from "redux";
import { IAction } from "../interfaces";
import {
  SET_IS_LOADING,
  DELETE_IMAGE,
  GET_THUMBNAILS,
  RESET_STATE,
  SET_ERROR,
  SET_LOCAL_IMAGE,
  UPLOAD_IMAGE,
} from "../types";

export const setLocalImage = (base64Image: string) => {
  return {
    type: SET_LOCAL_IMAGE,
    payload: base64Image,
  };
};

export const uploadImage = (base64: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const { data } = await axios.post(`/thumbnail/uploadImage`, { base64 });
      dispatch({
        type: UPLOAD_IMAGE,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const getThumbnails = (imageId: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const { data } = await axios.get(`/thumbnail/${imageId}`);
      dispatch({
        type: GET_THUMBNAILS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const deleteImage = (imageId: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const { data } = await axios.delete(`/thumbnail/${imageId}`);
      dispatch({
        type: DELETE_IMAGE,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
};
