import generateID from '../uuid';

describe('utils::generateID', () => {
  test('should return a random number', () => {
    expect(typeof generateID()).toBe('number');
  });
});
