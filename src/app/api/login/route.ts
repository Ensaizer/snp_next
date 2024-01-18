import { SignJWT } from 'jose';
import { NextResponse } from 'next/server';
import { getJwtSecretKey } from '@/libs/auth';


export async function POST(request) {
  const body = await request.json();
  if (body.username === 'admin' && body.password === 'admin') {
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
