import { Request, Response } from 'express';
import { base62, generateID } from '../utils';

const BASE_URL_SHORTENER = `${process.env.BASE_URL}/api/shortener/`;

function createShortenerURL(req: Request, res: Response) {
  const { url: longURL } = req.body;

  const id = generateID();
  const shortURL = `${BASE_URL_SHORTENER}${base62.encode(id)}`;

  const payload = {
    shortURL,
    longURL,
  };

  console.log('id generated', id);
  console.log('payload to store', payload);

  return res.json({ url: shortURL });
}

export default createShortenerURL;
