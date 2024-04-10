import { MouseEventHandler } from "react";
import { TextProps } from "./types";

interface ButtonProps extends TextProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const GenerateButton: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    className="bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={onClick}
  >
    Generate {text}
  </button>
);
