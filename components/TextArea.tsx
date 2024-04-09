import { TextProps } from "./types";

export const TextArea: React.FC<TextProps> = ({ text }) => (
  <textarea
    className="w-full h-96 resize-none border border-gray-300 rounded-lg shadow-md px-6 py-3 text-xl font-sans"
    defaultValue={text}
  ></textarea>
);
