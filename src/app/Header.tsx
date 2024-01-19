import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigateLink from "@/app/NavigateLink";
import Logout from "@/app/Logout";

const links = [
  {name: 'Главная', href: '/', classNameProps:"text-2xl px-10 hover:bg-accent"},
  {name: 'Профиль', href: '/profile', classNameProps:"text-2xl px-10 hover:bg-accent"},
  {name: 'Авторизация', href: '/login', classNameProps:"text-2xl px-10 hover:bg-accent"},
  {name: 'Регистрация', href: '/registration', classNameProps:"text-2xl px-10 hover:bg-accent"},
];


const Header = async () => {
  return (
    <header className="header">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/profile">Профиль</Link>
              </li>
              <li>
                <Link href="/login">Авторизация</Link>
              </li>
              <li>
                <Link href="/registration">Регистрация</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">
            SNP
            {/* <Image alt="logo" src="/logo.png" width='100' height='32' /> */}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 flex gap-5">
            {links.map(el => <NavigateLink name={el.name} href={el.href} key={el.name} classNameProps={el.classNameProps}/>)}
            <li>
              <Logout/>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary btn-wide text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <g clip-path="url(#a)">
                <path
                  fill="#FFC44D"
                  d="m10 24-1-4-1-4-1-4-1-4h25l-2 14c-.14 1.04-.88 2-2 2H10Z"
                />
                <path
                  fill="#668077"
                  d="M23 27c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H2m7 4H3m4-8H1m25 4H11m14 4H12m15-8H10m0 12h17c1.125 0 1.862-.962 2-2l2-14H6L4 1H1m12 28a2 2 0 1 0-4.001.001A2 2 0 0 0 13 29Zm12 0a2 2 0 1 0-4.001.001A2 2 0 0 0 25 29Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h32v32H0z" />
                </clipPath>
              </defs>
            </svg>
            Корзина
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
