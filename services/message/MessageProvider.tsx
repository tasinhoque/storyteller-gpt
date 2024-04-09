import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface MessageContextType {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const defaultMessageContextValue = {
  message: "",
  setMessage: () => {},
};

export const MessageContext = createContext<MessageContextType>(
  defaultMessageContextValue
);

export const MessageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [message, setMessage] = useState("");

  const value = {
    message,
    setMessage,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
