import { Request, Response } from 'express';
import { base62, prisma, cache } from '../utils';

/**
 * Handler to retrieve the complete URL, check first if exists in the cache
 */
async function getLongURL(req: Request, res: Response) {
  try {
    const { number } = req.params;

    const id = base62.decode(number);

    let urlResponse = cache.getKey(id);

    if (!urlResponse) {
      urlResponse = await prisma.url.findUniqueOrThrow({
        where: {
          id,
        },
      });
      cache.setKey(id, urlResponse);
    }

    return res.status(301).redirect(urlResponse.longURL);
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving the URL' });
  }
}

export default getLongURL;
