"use client";

import React, { useState } from "react";
import { MessageContext } from "./context";

const SceneGenerationInstructions =
  "Describe a scene from the story above. Be sure not to cross 1000 characters while generating the description.";

export const MessageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");
  const [error, setError] = useState("");

  const describe = async (url: string) => {
    try {
      let res = await fetch("/api/image/describe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      setDescription(data.description);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const generateStory = async () => {
    try {
      const prompt = `"${description}"\nBased on the scene above, generate a story.`;

      let res = await fetch("/api/text/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setStory(data.message);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const getStoryScene = async (): Promise<string | undefined> => {
    try {
      const prompt = `${story}\n${SceneGenerationInstructions}`;

      let res = await fetch("/api/text/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      return data.message as string;
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const value = {
    description,
    setDescription,
    story,
    error,
    describe,
    generateStory,
    getStoryScene,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
