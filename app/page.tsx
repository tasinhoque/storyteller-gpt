"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import type { NextPage } from "next";
import {
  Column,
  ContentArea,
  DescriptionCard,
  GenerateButton,
  GeneratedImage,
  ImageUpload,
  LoadingSpinner,
  PageTitle,
  TextArea,
} from "@/components";
import {
  useDescription,
  useGenerateStory,
  useSetDescription,
  useStory,
} from "@/services/message";
import { useGenerateImage, useImageUrl } from "@/services/image";

const dummyText = `A peaceful village.`;

const Page: NextPage = () => {
  const generateStory = useGenerateStory();
  const story = useStory();
  const description = useDescription();
  const setDescription = useSetDescription();
  const generateImage = useGenerateImage();
  const url = useImageUrl();

  const [file, setFile] = useState<File | null>(null);
  const [visionOutput, setVisionOutput] = useState("");
  const [descriptionLoading, setDescriptionLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    // Replace this URL with your API route
    const uploadUrl = "/api/upload";
    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      const data = await response.json();
      alert("Image uploaded successfully!");
      // Handle success (e.g., display the image description returned from your API)
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  const onGenerateDescription: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    setVisionOutput(dummyText);
    setDescription(dummyText);
  };

  const onGenerateStory: MouseEventHandler<HTMLButtonElement> = async () => {
    setDescriptionLoading(true);
    await generateStory();
    setDescriptionLoading(false);
  };

  const onGenerateImage: MouseEventHandler<HTMLButtonElement> = async () => {
    setImageLoading(true);
    await generateImage();
    setImageLoading(false);
  };

  const onDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <PageTitle text="Storyteller GPT" />
      <ContentArea>
        <Column>
          <ImageUpload />
          <GenerateButton text="Description" onClick={onGenerateDescription} />
          <DescriptionCard text={visionOutput} />
        </Column>
        <Column>
          <TextArea text={description} onChange={onDescriptionChange} />
          <GenerateButton text="Story" onClick={onGenerateStory} />
          {descriptionLoading ? (
            <LoadingSpinner />
          ) : (
            <DescriptionCard text={story} />
          )}
        </Column>
        <Column>
          <GenerateButton text="Image" onClick={onGenerateImage} />
          {imageLoading ? <LoadingSpinner /> : <GeneratedImage url={url} />}
        </Column>
      </ContentArea>
    </>
  );
};

export default Page;
