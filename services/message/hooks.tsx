"use client";

import { useContext } from "react";
import { MessageContext } from "./context";

export const useDescription = () => {
  const context = useContext(MessageContext);

  return context.description;
};

export const useSetDescription = () => {
  const context = useContext(MessageContext);

  return context.setDescription;
};

export const useStory = () => {
  const context = useContext(MessageContext);

  return context.story;
};

export const useError = () => {
  const context = useContext(MessageContext);

  return context.error;
};

export const useDescribe = () => {
  const context = useContext(MessageContext);

  return context.describe;
};

export const useGenerateStory = () => {
  const context = useContext(MessageContext);

  return context.generateStory;
};

export const useGetStoryScene = () => {
  const context = useContext(MessageContext);

  return context.getStoryScene;
};
