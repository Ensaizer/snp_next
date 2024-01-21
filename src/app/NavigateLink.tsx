'use client';
import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

type TypeLinkProps = {
  name: string;
  href: string;
  classNameProps: string;
};
const NavigateLink: FC<TypeLinkProps> = ({ name, href, classNameProps }) => {
  const auth = useAuth();

  return (
    <li>
      <Link className={classNameProps} href={href}>
        {name}
      </Link>
    </li>
  );
};

export default NavigateLink;
