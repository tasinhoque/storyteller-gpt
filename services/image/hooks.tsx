"use client";

import { useContext } from "react";
import { ImageContext } from "./ImageProvider";

export const useImageUrl = () => {
  const context = useContext(ImageContext);

  if (context === undefined) {
    throw new Error("useImageUrl must be used within an ImageProvider");
  }

  return context.url;
};

export const useRequestImg = () => {
  const context = useContext(ImageContext);

  if (context === undefined) {
    throw new Error("useRequestImg must be used within an ImageProvider");
  }

  return context.requestImg;
};

export const useClearImg = () => {
  const context = useContext(ImageContext);

  if (context === undefined) {
    throw new Error("useClearImg must be used within an ImageProvider");
  }

  return context.clearImg;
};
