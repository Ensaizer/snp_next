// import { PrismaClient } from '@prisma/client';
// import React from 'react';

import { qwew } from './queryUser';

export default async function index() {
  // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const users = await data.json();
  const res = await qwew();
  // console.log(users);

  return <div>index{res.props.user.map((el) => el.email)}</div>;
}
