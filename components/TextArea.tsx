import { ChangeEventHandler } from "react";
import { TextProps } from "./types";

interface TextAreaProps extends TextProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({ text, onChange }) => (
  <textarea
    className="w-full h-96 resize-none border border-gray-300 rounded-lg shadow-md px-6 py-3 text-xl font-sans"
    defaultValue={text}
    onChange={onChange}
  ></textarea>
);
