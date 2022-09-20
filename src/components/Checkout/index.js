import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Box, Text, VStack, Checkbox, Divider, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, FormHelperText, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Heading } from '@chakra-ui/react'
import { BellIcon, StarIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify' 
import { db } from "../../firebase" 
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Checkout = () => {

    const [client, setClient] = useState({
        name: ' ',
        lastname: ' ',
        email: ' ',
        pay: '',
        phone:' ',
        address: ' ',
    })

    const [submit, setSubmit] = useState(false)

    const { cartList, totalPrice, cleanCart } = useCartContext()

    const navigate = useNavigate()

    const handlerChangeInput = (e) => {
        setClient({
            ...client, 
            [e.target.name]: e.target.value
        })
    }

    const confirmOrder = (e) => {
        
        e.preventDefault()
        
        const order = {
            items: cartList,
            total: totalPrice(),
            buyer: {...client},
            date: serverTimestamp(),
        }
        
        const ordersCollection = collection(db, 'orders')
        
        const consult = addDoc(ordersCollection, order)

        consult
            .then((res)=> {
                toast.info(`Se ha procesado tu orden ${res.id}`)
            })
            .catch(err => {
                toast.error("Error al procesar tu compra")
            })
        setSubmit(true)
    }

    if (cartList.length === 0) {

        setTimeout(() => {
            navigate('/')
        }, 5000)

        return (
            <main>
                <Flex direction="column" justify="center" alignItems="center" m={10}>
                    <Box border borderColor="red" borderWidth={2}>
                        <Heading color="red" as="h4" size="sm">Error, no tienes productos en el carrito</Heading>
                        <Text color="red" as="b">Serás redirigido al inicio en 5 segundos...</Text>
                    </Box>
                </Flex>
            </main>
        )
    }

    return (
        <main>
            <Box m={10}>
                <Flex direction="column" justify="center" align="center">
                    <Heading as="h1">Formulario de compra</Heading>
                    <Text align="left" m={5}>Por favor, ingresa tus datos para proceder con la compra</Text>
                        <form onSubmit={confirmOrder}>
                            <VStack>

                                <Box width="100%" height="25px"></Box>

                                <FormControl id="name" isRequired>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input type="text" name='name' value={client.name} onChange={handlerChangeInput} size="sm" width="100%"></Input>
                                </FormControl>

                                <Box width="100%" height="25px"></Box>

                                <FormControl id="lastname" isRequired>
                                    <FormLabel>Apellido</FormLabel>
                                    <Input type="text" name='lastname' value={client.lastname} onChange={handlerChangeInput} size="sm" width="100%"></Input>
                                </FormControl>

                                <Box width="100%" height="25px"></Box>

                                <FormControl id="email" isRequired>
                                    <FormLabel>Correo electrónico</FormLabel>
                                    <InputGroup size="sm" width="100%">
                                        <InputLeftAddon children="@"/>
                                        <Input type="email" name='email' value={client.email} onChange={handlerChangeInput}></Input>    
                                    </InputGroup>
                                    <FormHelperText>No compartiremos tu correo con nadie</FormHelperText>
                                </FormControl>

                                <Box width="100%" height="25px"></Box>

                                <FormControl isRequired>
                                    <FormLabel>Método de pago</FormLabel>
                                    <Select placeholder="Elige tu forma de pago" size="sm" name="pay" value={client.pay} onChange={handlerChangeInput}>
                                        <option value="Mercado pago">Mercado pago</option>
                                        <option value="Tarjeta de crédito">Tarjeta de Crédito</option>
                                        <option value="Tarjeta de débito">Tarjeta de Débito</option>
                                    </Select>
                                </FormControl>

                                <Box width="100%" height="25px"></Box>

                                <FormControl id="number" isRequired>
                                    <FormLabel>Número de teléfono</FormLabel>
                                    <InputGroup size="sm" width="100%">
                                        <InputLeftAddon children="+54"/>
                                        <Input type="tel" name='phone' value={client.phone} onChange={handlerChangeInput}></Input>
                                    </InputGroup>
                                    <FormHelperText>No compartiremos tu número telefónico con nadie</FormHelperText>
                                </FormControl>

                                <Box width="100%" height="25px"></Box>

                                <FormControl id="address" isRequired>
                                    <FormLabel>Domicilio</FormLabel>
                                    <Input type="text" name='address' value={client.address} onChange={handlerChangeInput} size="md" width="100%"></Input>
                                    <FormHelperText>No compartiremos tu domicilio con nadie</FormHelperText>
                                </FormControl>

                                <Box width="100%" height="25px"></Box>
                                
                                <FormControl isRequired>
                                    <Checkbox colorScheme="purple">Acepto los términos y condiciones</Checkbox>
                                </FormControl>
                                <Checkbox colorScheme="purple">Quiero recibir notificaciones de promociones {<BellIcon/>}</Checkbox>

                                <Box width="100%" height="25px"></Box>

                                <Button type='submit' bg="green" color="white" m={5}>Confirmar compra</Button>
                            </VStack>
                        </form>
                </Flex>
                <Divider/>
                {
                    submit 
                    &&
                    <Flex justify="center" align="center">
                        <Box m={10}>
                            <VStack>
                                <Alert status='success' variant='subtle'flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='200px'>
                                    <AlertIcon boxSize='40px' mr={0} />
                                    <AlertTitle mt={4} mb={1} fontSize='lg'> Orden confirmada!</AlertTitle>
                                    <AlertDescription maxWidth='sm'>Gracias por tu compra {client.name}</AlertDescription>
                                </Alert>
                                <Text>Por favor, dejanos saber que tan conforme te sentiste con la aplicación</Text>
                                <Slider defaultValue={50} width="30%" colorScheme="yellow" orientation="horizontal" step={20}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb boxSize={6}>
                                        <Box color="yellow.300" as={StarIcon} /> 
                                    </SliderThumb>
                                </Slider>
                                <Link to={'/'}><Button bg="orange" onClick={()=> cleanCart()}>Ir al inicio</Button></Link>
                            </VStack>
                        </Box>
                    </Flex>
                }
            </Box>
        </main>
    )
}

export { Checkout }