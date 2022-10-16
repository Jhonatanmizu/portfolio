import styled from "styled-components";


export const Navigation = styled.nav`
    height: 100vh;
    margin: 0;
    padding: 0;

`
export const Menu = styled.ul`
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
`
export const MenuItem = styled.li`
    height: 25%;
    overflow: hidden;
    border: 2px solid #282a36;
    background-color: #44475a;
`
export const MenuLink = styled.a`
    position: relative;
    top: 45%;
    color: #bd93f9;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    display: block;
    text-align: center;
    transition: .2s ease-in-out;
    ::before{
        content: '';
        width: 25vw;
        height: 3px;
        background: #bd93f9;
        position: absolute;
        top: 47.5%;
        left: 0;
        opacity: 0;
        transition: .5s ease;

    }
    :hover{
        transform: scale(1.2);
    }
    :hover::before{
        opacity: 1;
    }
`
