import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Logo from "../Logo/Logo";
import { Link } from "@heroui/react";

const Header = () => {
  return (
    <Navbar className="p-2 flex justify-between mb-4">
      <NavbarBrand className="items-center">
        <Logo />
        <p className="font-bold text-inherit">LEIME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Review
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/list">
            Memes List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
