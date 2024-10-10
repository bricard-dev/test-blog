import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to auto

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
}
