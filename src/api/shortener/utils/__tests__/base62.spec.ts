import { encode, decode } from '../base62';

describe('base62', () => {
  test('should encode and decode correctly the numbers', () => {
    expect(encode(11157)).toEqual('2TX');
    expect(decode('2TX')).toEqual(11157);

    expect(encode(123456789089898)).toEqual('z3wBXxG2');
    expect(decode('z3wBXxG2')).toEqual(123456789089898);
  });
});
