import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigateLink from "@/components/Header/NavigateLink";
import Logout from "@/components/Header/Logout";
import {useRouter} from "next/navigation";
import {AppBar, Box, Button, IconButton, Typography, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const links = [
  {name: 'Главная', href: '/', classNameProps:"text-2xl px-10 hover:bg-accent"},
  {name: 'Профиль', href: '/profile', classNameProps:"text-2xl px-10 hover:bg-accent"},
  {name: 'Авторизация', href: '/login', classNameProps:"text-2xl px-10 hover:bg-accent"},
  {name: 'Регистрация', href: '/registration', classNameProps:"text-2xl px-10 hover:bg-accent"},
];


const Header = async () => {
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SNP
              </Typography>
              {/*<Button color="inherit" component={<Link />} href={links[0].href}>Login</Button>*/}
              { links.map(el => <NavigateLink key={el.name} name={el.name} href={el.href}/>)}
              <Logout/>
            </Toolbar>
          </AppBar>
        </Box>

  );
};

export default Header;
