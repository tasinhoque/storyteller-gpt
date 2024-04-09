"use client";

import React, { createContext, useState } from "react";

const defaultImageContextValue = {
  url: "",
  requestImg: () => Promise.resolve(),
  clearImg: () => {},
};

export const ImageContext = createContext(defaultImageContextValue);

export const ImageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [url, setUrl] = useState("");

  const requestImg = async () => {
    let prompt = "your fetch logic here";
    let res = await fetch("/api/img", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setUrl(data.url); // Assuming the response contains the image URL in a url property
  };

  const clearImg = () => setUrl("");

  const value = { url, requestImg, clearImg };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
