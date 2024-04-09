"use client";

import { useState } from "react";
import type { NextPage } from "next";
import {
  Card,
  Column,
  ContentArea,
  DescriptionCard,
  GenerateButton,
  ImageUploadCard,
  PageTitle,
  TextArea,
} from "@/components";

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis bibendum nibh in placerat. In nec porta erat. Donec nec fermentum tellus. Mauris quis velit et tellus efficitur ultricies. Vestibulum tincidunt, ligula commodo eleifend cursus, enim orci volutpat enim, eget gravida quam urna nec velit. Donec tellus justo, ultrices ut mi eget, fringilla congue dolor. Curabitur massa est, porta vel risus ut, convallis efficitur augue. Phasellus ut lectus sed mi auctor tincidunt quis nec risus. Pellentesque nunc lectus, laoreet vel odio eu, elementum lacinia massa. Phasellus at dui ornare, dignissim orci ac, laoreet sem. Nulla id ante ligula. Donec accumsan dolor leo.`;

const Page: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);

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

  return (
    <>
      <PageTitle text="Storyteller GPT" />
      <ContentArea>
        <Column>
          <ImageUploadCard />
          <GenerateButton text="Description" />
          <DescriptionCard text={dummyText} />
        </Column>
        <Column>
          <TextArea text={dummyText} />
          <GenerateButton text="Story" />
          <DescriptionCard text={dummyText} />
        </Column>
        <Column>
          <GenerateButton text="Image" />
          <Card />
        </Column>
      </ContentArea>
    </>
  );
};

export default Page;
