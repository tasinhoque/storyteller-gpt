import { TextProps } from "./types";

export const GenerateButton: React.FC<TextProps> = ({ text }) => (
  <button className="bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    Generate {text}
  </button>
);
