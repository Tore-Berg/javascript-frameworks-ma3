import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {
    StyledMenu,
    CloseToggle,
    StyledLink
} from './Menu.Styled'

const Menu = ({handleNavToggle}) => {
    return (
        <StyledMenu>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <CloseToggle onClick={handleNavToggle}><FaTimes /></CloseToggle>
        </StyledMenu>
    )
}
export default Menu
