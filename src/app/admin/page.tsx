import prisma from '@/prismaClient';
import authChecked from '../login/authChecked';
import { NextResponse } from 'next/server';

export default async function AdminPage() {
  const user = await authChecked();
  if (!user) return NextResponse.redirect('/');
  const inDB = await prisma.user.findFirst({
    where: {
      email: user.username,
      roleId: 1,
    },
  });
  if (!inDB) NextResponse.redirect('/');
  return <h1>AdminPage</h1>;
}
