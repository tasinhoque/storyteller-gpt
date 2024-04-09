export const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-lg shadow-lg flex-grow">
    {children}
  </div>
);
