'use client';
import Header from "@/app/Header";
import Search from "./Search";

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export default function Home() {
  const auth = useAuth();
  return (

    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Search />

    <>      <h1>Public Home Page</h1>
      <header>
        <nav>{auth ? <p>logged in </p> : <Link href="/login">Login</Link>}</nav>
      </header>

        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>

    </>
  );
}
