import { Response } from 'express';
import { prisma } from '../utils';

// Only for serialize the BigInt
BigInt.prototype['toJSON'] = function () {
  return this.toString();
};

/**
 * Handler to retrieve all the urls
 */
async function getURLs(_, res: Response) {
  try {
    const urls = await prisma.url.findMany();
    return res.json(urls);
  } catch (err) {
    return res.status(500).json({ message: 'Error listing all the urls' });
  }
}

export default getURLs;
