import prisma from '@/app/keke/prismaClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body)
  // const cartItem = await prisma.cart.create({
  //   data: {
  //     // userId: body.username,
  //     password: body.password,
  //     isApproved: true,
  //   },
  // });
  //   const response = NextResponse.json(
  //     { success: true },
  //     { status: 200, headers: { 'content-type': 'application/json' } },
  //   );
  //   return response;
  // };
  // return NextResponse.json({ success: false }))
}
