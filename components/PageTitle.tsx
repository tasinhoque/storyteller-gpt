import { TextProps } from "./types";

export const PageTitle: React.FC<TextProps> = ({ text }) => (
  <h1 className="text-6xl font-sans flex justify-center pt-12">{text}</h1>
);
