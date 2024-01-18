import prisma from './prismaClient';

export const qwew = async () => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: 3,
    },
  });

  return { props: { user } };
};
