import React from 'react'
import { FaCartArrowDown } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import { Text } from '@chakra-ui/react'

const CartWidget = () => {

    const { totalQuantity } = useCartContext()

    return (
        <NavLink to="/cart"> 
            <FaCartArrowDown/>
            <Text className="badge">{totalQuantity()}</Text>
        </NavLink>
    )
}

export { CartWidget }