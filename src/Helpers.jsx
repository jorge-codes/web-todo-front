//helpers.jsx
export const INPUT_MAX_LENGTH = 79;

export function cleanInput(input, maxLength) {
  maxLength = maxLength === undefined ? INPUT_MAX_LENGTH : maxLength;
  return input.trim().substring(0, maxLength);
}
