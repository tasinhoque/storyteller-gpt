export const ContentArea: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <div className="flex justify-around items-start py-8 px-4 min-h-screen">
    {children}
  </div>
);
