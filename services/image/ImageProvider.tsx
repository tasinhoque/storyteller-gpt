"use client";

import React, { useState } from "react";
import { ImageContext } from "./context";
import { useGetStoryScene } from "../message";

export const ImageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [url, setUrl] = useState("");
  const scene = useGetStoryScene();

  const requestImg = async () => {
    let res = await fetch("/api/image/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scene }),
    });

    const data = await res.json();
    setUrl(data.url);
  };

  const clearImg = () => setUrl("");

  const value = { url, requestImg, clearImg };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
