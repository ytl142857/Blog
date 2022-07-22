import CryptoJS from "crypto-js";

export const sha256 = (message) => {
  return CryptoJS.SHA256(message).toString();
};
