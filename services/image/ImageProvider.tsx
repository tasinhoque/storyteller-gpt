"use client";

import React, { useState } from "react";
import { ImageContext } from "./context";
import { useGetStoryScene } from "../message";

export const ImageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [url, setUrl] = useState("");
  const getStoryScene = useGetStoryScene();

  const generateImage = async () => {
    const description = await getStoryScene();
    console.log(description);

    let res = await fetch("/api/image/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });

    const data = await res.json();
    setUrl(data.url);
  };

  const clearImage = () => setUrl("");

  const value = { url, generateImage, clearImage };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
