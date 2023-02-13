import { isValidURL } from '../validator';

describe('validator', () => {
  test('should return true for a correct url', () => {
    expect(isValidURL('https://www.google.com')).toBeTruthy();
  });

  test('should return false for invalid url', () => {
    expect(isValidURL('https:/asd.com')).toBeFalsy();
  });
});
