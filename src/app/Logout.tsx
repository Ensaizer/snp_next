'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();
  const clickHandler = async () => {
    console.log('asiohajd');
    const response = await fetch('/api/logout');
    if (response.ok) router.push('/');
  };

  return (
    <button className="text-2xl px-10 hover:bg-accent" onClick={clickHandler}>
      Выход
    </button>
  );
};

export default Logout;
