import generateID from '../uuid';

describe('generateID', () => {
  test('should return a random number', () => {
    expect(typeof generateID()).toBe('number');
  });
});
