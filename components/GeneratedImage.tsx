import Image from "next/image";
import { Card } from "./Card";

interface ImageProps {
  url: string;
}

const DefaultImage =
  "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

export const GeneratedImage: React.FC<ImageProps> = ({ url }) => (
  <Card>
    <Image
      src={url || DefaultImage}
      alt="Generated Image"
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-auto"
    />
  </Card>
);
