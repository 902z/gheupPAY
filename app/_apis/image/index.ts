interface PresignedURL {
  item: {
    url: string;
  };
  links: Array<object>;
}

import { isAxiosError } from "axios";
import axiosInstance from "../instances";

async function createPredefinedURL(file: File): Promise<PresignedURL> {
  try {
    const { data } = await axiosInstance.post<PresignedURL>("/images", {
      name: file.name,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response);
      throw Error(error.message);
    } else {
      throw Error("error");
    }
  }
}

async function uploadImageToS3(url: string, file: File) {
  try {
    const { data } = await axiosInstance.put(url, file, {
      authorization: false,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response);
      throw Error(error.message);
    } else {
      throw Error("error");
    }
  }
}

export async function getImageUrl(file: File) {
  try {
    const data = await createPredefinedURL(file);
    await uploadImageToS3(data.item.url, file);
    const url = new URL(data.item.url);
    return url.origin + url.pathname;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response);
      throw Error(error.message);
    } else {
      throw Error("error");
    }
  }
}
