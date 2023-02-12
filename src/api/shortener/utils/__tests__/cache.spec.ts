import { getKey, setKey } from '../cache';

describe('utils::cache', () => {
  test('should get / set a value', () => {
    const key = 9817238913;

    const payload = {
      id: key as any,
      shortURL: 'http://localhost:3000/api/tiny/g6d9HFdlK',
      longURL: 'https://www.google.com',
    };

    setKey(key, payload);

    expect(getKey(key)).toEqual(payload);
  });
});
