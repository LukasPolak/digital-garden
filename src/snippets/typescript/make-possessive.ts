/**
 * Returns the possessive form of a given input string.
 * If the input string ends with 's', it appends an apostrophe.
 * Otherwise, it appends an apostrophe followed by 's'.
 *
 * @param input - The input string.
 * @returns The possessive form of the input string.
 */
export const makePossessive = (input?: string) => {
  if (!input) {
    return "";
  }

  if (input.endsWith("s")) {
    return `${input}'`;
  }

  return `${input}'s`;
};
