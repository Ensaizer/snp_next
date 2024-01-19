import Header from '@/app/Header';
import Search from './Search';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import {cookies} from 'next/headers'

export default function Home() {
  // Request?

  const protectedx = cookies().has('accessToken');
  // console.log(protectedx);
  // const auth = useAuth();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <Search /> */}
         <h1>Public Home Page</h1>

      <header>
        <nav>{protectedx ? <p>logged in </p> : <Link href="/login">Login</Link>}</nav>
      </header>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
