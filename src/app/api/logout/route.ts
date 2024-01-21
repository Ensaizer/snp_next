import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
export async function GET() {
  console.log('sdklhfksjhjkshf');
  cookies().delete('accessToken');
  return NextResponse.json('ok');
}
