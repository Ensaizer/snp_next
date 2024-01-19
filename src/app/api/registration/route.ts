import {NextResponse} from "next/server";
import prisma from "@/app/keke/prismaClient";
import bcrypt from 'bcrypt'
export async function POST(request:Request){
    const data = await request.json();
    data.discount = 10;
    data.isApproved = false;
    data.roleId = +data.role;
    delete data.role;
    const hash = await bcrypt.hash(data.password, 10)
    data.password = hash;
    const createUser = async () => {
        const user = await prisma.user.create({
              data,
        });
        return user;
    };
    const result = await createUser();
    if( result ) return NextResponse.json('ok');
}
