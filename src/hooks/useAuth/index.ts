'use client';
import React from 'react';
import Cookies from 'universal-cookie';
import { verifyJwtToken } from '@/libs/auth';
import { JWTPayload } from 'jose';

export function useAuth() {
  const [auth, setAuth] = React.useState<JWTPayload | null>(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get('accessToken') ?? null;
    const verifiedToken = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };

  React.useLayoutEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}
