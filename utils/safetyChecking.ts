export const isRequestRejected = (message: string) =>
  message.includes("I can't") || message.includes("I'm sorry");

export const error =
  "Your request was rejected as a result of our safety system.";
