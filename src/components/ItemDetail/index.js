import { useState } from "react"
import { ItemCount } from "../ItemCount"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { Image, Box, Button, Text, Flex, VStack } from "@chakra-ui/react"

const ItemDetail = ({ listProduct }) => {

    const [productAdded, setProductAdded] = useState(false)

    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart(listProduct, quantity)
        setProductAdded(true)
    }

    return (
        <main>
            <Flex justify="center" alignItems="center">
                <Box m={5}>
                        <VStack>
                            <Image src={listProduct.image} alt={listProduct.product} className="images"/>
                            <Text>{listProduct.product}</Text>
                            <Text>{listProduct.brand}</Text>
                            <Text as="b">${listProduct.price}</Text>
                            {
                            productAdded ? 
                            <NavLink to="/cart">
                                <Button bg="yellow">Ir al carrito</Button>
                            </NavLink>
                            :
                            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                            }
                        </VStack>
                </Box>    
            </Flex>
        </main>
    )
}

export { ItemDetail }