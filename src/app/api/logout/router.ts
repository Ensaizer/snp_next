import {NextResponse} from "next/server";
import { cookies } from 'next/headers'
const GET = async () => {
    cookies().delete('accessToken');
    return NextResponse.json('ok');
}

export default GET
