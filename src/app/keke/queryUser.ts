import prisma from './prismaClient';

export const qwew = async () => {
  const user = await prisma.user.findMany({
    //   data: {
    //     name: 'QWE',
    //     email: 'alice@prismqa.io',
    //   },
  });
  console.log(user);
  return { props: { user } };
};
