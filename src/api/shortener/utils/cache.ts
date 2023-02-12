import NodeCache from 'node-cache';
import IUrl from '../models/url';

// Max keys to store URLs in memory
const MAX_KEYS_URLS = 300;
// TTL to clean automatic keys after interval
const CLEAN_KEYS_AFTER = 1000;

const cacheURLs = new NodeCache({
  maxKeys: MAX_KEYS_URLS,
  checkperiod: CLEAN_KEYS_AFTER,
});

/**
 * Retrieve a key from the cache if exists
 */
function getKey(key: number): IUrl | null {
  return cacheURLs.get(key) || null;
}

/**
 * Set a key / value to store in the cache
 */
function setKey(key: number, value: IUrl) {
  cacheURLs.set(key, value);
}

export { getKey, setKey };
