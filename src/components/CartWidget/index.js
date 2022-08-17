import React from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
        <NavLink to="/cart"> 
            <FaCartArrowDown/>
        </NavLink>
    )
}

export { CartWidget }