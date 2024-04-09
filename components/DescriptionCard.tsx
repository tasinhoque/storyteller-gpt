import { TextProps } from "./types";

export const DescriptionCard: React.FC<TextProps> = ({ text }) => (
  <p
    className="bg-gray-100 w-full h-full rounded-lg shadow-md flex-grow p-6 text-xl font-sans"
    style={{ whiteSpace: "pre-line" }}
  >
    {text}
  </p>
);
