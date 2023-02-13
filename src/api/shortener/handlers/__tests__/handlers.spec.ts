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

  test('should list all the urls', async () => {
    const { status, body } = await request(server).get('/api/tiny');
    expect(status).toEqual(200);
    expect(body).toEqual([
      {
        id: '3515337282682880',
        shortURL: 'http://localhost:3000/api/tiny/g6du1gd32',
        longURL: 'http://www.google.com',
      },
      {
        id: '3515337324625920',
        shortURL: 'http://localhost:3000/api/tiny/g6du46clG',
        longURL: 'https://amazon.com',
      },
      {
        id: '3515337370763264',
        shortURL: 'http://localhost:3000/api/tiny/g6du7dMMo',
        longURL: 'https://www.facebook.com',
      },
    ]);
  });
});
