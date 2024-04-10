"use client";

import { useContext } from "react";
import { ImageContext } from "./context";

export const useImageUrl = () => {
  const context = useContext(ImageContext);

  return context.url;
};

export const useGenerateImage = () => {
  const context = useContext(ImageContext);

  return context.generateImage;
};

export const useClearImage = () => {
  const context = useContext(ImageContext);

  return context.clearImage;
};
