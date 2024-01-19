import {NextResponse} from "next/server";
import prisma from "@/app/keke/prismaClient";
export async function POST(request:Request){
    const data = await request.json();
    data.discount = 10;
    data.isApproved = false;
    data.roleId = +data.role;
    delete data.role;
    const createUser = async () => {
        const user = await prisma.user.create({
              data,
        });
        return user;
    };
    const result = await createUser();
    if( result ) return NextResponse.json('ok');
}
