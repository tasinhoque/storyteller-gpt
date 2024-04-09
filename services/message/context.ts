import { Dispatch, SetStateAction, createContext } from "react";

interface MessageContextType {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  story: string;
  error: string;
  describe: (url: string) => Promise<void>;
  generateStory: () => Promise<void>;
  getStoryScene: () => Promise<string | undefined>;
}

const defaultMessageContextValue = {
  description: "",
  setDescription: () => {},
  story: "",
  error: "",
  describe: () => Promise.resolve(),
  generateStory: () => Promise.resolve(),
  getStoryScene: () => Promise.resolve(""),
};

export const MessageContext = createContext<MessageContextType>(
  defaultMessageContextValue
);
