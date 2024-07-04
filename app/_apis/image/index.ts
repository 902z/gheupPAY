import { isAxiosError } from "axios";
import instance from "@/app/_lib/axios";

interface PresignedURL {
  item: {
    url: string;
  };
  links: Array<object>;
}

async function createPredefinedURL(file: File): Promise<PresignedURL> {
  try {
    const { data } = await instance.post<PresignedURL>("/images", {
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
    const { data } = await instance.put(url, file, {
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

/**
 * 이미지 파일을 받아 S3에 업로드하고 이미지 URL을 반환합니다.
 * @author 이승현
 * @param file url에 올린 이미지 파일
 * @returns ImageUrl
 * @throws Error
 */
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
