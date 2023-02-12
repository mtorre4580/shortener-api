import { Request, Response } from 'express';
import { base62 } from '../utils';

function getLongURL(req: Request, res: Response) {
  const { number } = req.params;

  const id = base62.decode(number);

  return res.json({ msg: 'api' + id });
}

export default getLongURL;
