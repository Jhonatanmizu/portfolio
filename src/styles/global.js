import styled, { createGlobalStyle } from 'styled-components'




export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body{
        width: 100%;
        height: 100%;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`
export const Container = styled.section`
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
`
export const Divisor = styled.div`
    width: 100%;
    height: .3rem;
    background-color: ${({ theme }) => theme.colors.white};
`