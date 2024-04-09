import Image from "next/image";
import { Card } from "./Card";

export const ImageUploadCard: React.FC = () => (
  <Card>
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
      <Image src="/image-upload.svg" alt="Upload" height={200} width={200} />
    </label>
  </Card>
);
