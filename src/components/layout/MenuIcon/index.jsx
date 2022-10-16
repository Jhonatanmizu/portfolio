import { useEffect, useState } from "react";
import { Container, Bar } from "./styles";

export default function MenuIcon({ toggleMenu, menuStatus }) {
  const [barAnimation, setBarAnimation] = useState({
    bar1: null,
    bar2: null,
    bar3: null,
  });
  const handleAnimation = () => {
    if (menuStatus) {
      setBarAnimation({
        bar1: `translate(0, 11px) rotate(-45deg)`,
        bar2: 0,
        bar3: `translate(0, -11px) rotate(45deg)`,
      });
    } else {
      setBarAnimation({
        bar1: null,
        bar2: null,
        bar3: null,
      });
    }
  };
  useEffect(() => {
    handleAnimation();
  }, [menuStatus]);

  return (
    <Container
      onClick={() => {
        handleAnimation();
        toggleMenu();
      }}
    >
      <Bar change={barAnimation.bar1} />
      <Bar opacity={barAnimation.bar2} />
      <Bar change={barAnimation.bar3} />
    </Container>
  );
}
