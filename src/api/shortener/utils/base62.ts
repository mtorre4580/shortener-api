const SCHEME = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SCHEME_SIZE = SCHEME.length;

/**
 * Encode the number using the base62 algorithm
 */
function encode(number: number) {
  let result: string[] = [];

  while (number > 0) {
    const division = Math.floor(number / SCHEME_SIZE);
    const remainder = Math.floor(number % SCHEME_SIZE);
    const character = SCHEME[remainder];
    number = division;
    result = [character, ...result];
  }

  return result.join('');
}

/**
 * Decode the string using the base62 algorithm
 */
function decode(chars: string) {
  const charsReverse = chars.split('').reverse();

  return charsReverse.reduce((ac, char, index) => {
    const number = SCHEME.indexOf(char);
    return ac + number * Math.pow(SCHEME_SIZE, index);
  }, 0);
}

export { encode, decode };
