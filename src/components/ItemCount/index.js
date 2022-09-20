import { useState } from 'react'
import { Text, Box, Button, VStack, HStack } from '@chakra-ui/react' 
import { toast } from 'react-toastify'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    const increase = () => count < stock && setCount (count + 1) 
    const decrease = () => count > initial && setCount (count - 1) 

    const handleClick = () => {
        onAdd(count);
        toast.success("Producto agregado con éxito")
    }

    return (
        <Box id="contador">
            <VStack>
                <HStack>
                    <Button onClick={decrease} bg="red" size="xs">-</Button>
                    <Text>{count}</Text>
                    <Button onClick={increase} bg="green.300" size="xs">+</Button>
                </HStack>
                <Button bg="blue.500" color="white" onClick={handleClick}>Agregar al carrito</Button>
            </VStack>
        </Box>
        )
}

export { ItemCount }