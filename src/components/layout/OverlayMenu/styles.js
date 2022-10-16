import styled from "styled-components";


export const OverlayMenu = styled.div`
    position: fixed;
    z-index: 9;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    transform: ${({ isOpen }) => isOpen ? `translateX(0)` : `translateX(-100vw)`};
    transition:${({ isOpen }) => isOpen ? `all 0.4s ease-in-out` : `all 0.8s ease-in-out`};
    `