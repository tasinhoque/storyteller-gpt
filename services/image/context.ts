import { createContext } from "react";

interface ImageContextType {
  url: string;
  requestImg: (_prompt: string) => Promise<void>;
  clearImg: () => void;
}

const defaultImageContextValue = {
  url: "",
  requestImg: (_prompt: string) => Promise.resolve(),
  clearImg: () => {},
};

export const ImageContext = createContext<ImageContextType>(
  defaultImageContextValue
);
