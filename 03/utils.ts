export const findPriority = (char: string) => {
  const posInAsciiTable = char.charCodeAt(0); // only one letter
  if (posInAsciiTable < 91) {
    // is a capital letter
    return posInAsciiTable - 38;
  } else {
    // is a small letter
    return posInAsciiTable - 96;
  }
};
