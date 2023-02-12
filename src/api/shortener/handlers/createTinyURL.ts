import { Request, Response } from 'express';
import { base62, generateID, prisma, validator } from '../utils';

const BASE_URL_SHORTENER = `${process.env.BASE_URL}/api/tiny/`;

/**
 * Handler to create the tiny URL from the current URL
 */
async function createTinyURL(req: Request, res: Response) {
  try {
    const { url: longURL } = req.body;

    if (!validator.isValidURL(longURL)) {
      return res.status(400).json({ message: 'Invalid URL passed' });
    }

    const id = generateID();
    const shortURL = `${BASE_URL_SHORTENER}${base62.encode(id)}`;

    await prisma.url.create({
      data: {
        id,
        shortURL,
        longURL,
      },
    });

    return res.json({ url: shortURL });
  } catch (err) {
    return res.status(500).json({ message: 'Error creating the shortener' });
  }
}

export default createTinyURL;
