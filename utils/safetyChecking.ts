export const isRequestRejected = (message: string) =>
  message.toLowerCase().includes("i can't") ||
  message.toLowerCase().includes("i'm sorry");

export const error =
  "Your request was rejected as a result of our safety system.";
