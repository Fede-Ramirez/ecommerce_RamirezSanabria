import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { Button, Box, Text, Image, Flex } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

const Cart = () => {
    
    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    return (
        <main>
            <Box>
                {cartList.map(product => 
                    <Box key={product.id}>
                        <Flex direction="row" justify="space-evenly" m={5}>
                            <Image src={product.image} width="150px" alt={product.product} />
                            <Text as="b">{product.product}</Text>
                            <Text as="b">{product.brand}</Text>
                            <Text as="b">Cantidad: {product.quantity}</Text>
                            <Text as="b">${product.price * product.quantity}</Text>
                            <DeleteIcon onClick={() => removeProduct(product.id)}/>
                        </Flex>
                    </Box>
                    )}
                {cartList.length === 0 ? 
                <Flex direction="column" justify="center" alignItems="center" m={10}>
                    <Text as="b">El carrito esta vacío!</Text> 
                    <Link to={"/"}><Button bg="greenyellow">Ve a mirar nuestros productos</Button></Link>
                </Flex>
                :
                <Flex direction="column" justify="center" alignItems="center" m={5}>
                    <Text fontSize="md" as="b">Total de su compra: ${totalPrice()}</Text>
                    <Link to={"/checkout"}><Button bg="lightgreen">Terminar mi compra</Button></Link>   
                    <Button bg="orange" onClick={cleanCart}>Vaciar carrito</Button>
                </Flex>}
            </Box>
        </main>
    )
}

export { Cart }