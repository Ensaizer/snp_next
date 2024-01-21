'use client';
import Header from "@/components/Header/Header";
import Search from "../components/Search/Search";

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import {cookies} from 'next/headers'
import Carousel from './Carousel';

export default function Home() {
  // Request?

  const protectedx = cookies().has('accessToken');
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Carousel/>
      <Search />
         <h1>Public Home Page</h1>

      <header>
        <nav>{protectedx ? <p>logged in </p> : <Link href="/login">Login</Link>}</nav>
      </header>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
