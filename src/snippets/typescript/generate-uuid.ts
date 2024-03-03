/**
 * Generates a random UUID (Universally Unique Identifier).
 * 
 * @returns {string} The generated UUID.
 */
export const generateUUID = () => {
  let uuid = "";
  const chars = "0123456789abcdef";

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += "-";
    } else if (i === 14) {
      uuid += "4";
    } else if (i === 19) {
      uuid += chars.charAt(Math.random() * chars.length);
    } else {
      uuid += chars.charAt(Math.random() * chars.length);
    }
  }

  return uuid;
};
