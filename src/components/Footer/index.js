import React from 'react'
import { Box, VStack, Text, Flex, Spacer, Heading } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons' 

const Footer = () => {
    return (
        <footer>
            <Flex justify="center" alignItems="center">
                    <Box m={5}>
                        <Spacer/>
                        <Heading as="h3" size="md" align="center">Contactanos</Heading>
                        <Spacer/>
                        <VStack>
                            <Spacer/>
                            <Text>{<PhoneIcon color="green.500" w={5} h={5} m={0.5}/>} 1173038567</Text>
                            <Spacer/>
                            <Text>{<EmailIcon color="blue.500" w={5} h={5} m={0.5}/>}filolearningshop@gmail.com</Text>
                            <Spacer/>
                        </VStack>
                        <Text>© Filolearning Shop All Rights Reserved</Text>
                    </Box>
            </Flex>
        </footer>
    )
}

export { Footer }