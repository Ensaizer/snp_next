import prisma from "@/app/keke/prismaClient";
import {NextResponse} from "next/server";


export async function POST(request:Request){
    const data = await request.json();
    console.log(data)
    const users = await prisma.user.findMany({
        where: {
            name: {
                contains: data.value,
                mode: 'insensitive',
            },
        },
    })

    return NextResponse.json(users);
}
