import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider");
  }

  return context.message;
};

export const useSetMessage = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error("useSetMessage must be used within a MessageProvider");
  }

  return context.setMessage;
};
