import styled from "styled-components";
import bg from '../../assets/banner.png'
export const HomeContainer = styled.div`
    width: 100%;
    padding: .5rem 1rem;
    height: 100%;

    position: relative;
  ::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    background:url(${bg}) ;
    background-position: center;
    background-repeat: no-repeat;
    filter: opacity(.1);
    width: 100%;
    height: 100%;
  }
`
export const Content = styled.div`
    display: grid;
    align-items: center;
    height: 100%;
    width: 100%;

`
