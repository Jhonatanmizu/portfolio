import styled from "styled-components"
export const Card = styled.div`
    min-height: 11.5rem;
    display: flex;
    padding: .5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    max-width: 37.5rem;
    filter: drop-shadow(10px 10px 0px #000000);
`