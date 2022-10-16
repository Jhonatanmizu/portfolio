import { Menu, MenuItem, MenuLink, Navigation } from "./styles";

export default function Nav({ handleNavigate }) {
  return (
    <Navigation>
      <Menu>
        <MenuItem id="nav-1" bgcolor>
          <MenuLink href="#home" onClick={handleNavigate}>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem id="nav-2">
          <MenuLink href="#about" onClick={handleNavigate}>
            About
          </MenuLink>
        </MenuItem>
        <MenuItem id="nav-1" bgcolor>
          <MenuLink href="#skills" onClick={handleNavigate}>
            Skills
          </MenuLink>
        </MenuItem>
        <MenuItem id="nav-1">
          <MenuLink href="#contact" onClick={handleNavigate}>
            Contact
          </MenuLink>
        </MenuItem>
      </Menu>
    </Navigation>
  );
}
