import prisma from '@/app/keke/prismaClient';
import {NextResponse} from "next/server";
export const GET = async (request:Request) => {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    console.log(id)
    NextResponse.json({name: 'hello'})
}
