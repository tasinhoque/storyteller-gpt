import { createContext } from "react";

interface ImageContextType {
  url: string;
  generateImage: () => Promise<void>;
  clearImage: () => void;
}

const defaultImageContextValue = {
  url: "",
  generateImage: () => Promise.resolve(),
  clearImage: () => {},
};

export const ImageContext = createContext<ImageContextType>(
  defaultImageContextValue
);
