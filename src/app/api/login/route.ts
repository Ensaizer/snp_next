import { SignJWT } from 'jose';
import { NextResponse } from 'next/server';
import { getJwtSecretKey } from '@/libs/auth';
import prisma from '@/app/keke/prismaClient';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const body = await request.json();
  const username = await prisma.user.findFirst({
    where: {
      email: body.username,
      password: await bcrypt.hash(body.password, 10),
      isApproved: true,
    },
  });
  if (username) {
    const token = await new SignJWT({
      username: body.username,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('10000s')
      .sign(getJwtSecretKey());
    const response = NextResponse.json(
      { success: true },
      { status: 200, headers: { 'content-type': 'application/json' } },
    );
    response.cookies.set({
      name: 'accessToken',
      value: token,
      path: '/',
    });
    return response;
  }
  return NextResponse.json({ success: false });
}
