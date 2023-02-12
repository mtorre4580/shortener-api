const REGEX_VALID_URL =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

/**
 * Validator to check if the current string has URL format
 */
function isValidURL(url: string) {
  return REGEX_VALID_URL.test(url);
}

export { isValidURL };
