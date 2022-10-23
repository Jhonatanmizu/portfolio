import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10;
  display: inline;
  cursor: pointer;
`
export const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 6px 0;
  transition: 0.4s;
  opacity: ${({ opacity }) => opacity};
  transform: ${({ change }) => change || null} ;
`
