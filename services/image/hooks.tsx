"use client";

import { useContext } from "react";
import { ImageContext } from "./context";

export const useImageUrl = () => {
  const context = useContext(ImageContext);

  return context.url;
};

export const useRequestImg = () => {
  const context = useContext(ImageContext);

  return context.requestImg;
};

export const useClearImg = () => {
  const context = useContext(ImageContext);

  return context.clearImg;
};
