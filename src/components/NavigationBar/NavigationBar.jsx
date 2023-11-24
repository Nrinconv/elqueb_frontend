import "./NavigationBar.css";

import { useState, useEffect } from "react";
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

import userimg from "../../assets/partners/user.png";
import { User } from "@nextui-org/react";

import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

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

const menuItemsAdmin = [
  {
    name: "Ofertas a revisar",
    linkTo: "revision-offers",
  },
  {
    name: "Estadísticas",
    linkTo: "statistics",
  },
];

const menuItemsOfertante = [
  {
    name: "Mis ofertas",
    linkTo: "my-offers",
  },
  {
    name: "Añadir ofertra",
    linkTo: "add-offer",
  },
];

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, []);

  const logout = () => {
    navigate("/home");
  };

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
        {user === "Admin" ? (
          menuItemsAdmin.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NavLink to={item.linkTo} id="text-nabvar">
                {item.name}
              </NavLink>
            </NavbarItem>
          ))
        ) : user === "Findeter" ? (
          menuItemsOfertante.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NavLink to={item.linkTo} id="text-nabvar">
                {item.name}
              </NavLink>
            </NavbarItem>
          ))
        ) : (
          <></>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="/login">Inicio de sesión</Link>
        </NavbarItem> */}
        <NavbarItem>
          {}
          {user ? (
            <>
              <User
                name={user}
                description={
                  user === "Admin"
                    ? "Administrador"
                    : user === "Findeter"
                    ? "Ofertante"
                    : "Actor economía popular"
                }
                avatarProps={{
                  src: "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
                }}
              />
              <Button
                as={Link}
                color="primary"
                href="/home"
                fullWidth
                id="btn-form"
                onClick={() => {
                  sessionStorage.removeItem("user");
                  setUser(null);
                }}
              >
                <div style={{ fontSize: "30px" }}>
                  <TbLogout />
                </div>
              </Button>
            </>
          ) : (
            /*   */
            <Button color="primary" variant="flat" id="btn-login">
              <NavLink to="/login" id="text-nabvar">
                Acceder
              </NavLink>
            </Button>
          )}
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
