import { ChildrenProps } from "./types";

export const ContentArea: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex justify-around items-start py-8 px-4 min-h-screen">
    {children}
  </div>
);
