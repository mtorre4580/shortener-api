import { PrismaClient } from '@prisma/client';

// Unique instance for all the app
const prisma = new PrismaClient();

export default prisma;
