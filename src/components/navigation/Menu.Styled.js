import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    background-color: rgba(255,255,255,.95);
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: 16px;
    font-family: inherit;
    user-select: none;
    &:hover {
        transition: all .2s ease-in-out;
        color: blue;
    }
`;

export const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

