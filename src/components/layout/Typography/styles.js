import styled from "styled-components";

export const Headline = styled.h1`
    line-height: 40px;
    color:${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
`

export const Title = styled.h2`
    line-height: 40px;
    color:${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.medium};
`