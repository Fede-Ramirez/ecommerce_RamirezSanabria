import React from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {

    const { totalQuantity } = useCartContext()

    return (
        <NavLink to="/cart"> 
            <FaCartArrowDown/>
            <p className="badge">{totalQuantity()}</p>
        </NavLink>
    )
}

export { CartWidget }