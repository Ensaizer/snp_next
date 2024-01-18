'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();

    if (success) {
      router.push('/protected');
      router.refresh();
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
