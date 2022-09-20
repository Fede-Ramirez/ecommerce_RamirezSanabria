import logo from '../../assets/img/logo.png'
import { CartWidget } from '../CartWidget'
import { NavLink } from 'react-router-dom'
import { Box, Image, HStack, Flex, IconButton, Heading } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <header>
            <Flex justify="space-between" alignItems="center">
                <NavLink to="/">
                        <Box>
                            <Flex>
                                <Image src={logo} alt="logo"/>
                                <Heading as="h2">Filolearning shop</Heading>
                            </Flex>
                    </Box>
                </NavLink>
                <nav>
                    <HStack>
                        <NavLink to="category/apuntes">Apuntes</NavLink>
                        <NavLink to="category/utiles">Útiles</NavLink>
                        <NavLink to="category/accesorios">Mochilas y accesorios</NavLink>
                        <NavLink to="category/calculadoras">Calculadoras</NavLink>
                        <CartWidget/>
                        <IconButton colorScheme="messenger" aria-label="search database" icon={<SearchIcon/>} size="sm"/>
                    </HStack>
                </nav>
            </Flex>
        </header> 
    )
}

export { Navbar }