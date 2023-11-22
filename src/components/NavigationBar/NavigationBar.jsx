import "./NavigationBar.css";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Inicio",
      linkTo: "home",
    },
    {
      name: "Ofertas",
      linkTo: "offers",
    },
    {
      name: "Sobre nosotros",
      linkTo: "about-us",
    },
    {
      name: "Novedades",
      linkTo: "news",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      height="5rem"
      isBordered="true"
      shouldHideOnScroll="true"
      maxWidth="2xl"
      id="navbar-content"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ELQUEB</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <NavLink to={item.linkTo} id="text-nabvar">
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="/login">Inicio de sesión</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
            id="btn-login"
          >
            Acceder
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.linkTo}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavigationBar;
