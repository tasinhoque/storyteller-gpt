import { ChildrenProps } from "./types";

export const Column: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex flex-col items-center w-1/3 space-y-6 p-6">
    {children}
  </div>
);
