import { PrismaClient } from '@prisma/client';
import prisma from '../prisma';

describe('prisma', () => {
  test('should return the instance of prisma client', () => {
    expect(prisma).toBeInstanceOf(PrismaClient);
  });
});
