"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis bibendum nibh in placerat. In nec porta erat. Donec nec fermentum tellus. Mauris quis velit et tellus efficitur ultricies. Vestibulum tincidunt, ligula commodo eleifend cursus, enim orci volutpat enim, eget gravida quam urna nec velit. Donec tellus justo, ultrices ut mi eget, fringilla congue dolor. Curabitur massa est, porta vel risus ut, convallis efficitur augue. Phasellus ut lectus sed mi auctor tincidunt quis nec risus. Pellentesque nunc lectus, laoreet vel odio eu, elementum lacinia massa. Phasellus at dui ornare, dignissim orci ac, laoreet sem. Nulla id ante ligula. Donec accumsan dolor leo.

Ut et posuere arcu. In non diam fermentum, hendrerit sapien at, posuere neque. Donec quis lorem non sem feugiat iaculis. Sed erat leo, eleifend eu lacus id, imperdiet tempor nunc. Pellentesque ultricies et leo rutrum convallis. Nam eget magna tincidunt, viverra nibh et, lacinia ante. Cras ligula arcu, consectetur in pellentesque ut, lacinia quis ex. Maecenas iaculis arcu sit amet orci lobortis, vel scelerisque justo vehicula. In ullamcorper commodo velit, at tincidunt ante sollicitudin sed. Praesent iaculis sit amet sapien sit amet porttitor. Mauris dignissim magna molestie malesuada porta. Nulla in lectus finibus, faucibus metus ac, tempus ligula. Curabitur lacinia hendrerit libero, ac eleifend felis pulvinar non. Nullam facilisis non diam sit amet molestie. Suspendisse a ligula sed ante faucibus fermentum quis et nunc.

Maecenas rhoncus est sapien, in molestie purus condimentum sit amet. Suspendisse potenti. In ligula libero, sodales vel ligula vel, interdum venenatis libero. Sed vestibulum velit nec lacus vulputate, a fringilla nisi tempus. Sed egestas pulvinar ligula, vitae blandit turpis. Curabitur dictum odio arcu, eget lacinia magna finibus vel. Aliquam semper accumsan orci, quis elementum orci sodales sed. Vestibulum sit amet malesuada ante. Curabitur commodo ultricies pretium. Sed leo purus, posuere id varius ac, iaculis quis est. Sed et ultrices quam. Integer fringilla vulputate maximus. Maecenas hendrerit vel sapien luctus aliquet.

Sed vulputate, nunc eu pulvinar aliquet, felis magna finibus orci, sit amet feugiat dui libero ut nibh. Donec aliquet pharetra dolor sed sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus fringilla urna, quis pellentesque arcu pellentesque non. Mauris dignissim dui ac lectus ultricies tincidunt. Phasellus eleifend vitae mi non posuere. Ut mattis sollicitudin metus eleifend semper. In in urna sit amet libero tristique accumsan ac at ex. Praesent tincidunt nec erat id consequat. Etiam finibus ex ligula, ut rutrum nibh eleifend sed. In hendrerit malesuada leo at placerat.

Nulla id ligula non lectus interdum suscipit ac varius urna. Nunc bibendum viverra sem non ornare. Pellentesque id urna dictum, auctor purus non, lacinia libero. Sed ultricies ullamcorper turpis nec luctus. In in nisi vitae augue maximus eleifend in quis massa. Mauris quis blandit justo, ac hendrerit lorem. Cras tempus nulla dapibus, consequat leo non, cursus felis. Nam id metus pellentesque, placerat lorem ut, finibus est. Nam nisl justo, tempor non dignissim venenatis, placerat sit amet massa.`;

const UploadPage: NextPage = () => {
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
      <h1 className="text-6xl font-sans flex justify-center pt-12">
        Storyteller GPT
      </h1>
      <div className="flex justify-around items-start py-8 px-4 min-h-screen">
        {/* First Column */}
        <div className="flex flex-col items-center w-1/3 space-y-6 p-6">
          <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-lg shadow-lg">
            <label
              htmlFor="image-upload"
              className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
            >
              <input
                type="file"
                id="image-upload"
                className="hidden"
                accept="image/*"
              />
              <Image
                src="/image-upload.svg"
                alt="Upload"
                height={200}
                width={200}
              />
            </label>
          </div>
          <button className="bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Generate Description
          </button>
          <p
            className="bg-gray-100 w-full h-full rounded-lg shadow-md flex-grow p-6 text-xl font-sans"
            style={{ whiteSpace: "pre-line" }}
          >
            {dummyText}
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center w-1/3 space-y-6 p-6">
          <textarea
            className="w-full h-96 resize-none border border-gray-300 rounded-lg shadow-md px-6 py-3 text-xl font-sans"
            value={dummyText}
          ></textarea>
          <button className="bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Generate Story
          </button>
          <p
            className="bg-gray-100 w-full h-full rounded-lg shadow-md flex-grow p-6 text-xl font-sans"
            style={{ whiteSpace: "pre-line" }}
          >
            {dummyText}
          </p>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center w-1/3 space-y-6 p-6">
          <button className="bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Generate Image
          </button>
          <div className="bg-gray-100 w-full h-96 rounded-lg shadow-md"></div>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
