import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import Nav from './nav';

const Layout = ({ children }) => {
    return (
        <Box
            w={'100vw'}
            bg={'gray.800'}
            color={'whiteAlpha.800'}
            minH={'100vh'}
        >
            <Container maxW={'container.xl'} bg={'gray.900'}>
                <Nav />
                {children}
                <Box
                    as={'footer'}
                    color={'gray.500'}
                    p={10}
                    textAlign={'center'}
                >
                    <Text>
                        Built with{' '}
                        <Text as={'span'} color={'red'}>
                            ♥
                        </Text>{' '}
                        to competitive gaming by{' '}
                        <Text
                            as={'span'}
                            fontWeight={'bold'}
                            color={'gray.400'}
                        >
                            xarielah
                        </Text>
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Layout;
