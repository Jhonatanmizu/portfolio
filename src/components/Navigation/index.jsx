import { useState } from "react";
import MenuIcon from "../layout/MenuIcon";
import { OverlayMenu } from "../layout/OverlayMenu/styles";
import Nav from "../layout/Nav";
function Navigation() {
  const [isMenu, setIsMenu] = useState(false);
  const handleToggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <OverlayMenu isOpen={isMenu}>
        <Nav handleNavigate={handleToggleMenu} />
      </OverlayMenu>
      <MenuIcon toggleMenu={handleToggleMenu} menuStatus={isMenu} />
    </>
  );
}

export default Navigation;
