import request from 'supertest';
import server from '../../../../server';

describe('handlers', () => {
  test('should redirect to https://amazon.com', async () => {
    const { status, text } = await request(server).get('/api/tiny/g6du46clG');
    expect(status).toEqual(301);
    expect(text).toEqual(
      'Moved Permanently. Redirecting to https://amazon.com',
    );
  });
});
