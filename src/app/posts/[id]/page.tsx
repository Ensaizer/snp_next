import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const qqq = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export default async function index() {
  const users = await qqq();

  return <div>hello</div>;
}
