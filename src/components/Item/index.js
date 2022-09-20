import { NavLink } from 'react-router-dom'
import { Box, Text, Button, VStack, Image } from "@chakra-ui/react"

const Item = ({ product }) => {

  return (
            <Box>
              <VStack>
                <Image src={product.image} alt={product.product} className="images"/>
                <Text>{product.product}</Text>
                <Text>{product.brand}</Text>
                <Text as="b">${product.price}</Text>
                <NavLink to={`product/${product.id}`}>
                  <Button bg="orange">Ver detalle</Button>
                </NavLink>
              </VStack>
            </Box>
  )
}

export { Item }