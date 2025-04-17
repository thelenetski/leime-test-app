import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import Logo from "../Logo/Logo";
import { Link } from "@heroui/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-100 px-2 mb-4 rounded-lg"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="items-center">
          <Logo />
          <p className="font-bold text-inherit">LEIME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={location.pathname === "/"}>
          <Link color="foreground" href="/">
            Review
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/list"}>
          <Link color="foreground" href="/list">
            Memes List
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-gray-100 max-w-[355px] mx-auto mt-6 rounded-lg">
        <NavbarMenuItem>
          <Link color="foreground" href="/">
            Review
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/list">
            Memes List
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
