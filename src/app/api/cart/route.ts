import prisma from '@/app/keke/prismaClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body)
  const cartItem = await prisma.cart.create({
    data: {
      userId: body.username,
      productId: body.product,
      quantity: body.quantity,
    },
  });
  return NextResponse.json(cartItem)
}
