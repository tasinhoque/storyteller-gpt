export const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div
    className="bg-gray-200 w-full flex items-center justify-center rounded-lg shadow-lg flex-grow"
    style={{ height: "60vh" }}
  >
    {children}
  </div>
);
