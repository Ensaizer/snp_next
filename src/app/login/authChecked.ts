import { verifyJwtToken } from '@/libs/auth';
import { cookies } from 'next/headers';
import Cookies from 'universal-cookie';

const authChecked = async () => {
  const token = cookies().get('accessToken') ?? null;
  if(!token) return null;
  const verifiedToken = await verifyJwtToken(token?.value);
  console.log(verifiedToken);
  return verifiedToken;
};

export default authChecked;
